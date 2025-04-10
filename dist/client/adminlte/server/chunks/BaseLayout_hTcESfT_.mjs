import { e as createComponent, r as renderTemplate, j as renderHead, i as renderComponent, ah as renderSlot, ai as renderScript, h as createAstro } from './astro/server_SkqlK2Go.mjs';
import 'kleur/colors';
import { a as $$Topbar, $ as $$Footer } from './_topbar_C_8m1BtR.mjs';
import { $ as $$Sidenav } from './_sidenav_eUDGz7a2.mjs';
import { $ as $$Scripts } from './_scripts_BllsgJfj.mjs';

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, mainPage, page, path } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><title>${title}</title><link rel="stylesheet" href="/adminlte/css/adminlte.min.css">${renderHead()}</head> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidebar", $$Sidenav, { "mainPage": mainPage, "page": page, "path": path })} <main class="app-main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "path": path })} </div> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} ${renderScript($$result, "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/BaseLayout.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/BaseLayout.astro";
const $$url = "/pages/layout/BaseLayout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BaseLayout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, _page as _ };
