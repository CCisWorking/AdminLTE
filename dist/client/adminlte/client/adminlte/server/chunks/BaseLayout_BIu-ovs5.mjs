import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, ah as renderSlot, h as createAstro } from './astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { a as $$Head, $ as $$Scripts } from './_scripts_CdAMe_9E.mjs';
import { a as $$Topbar, $ as $$Footer } from './_topbar_b9tgrSJ9.mjs';
import { $ as $$Sidenav } from './_sidenav_CaNsonyP.mjs';

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, path, mainPage, page } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <main class="app-main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} </body></html>`;
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
