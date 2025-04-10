import { _ as __astro_tag_component__, i as Fragment, j as createVNode, e as createComponent, r as renderTemplate, k as renderComponent, l as renderHead } from '../../../chunks/astro/server_ClJiVcmy.mjs';
import 'kleur/colors';
import { $ as $$Head, a as $$Scripts } from '../../../chunks/_scripts_WFXfkjJj.mjs';
import { $ as $$Topbar, a as $$Footer } from '../../../chunks/_topbar_D6t4p7UY.mjs';
import 'clsx';
import { $ as $$Sidenav } from '../../../chunks/_sidenav_DiFREQNB.mjs';
export { renderers } from '../../../renderers.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The sidebar used in this page to the left provides an example of what your sidebar would look like. Construction of a sidebar:"
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-html",
        children: "<!--begin::Sidebar-->\n<aside class=\"app-sidebar bg-body-secondary shadow\" data-bs-theme=\"dark\">\n  <!--begin::Sidebar Brand-->\n  <div class=\"sidebar-brand\">\n    <!--begin::Brand Link-->\n    <a href=\"./index.html\" class=\"brand-link\">\n      <!--begin::Brand Image-->\n      <img\n        src=\"./assets/img/AdminLTELogo.png\"\n        alt=\"AdminLTE Logo\"\n        class=\"brand-image opacity-75 shadow\"\n      />\n      <!--end::Brand Image-->\n      <!--begin::Brand Text-->\n      <span class=\"brand-text fw-light\">AdminLTE 4</span>\n      <!--end::Brand Text-->\n    </a>\n    <!--end::Brand Link-->\n  </div>\n  <!--end::Sidebar Brand-->\n  <!--begin::Sidebar Wrapper-->\n  <div class=\"sidebar-wrapper\">\n    <nav class=\"mt-2\">\n      <!--begin::Sidebar Menu-->\n      <ul\n        class=\"nav sidebar-menu flex-column\"\n        data-lte-toggle=\"treeview\"\n        role=\"menu\"\n        data-accordion=\"false\"\n      >\n        <li class=\"nav-header\">Nav Header</li>\n        <li class=\"nav-item\">\n          <a href=\"./index.html\" class=\"nav-link\">\n            <i class=\"nav-icon bi bi-circle-fill\"></i>\n            <p>Level 1</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"#\" class=\"nav-link\">\n            <i class=\"nav-icon bi bi-circle-fill\"></i>\n            <p>\n              Treeview\n              <i class=\"nav-arrow bi bi-chevron-right\"></i>\n            </p>\n          </a>\n          <ul class=\"nav nav-treeview\">\n            <li class=\"nav-item\">\n              <a href=\"./index.html\" class=\"nav-link\">\n                <i class=\"nav-icon bi bi-circle\"></i>\n                <p>\n                  Level 2 (Badge)\n                  <span\n                    class=\"nav-badge badge text-bg-secondary me-3\"\n                  >\n                    6\n                  </span>\n                </p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"./index.html\" class=\"nav-link\">\n                <i class=\"nav-icon bi bi-circle\"></i>\n                <p>Level 2</p>\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"./index.html\" class=\"nav-link active\">\n            <i class=\"nav-icon bi bi-circle-fill\"></i>\n            <p>Level 1 Active</p>\n          </a>\n        </li>\n\n        <li class=\"nav-item menu-open\">\n          <a href=\"#\" class=\"nav-link active\">\n            <i class=\"nav-icon bi bi-circle-fill\"></i>\n            <p>\n              Treeview Menu Open\n              <i class=\"nav-arrow bi bi-chevron-right\"></i>\n            </p>\n          </a>\n          <ul class=\"nav nav-treeview\">\n            <li class=\"nav-item\">\n              <a href=\"./index.html\" class=\"nav-link active\">\n                <i class=\"nav-icon bi bi-circle\"></i>\n                <p>Level 2 Active</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"./index.html\" class=\"nav-link\">\n                <i class=\"nav-icon bi bi-circle\"></i>\n                <p>Level 2</p>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n      <!--end::Sidebar Menu-->\n    </nav>\n  </div>\n  <!--end::Sidebar Wrapper-->\n</aside>\n<!--end::Sidebar-->\n"
      })
    }), "\n", createVNode(_components.h2, {
      id: "alternate-logo",
      children: "Alternate Logo"
    }), "\n", createVNode(_components.p, {
      children: "You can use two logo images instead of logo with text, you only need to change the markup to this:"
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-html",
        children: "<div class=\"sidebar-brand\">\n  <a href=\"./index.html\" class=\"brand-link logo-switch\">\n    <img\n      src=\"./assets/img/AdminLTELogo.png\"\n      alt=\"AdminLTE Logo Small\"\n      class=\"brand-image-xl logo-xs opacity-75 shadow\"\n    />\n    <img\n      src=\"./assets/img/AdminLTEFullLogo.png\"\n      alt=\"AdminLTE Logo Large\"\n      class=\"brand-image-xs logo-xl opacity-75\"\n    />\n  </a>\n</div>\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/html/components/docs/components/main-sidebar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$MainSidebar = createComponent(($$result, $$props, $$slots) => {
  const title = "Main Sidebar Component | AdminLTE 4";
  const path = "../../../../dist";
  const mainPage = "components";
  const page = "main-sidebar";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Main Sidebar Component</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Docs</a></li> <li class="breadcrumb-item active" aria-current="page">
Main Sidebar Component
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> ${renderComponent($$result, "MainSidebar", Content, {})} </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/components/main-sidebar.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/components/main-sidebar.astro";
const $$url = "/docs/components/main-sidebar.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MainSidebar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
