import { e as createComponent, r as renderTemplate, k as renderComponent, w as renderSlot, m as maybeRenderHead, h as createAstro } from '../../chunks/astro/server_ClJiVcmy.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Subpage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Subpage;
  return renderTemplate(_a || (_a = __template(['// src/layouts/DashboardLayout.astro\n<link rel="stylesheet" href="/adminlte/css/adminlte.min.css">\nconst { title = "Dashboard" } = Astro.props;\nimport Footer from "@components/dashboard/_footer.astro";\nimport Topbar from "@components/dashboard/_topbar.astro";\nimport Sidenav from "@components/dashboard/_sidenav.astro";\n<title>', "\n    \n  \n  ", '<body class="layout-fixed sidebar-expand-lg bg-body-tertiary">\n    <div class="app-wrapper">\n      ', "\n      ", '\n      <main class="app-main">\n        ', "\n      </main>\n      ", '\n    </div>\n    <script src="/adminlte/js/adminlte.min.js"><\/script>\n  </body>\n</title>'])), title, maybeRenderHead(), renderComponent($$result, "Topbar", Topbar, {}), renderComponent($$result, "Sidenav", Sidenav, { "mainPage": "dashboard", "page": "project" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, {}));
}, "/home/ec2-user/vit/AdminLTE/src/html/pages/layout/subpage.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/html/pages/layout/subpage.astro";
const $$url = "/layout/subpage.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Subpage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
