import { e as createComponent, r as renderTemplate, g as addAttribute, h as createAstro } from './astro/server_ClJiVcmy.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, path, isRtl } = Astro2.props;
  const cssPath = isRtl ? ".rtl" : "";
  return renderTemplate`<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>${title}</title><!--begin::Primary Meta Tags--><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="title"${addAttribute(title, "content")}><meta name="author" content="ColorlibHQ"><meta name="description" content="AdminLTE is a Free Bootstrap 5 Admin Dashboard, 30 example pages using Vanilla JS."><meta name="keywords" content="bootstrap 5, bootstrap, bootstrap 5 admin dashboard, bootstrap 5 dashboard, bootstrap 5 charts, bootstrap 5 calendar, bootstrap 5 datepicker, bootstrap 5 tables, bootstrap 5 datatable, vanilla js datatable, colorlibhq, colorlibhq dashboard, colorlibhq admin dashboard"><!--end::Primary Meta Tags--><!--begin::Fonts--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css" integrity="sha256-tXJfXfp6Ewt1ilPzLDtQnJV4hclT9XuaZUKyUvmyr+Q=" crossorigin="anonymous"><!--end::Fonts--><!--begin::Third Party Plugin(OverlayScrollbars)--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.10.1/styles/overlayscrollbars.min.css" integrity="sha256-tZHrRjVqNSRyWg2wbppGnT833E/Ys0DHWGwT04GiqQg=" crossorigin="anonymous"><!--end::Third Party Plugin(OverlayScrollbars)--><!--begin::Third Party Plugin(Bootstrap Icons)--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" integrity="sha256-9kPW/n5nn53j4WMRYAxe9c1rCY96Oogo/MKSVdKzPmI=" crossorigin="anonymous"><!--end::Third Party Plugin(Bootstrap Icons)--><!--begin::Required Plugin(AdminLTE)--><link rel="stylesheet"${addAttribute(path + "/css/adminlte" + cssPath + ".css", "href")}><!--end::Required Plugin(AdminLTE)-->`;
}, "/home/ec2-user/vit/AdminLTE/src/html/components/_head.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Scripts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Scripts;
  const { path } = Astro2.props;
  const adminlteJsUrl = path + "/js/adminlte.js";
  return renderTemplate(_a || (_a = __template(['<!--begin::Third Party Plugin(OverlayScrollbars)--><script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.10.1/browser/overlayscrollbars.browser.es6.min.js" integrity="sha256-dghWARbRe2eLlIJ56wNB+b760ywulqK3DzZYEpsg2fQ=" crossorigin="anonymous"><\/script> <!--end::Third Party Plugin(OverlayScrollbars)--><!--begin::Required Plugin(popperjs for Bootstrap 5)--><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"><\/script> <!--end::Required Plugin(popperjs for Bootstrap 5)--><!--begin::Required Plugin(Bootstrap 5)--><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"><\/script> <!--end::Required Plugin(Bootstrap 5)--><!--begin::Required Plugin(AdminLTE)--><script', '><\/script> <!--end::Required Plugin(AdminLTE)--><!--begin::OverlayScrollbars Configure--><script>\n  const SELECTOR_SIDEBAR_WRAPPER = ".sidebar-wrapper";\n  const Default = {\n    scrollbarTheme: "os-theme-light",\n    scrollbarAutoHide: "leave",\n    scrollbarClickScroll: true,\n  };\n  document.addEventListener("DOMContentLoaded", function () {\n    const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);\n    if (\n      sidebarWrapper &&\n      typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined"\n    ) {\n      OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {\n        scrollbars: {\n          theme: Default.scrollbarTheme,\n          autoHide: Default.scrollbarAutoHide,\n          clickScroll: Default.scrollbarClickScroll,\n        },\n      });\n    }\n  });\n<\/script> <!--end::OverlayScrollbars Configure-->'])), addAttribute(adminlteJsUrl, "src"));
}, "/home/ec2-user/vit/AdminLTE/src/html/components/_scripts.astro", undefined);

export { $$Head as $, $$Scripts as a };
