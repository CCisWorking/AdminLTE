import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const req = context.request;
  const contentType = req.headers.get("content-type") || "";
  const method = req.method;
  const url = new URL(req.url);

//   console.log(`🎯 HIT ${req.method} ${url.pathname}`);
//   console.log(`📨 Headers:`, Object.fromEntries(req.headers.entries()));

  // 手动放行跨站 multipart POST 请求
  if (method === "POST" && contentType.startsWith("multipart/form-data")) {
    // console.log(`✅ Manually allowing POST ${url.pathname}`);
    return next();
  }

  return next();
});
