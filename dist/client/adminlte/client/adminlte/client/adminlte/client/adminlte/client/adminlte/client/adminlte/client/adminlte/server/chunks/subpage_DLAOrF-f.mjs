import { e as createComponent, r as renderTemplate, i as renderComponent, ah as renderSlot, j as renderHead } from './astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { a as $$Footer, $ as $$Topbar } from './_topbar_lfdB47rZ.mjs';
import { $ as $$Sidenav } from './_sidenav_CaNsonyP.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Subpage = createComponent(($$result, $$props, $$slots) => {
  const path = "/adminlte/";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><title>Project</title><link rel="stylesheet" href="/adminlte/css/adminlte.min.css">', '</head> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <div class="app-wrapper"> ', " ", ' <main class="app-main"> ', " </main> ", ' </div> <script src="/adminlte/js/adminlte.min.js"><\/script> </body> </html>'])), renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path }), renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": "projects", "page": "project" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "path": path }));
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/subpage.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/subpage.astro";
const $$url = "/pages/layout/subpage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Subpage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Subpage as $, _page as _ };
