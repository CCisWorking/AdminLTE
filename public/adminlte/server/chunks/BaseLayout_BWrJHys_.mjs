import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderComponent, ah as renderSlot, j as renderHead, h as createAstro } from './astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$Scripts, a as $$Head } from './_scripts_CdAMe_9E.mjs';
import { $ as $$Footer, a as $$Topbar } from './_topbar_b9tgrSJ9.mjs';
import { $ as $$Sidenav } from './_sidenav_D2LPsFFD.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, path = "/adminlte/", mainPage, page } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body class="sidebar-mini layout-fixed sidebar-expand-lg bg-body-tertiary"> <div class="app-wrapper"> ', " ", ' <main class="app-main"> ', " </main> ", " </div> ", " <script", "><\/script> </body> </html>"])), renderComponent($$result, "Head", $$Head, { "title": title, "path": path }), renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path }), renderComponent($$result, "Sidebar", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Scripts", $$Scripts, { "path": path }), addAttribute(`${path}js/adminlte.min.js`, "src"));
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
