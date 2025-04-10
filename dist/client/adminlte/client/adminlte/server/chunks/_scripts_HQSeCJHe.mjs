import { e as createComponent, r as renderTemplate, g as addAttribute, h as createAstro } from './astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import 'clsx';

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
}, "/home/ec2-user/vit/AdminLTE/src/pages/components/_scripts.astro", undefined);

export { $$Scripts as $ };
