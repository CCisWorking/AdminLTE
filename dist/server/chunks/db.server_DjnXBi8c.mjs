import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// utils/db.server.js

const db = new Database('./data.db');

function getDb() {
  return db;
}

function getProjectsWithVersions() {
  const db = getDb();
  const rows = db.prepare(`
    SELECT projectname, versionname FROM models
  `).all();

  const grouped = {};
  for (const row of rows) {
    if (!grouped[row.projectname]) {
      grouped[row.projectname] = [];
    }
    grouped[row.projectname].push(row.versionname);
  }

  return Object.entries(grouped).map(([projectname, versions]) => ({
    projectname,
    versions
  }));
}

function getModelByProjectAndVersion(projectname, versionname) {
  const stmt = db.prepare(`
    SELECT * FROM models
    WHERE projectname = ? AND versionname = ?
    LIMIT 1
  `);
  
  const model = stmt.get(projectname, versionname);
  
  if (model && model.architecture) {
    const architecturePath = path.resolve(model.architecture);
    try {
      const jsonContent = fs.readFileSync(architecturePath, 'utf-8');
      model.architecture = JSON.parse(jsonContent); // 现在才是 JSON 对象
    } catch (err) {
      console.err('⚠️ Failed to load or parse architecture file:', err);
      model.architecture = null;
    }
  }
  else {
    console.log("model null");
  }
  return model;
}

export { getModelByProjectAndVersion as a, db as d, getProjectsWithVersions as g };
