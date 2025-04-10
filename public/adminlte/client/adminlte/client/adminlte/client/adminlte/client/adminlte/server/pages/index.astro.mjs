import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMH4HD29.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "activePages": ["dashboard", "dashboard-home"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-fluid py-4"> <h1 class="mb-3">Dashboard</h1> <p>Welcome to the main dashboard.</p> </div> ` })}`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/index.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
