import type { APIRoute } from 'astro';
import { handleModelUpload } from '../../lib/server/upload_models.js';

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const contentType = request.headers.get('content-type') || '';
  console.log('🚀 Content-Type:', request.headers.get('content-type'));

  try {
    const form = await request.formData();

    const projectname = form.get('project_name')?.toString();
    const versionname = form.get('version_name')?.toString();
    const architectureFile = form.get('architecture') as File;

    if (!projectname || !versionname || !architectureFile) {
      return new Response(JSON.stringify({ error: 'Missing fields or files.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!architectureFile) {
      console.error('🚫 Missing architecture file');
      return new Response(JSON.stringify({ error: 'No architecture file provided' }), { status: 400 });
    }

    const arrayBuffer = await architectureFile.arrayBuffer();
    console.log('✅ Received architecture file of size:', arrayBuffer.byteLength);

    const architectureBuffer = Buffer.from(arrayBuffer);
    if (!architectureBuffer || architectureBuffer.length === 0) {
      console.error('🚫 Failed to parse architecture buffer');
      return new Response(JSON.stringify({ error: 'Invalid buffer' }), { status: 400 });
    }

    handleModelUpload({
      projectname,
      versionname,
      architectureBuffer: architectureBuffer
    });


    return new Response(JSON.stringify({ message: '✅ Model uploaded successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // 可视情况更改为具体前端地址
      }
    });
  } catch (err) {
    console.error('❌ Upload failed:', err);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
