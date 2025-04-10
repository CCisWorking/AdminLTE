import { d as defineMiddleware, s as sequence } from './chunks/index_DavFBkCc.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CnqQ27jc.mjs';
import 'kleur/colors';
import './chunks/astro/server_BcTFPzss.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const req = context.request;
  const contentType = req.headers.get("content-type") || "";
  const method = req.method;
  new URL(req.url);
  if (method === "POST" && contentType.startsWith("multipart/form-data")) {
    return next();
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
