import Database from 'better-sqlite3';

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

export { db as d, getProjectsWithVersions as g };
