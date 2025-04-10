import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, g as addAttribute } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$Head } from '../../../chunks/_head_BxfbaKWv.mjs';
import { a as $$Topbar, $ as $$Footer } from '../../../chunks/_topbar_b9tgrSJ9.mjs';
import { $ as $$Scripts } from '../../../chunks/_scripts_HQSeCJHe.mjs';
import { c as convertPathToHtml } from '../../../chunks/index_DAq3Jr2u.mjs';
export { renderers } from '../../../renderers.mjs';

const $$LogoSwitch = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Sidebar Mini";
  const path = "/adminlte";
  const htmlPath = convertPathToHtml(path);
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg sidebar-mini bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} <!--begin::Sidebar--> <aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark"> <!--begin::Sidebar Brand--> <div class="sidebar-brand"> <!--begin::Brand Link--> <a${addAttribute(htmlPath + "/index.html", "href")} class="brand-link logo-switch"> <!--begin::Brand Image Small--> <img src="/assets/img/AdminLTELogo.png" alt="AdminLTE Logo Small" class="brand-image-xl logo-xs opacity-75 shadow"> <!--end::Brand Image Small--> <!--begin::Brand Image Large--> <img src="/assets/img/AdminLTEFullLogo.png" alt="AdminLTE Logo Large" class="brand-image-xs logo-xl opacity-75"> <!--end::Brand Image Large--> </a> <!--end::Brand Link--> </div> <!-- Sidebar --> <!--begin::Sidebar Wrapper--> <div class="sidebar-wrapper"> <nav class="mt-2"> <!--begin::Sidebar Menu--> <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false"> <li class="nav-header">MULTI LEVEL EXAMPLE</li> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-circle-fill"></i> <p>Level 1</p> </a> </li> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-circle-fill"></i> <p>
Level 1
<i class="nav-arrow bi bi-chevron-right"></i> </p> </a> <ul class="nav nav-treeview"> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-circle"></i> <p>Level 2</p> </a> </li> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-circle"></i> <p>
Level 2
<i class="nav-arrow bi bi-chevron-right"></i> </p> </a> <ul class="nav nav-treeview"> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-record-circle-fill"></i> <p>Level 3</p> </a> </li> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-record-circle-fill"></i> <p>Level 3</p> </a> </li> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-record-circle-fill"></i> <p>Level 3</p> </a> </li> </ul> </li> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-circle"></i> <p>Level 2</p> </a> </li> </ul> </li> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-circle-fill"></i> <p>Level 1</p> </a> </li> </ul> <!--end::Sidebar Menu--> </nav> </div> <!--end::Sidebar Wrapper--> </aside> <!--end::Sidebar--> <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Logo Switch</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item active" aria-current="page">
Logo Switch
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-12"> <!-- Default box --> <div class="card"> <div class="card-header"> <h3 class="card-title">Title</h3> <div class="card-tools"> <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse" title="Collapse"> <i data-lte-icon="expand" class="bi bi-plus-lg"></i> <i data-lte-icon="collapse" class="bi bi-dash-lg"></i> </button> <button type="button" class="btn btn-tool" data-lte-toggle="card-remove" title="Remove"> <i class="bi bi-x-lg"></i> </button> </div> </div> <div class="card-body">
Start creating your amazing application!
</div> <!-- /.card-body --> <div class="card-footer">Footer</div> <!-- /.card-footer--> </div> <!-- /.card --> </div> </div> <!--begin::Row--> </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/logo-switch.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/layout/logo-switch.astro";
const $$url = "/pages/layout/logo-switch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LogoSwitch,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
