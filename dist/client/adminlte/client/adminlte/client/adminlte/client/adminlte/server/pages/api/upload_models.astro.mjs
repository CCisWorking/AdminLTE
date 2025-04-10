import fs from 'fs';
import path from 'path';
import { v4 } from 'uuid';
import { d as db } from '../../chunks/db.server_DJboH3cr.mjs';
export { renderers } from '../../renderers.mjs';

function handleModelUpload(data) {
  const structureDir = "uploads/structure";
  fs.mkdirSync(structureDir, { recursive: true });
  const structurePath = path.join(structureDir, `${v4()}.json`);
  fs.writeFileSync(structurePath, data.structureBuffer);
  const tx = db.transaction(() => {
    db.prepare(`INSERT OR IGNORE INTO projects (projectname) VALUES (?)`).run(data.projectname);
    db.prepare(`
      INSERT INTO models (projectname, versionname, structure)
      VALUES (?, ?, ?)
    `).run(data.projectname, data.versionname, structurePath);
  });
  tx();
  console.log(`📁 Saved architecture: ${structurePath}`);
}

const POST = async ({ request }) => {
  request.headers.get("origin");
  request.headers.get("content-type") || "";
  console.log("🚀 Content-Type:", request.headers.get("content-type"));
  try {
    const form = await request.formData();
    const projectname = form.get("project_name")?.toString();
    const versionname = form.get("version_name")?.toString();
    const architectureFile = form.get("architecture");
    if (!projectname || !versionname || !architectureFile) {
      return new Response(JSON.stringify({ error: "Missing fields or files." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const structureBuffer = Buffer.from(await architectureFile.arrayBuffer());
    handleModelUpload({
      projectname,
      versionname,
      structureBuffer
    });
    return new Response(JSON.stringify({ message: "✅ Model uploaded successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
        // 可视情况更改为具体前端地址
      }
    });
  } catch (err) {
    console.error("❌ Upload failed:", err);
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
