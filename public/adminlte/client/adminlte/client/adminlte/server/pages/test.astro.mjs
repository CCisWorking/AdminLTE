import { e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_SkqlK2Go.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(($$result, $$props, $$slots) => {
  console.log("\u2705 SSR hit: /test");
  return renderTemplate`${maybeRenderHead()}<h1>Hello from /test</h1>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/test.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Test,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
