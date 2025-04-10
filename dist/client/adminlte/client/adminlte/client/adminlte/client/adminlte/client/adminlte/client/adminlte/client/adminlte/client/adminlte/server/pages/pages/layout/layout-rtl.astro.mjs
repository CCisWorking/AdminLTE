import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$Head, a as $$Scripts } from '../../../chunks/_scripts_Cju_VIGu.mjs';
import { $ as $$Topbar, a as $$Footer } from '../../../chunks/_topbar_lfdB47rZ.mjs';
import { $ as $$Sidenav } from '../../../chunks/_sidenav_CaNsonyP.mjs';
export { renderers } from '../../../renderers.mjs';

const $$LayoutRtl = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Layout RTL";
  const path = "../../../dist";
  const mainPage = "layout";
  const page = "layout-rtl";
  const isRtl = true;
  return renderTemplate`<html lang="en" dir="rtl"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path, "isRtl": isRtl })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Layout RTL</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item active" aria-current="page">
Layout RTL
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-12"> <!-- Default box --> <div class="card"> <div class="card-header"> <h3 class="card-title">Title</h3> <div class="card-tools"> <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse" title="Collapse"> <i data-lte-icon="expand" class="bi bi-plus-lg"></i> <i data-lte-icon="collapse" class="bi bi-dash-lg"></i> </button> <button type="button" class="btn btn-tool" data-lte-toggle="card-remove" title="Remove"> <i class="bi bi-x-lg"></i> </button> </div> </div> <div class="card-body">
Start creating your amazing application!
</div> <!-- /.card-body --> <div class="card-footer">Footer</div> <!-- /.card-footer--> </div> <!-- /.card --> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/layout-rtl.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/layout-rtl.astro";
const $$url = "/pages/layout/layout-rtl";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LayoutRtl,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
