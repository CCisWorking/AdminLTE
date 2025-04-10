import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import db from '../../utils/db.server.js'; // 你已有的 SQLite 连接实例

export function handleModelUpload(data: {
  projectname: string;
  versionname: string;
  architectureBuffer: Buffer;
}) {
  const architectureDir = 'uploads/architecture';
  fs.mkdirSync(architectureDir, { recursive: true });

  const architecturePath = path.join(architectureDir, `${uuidv4()}.json`);
  fs.writeFileSync(architecturePath, data.architectureBuffer);

  const tx = db.transaction(() => {
    db.prepare(`INSERT OR IGNORE INTO projects (projectname) VALUES (?)`)
      .run(data.projectname);

    db.prepare(`
      INSERT INTO models (projectname, versionname, architecture)
      VALUES (?, ?, ?)
    `).run(data.projectname, data.versionname, architecturePath);
  });

  tx();
  console.log(`📁 Saved architecture: ${architecturePath}`);
}
