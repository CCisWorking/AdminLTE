import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$Head, a as $$Scripts } from '../../../chunks/_scripts_Cju_VIGu.mjs';
import { $ as $$Topbar, a as $$Footer } from '../../../chunks/_topbar_lfdB47rZ.mjs';
import { C as Content } from '../../../chunks/how-to-contribute_iK-JZZAE.mjs';
import { $ as $$Sidenav } from '../../../chunks/_sidenav_CaNsonyP.mjs';
export { renderers } from '../../../renderers.mjs';

const $$HowToContribute = createComponent(($$result, $$props, $$slots) => {
  const title = "How To Contribute | AdminLTE 4";
  const path = "../../../dist";
  const mainPage = "docs";
  const page = "how-to-contribute";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">How To Contribute</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Docs</a></li> <li class="breadcrumb-item active" aria-current="page">
How To Contribute
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> ${renderComponent($$result, "HowToContribute", Content, {})} </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/docs/how-to-contribute.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/docs/how-to-contribute.astro";
const $$url = "/pages/docs/how-to-contribute";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HowToContribute,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
