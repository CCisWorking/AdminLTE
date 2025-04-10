import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_SkqlK2Go.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "alternate-logo",
    "text": "Alternate Logo"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    meta: "meta",
    p: "p",
    pre: "pre",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.p, {
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

const url = "/components/docs/components/main-sidebar";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/components/main-sidebar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/components/main-sidebar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { Content as C, _page as _ };
