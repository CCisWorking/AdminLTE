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
    h5: "h5",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The Treeview plugin converts a nested list into a tree view where sub menus can be expanded."
    }), "\n", createVNode(_components.h5, {
      id: "usage",
      children: "Usage"
    }), "\n", createVNode(_components.p, {
      children: "This plugin can be used as the data api."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Data API"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Add ", createVNode(_components.code, {
        children: "data-lte-toggle=\"treeview\""
      }), " to any ul or ol element to activate the plugin."]
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-html",
        children: "<ul data-lte-toggle=\"treeview\">\n  <li><a href=\"#\">One Level</a></li>\n  <li class=\"nav-item menu-open\">\n    <a class=\"nav-link\" href=\"#\">Multilevel</a>\n    <ul class=\"nav-treeview\">\n      <li><a href=\"#\">Level 2</a></li>\n    </ul>\n  </li>\n</ul>\n"
      })
    }), "\n", createVNode(_components.h5, {
      id: "example",
      children: "Example"
    }), "\n", createVNode("ul", {
      "data-lte-toggle": "treeview",
      children: [createVNode("li", {
        children: createVNode("a", {
          href: "#",
          children: "One Level"
        })
      }), createVNode("li", {
        class: "nav-item menu-open",
        children: [createVNode("a", {
          class: "nav-link",
          href: "#",
          children: createVNode(_components.p, {
            children: "Multilevel"
          })
        }), createVNode("ul", {
          class: "nav-treeview",
          children: createVNode("li", {
            children: createVNode("a", {
              href: "#",
              children: "Level 2"
            })
          })
        })]
      })]
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
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/html/components/javascript/treeview.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Treeview = createComponent(($$result, $$props, $$slots) => {
  const title = "Treeview Plugin | AdminLTE 4";
  const path = "../../../../dist";
  const mainPage = "javascript";
  const page = "treeview";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Treeview Plugin</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Docs</a></li> <li class="breadcrumb-item active" aria-current="page">
Treeview Plugin
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> ${renderComponent($$result, "Treeview", Content, {})} </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/javascript/treeview.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/javascript/treeview.astro";
const $$url = "/docs/javascript/treeview.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Treeview,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
