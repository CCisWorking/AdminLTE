import { e as createComponent, r as renderTemplate, i as renderComponent, ah as renderSlot, j as renderHead, h as createAstro } from './astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Topbar } from './_topbar_b9tgrSJ9.mjs';
import { $ as $$Sidenav } from './_sidenav_C2K11bST.mjs';
import { $ as $$Scripts } from './_scripts_HQSeCJHe.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, mainPage, page, path } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><title>', '</title><link rel="stylesheet" href="/adminlte/css/adminlte.min.css">', '</head> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <div class="app-wrapper"> ', " ", ' <main class="app-main"> ', " </main> ", " </div> ", ' <script src="/adminlte/js/adminlte.min.js"><\/script> </body> </html>'])), title, renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path, "is:inline": true }), renderComponent($$result, "Sidebar", $$Sidenav, { "mainPage": mainPage, "page": page, "path": path, "is:inline": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "path": path, "is:inline": true }), renderComponent($$result, "Scripts", $$Scripts, { "path": path, "is:inline": true }));
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
