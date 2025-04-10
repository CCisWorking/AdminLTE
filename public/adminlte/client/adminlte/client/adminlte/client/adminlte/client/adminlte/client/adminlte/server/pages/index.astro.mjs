import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIu-ovs5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Vitness | Dashboard";
  const path = "/adminlte/";
  const mainPage = "dashboard";
  const page = "index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "path": path, "mainPage": mainPage, "page": page }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="app-content-header"> <div class="container-fluid"> <h3 class="mb-0">Dashboard</h3> </div> </div> <div class="app-content"> <div class="container-fluid"> <p>欢迎来到 Dashboard</p> </div> </div> ` })}`;
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
