import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { a as $$Head, $ as $$Scripts } from '../../../chunks/_scripts_CdAMe_9E.mjs';
import { a as $$Topbar, $ as $$Footer } from '../../../chunks/_topbar_b9tgrSJ9.mjs';
import { $ as $$Sidenav } from '../../../chunks/_sidenav_B_NiA9ny.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Icons = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Icons";
  const path = "../../../dist";
  const mainPage = "ui-elements";
  const page = "icons";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Icons</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item active" aria-current="page">
Icons
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> <!-- Timelime example  --> <div class="row"> <div class="col-12"> <!-- The icons --> <div class="col-12"> <div class="card card-primary card-outline"> <div class="card-header"> <h3 class="card-title">Icons</h3> </div> <div class="card-body"> <p>You can use any font library you like with AdminLTE 4.</p> <strong>Recommendations</strong> <ul class="mt-1"> <li><a href="https://fontawesome.com/" target="_blank">Font Awesome</a></li> <li><a href="https://useiconic.com/open/" target="_blank">Iconic Icons</a></li> <li><a href="https://ionicons.com/" target="_blank">Ion Icons</a></li> </ul> </div> </div> </div> </div> <!-- /.col --> </div> <!-- /.row --> </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/UI/icons.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/UI/icons.astro";
const $$url = "/pages/UI/icons";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Icons,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
