import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_SkqlK2Go.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_hTcESfT_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Vitness | Dashboard";
  const mainPage = "dashboard";
  const page = "index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "mainPage": mainPage, "page": page }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-fluid py-4"> <h1>Welcome to the Dashboard</h1> </div> ` })}`;
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
