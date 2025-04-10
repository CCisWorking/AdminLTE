import { _ as __astro_tag_component__, i as Fragment, j as createVNode, e as createComponent, r as renderTemplate, k as renderComponent, l as renderHead } from '../../chunks/astro/server_ClJiVcmy.mjs';
import 'kleur/colors';
import { $ as $$Head, a as $$Scripts } from '../../chunks/_scripts_WFXfkjJj.mjs';
import { $ as $$Topbar, a as $$Footer } from '../../chunks/_topbar_D6t4p7UY.mjs';
import 'clsx';
import { $ as $$Sidenav } from '../../chunks/_sidenav_DiFREQNB.mjs';
export { renderers } from '../../renderers.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["AdminLTE is an open source project that is licensed under the ", createVNode(_components.a, {
        href: "https://opensource.org/licenses/MIT",
        children: "MIT license"
      }), ". This allows you to do pretty much anything you want as long as you include the copyright in “all copies or substantial portions of the Software.” Attribution is not required (though very much appreciated)."]
    }), "\n", createVNode("h5", {
      class: "text-bold text-dark mt-3",
      children: ["What You Are ", createVNode("span", {
        class: "text-success",
        children: "Allowed"
      }), " To Do With AdminLTE"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Use in commercial projects."
      }), "\n", createVNode(_components.li, {
        children: "Use in personal/private projects."
      }), "\n", createVNode(_components.li, {
        children: "Modify and change the work."
      }), "\n", createVNode(_components.li, {
        children: "Distribute the code."
      }), "\n", createVNode(_components.li, {
        children: "Sublicense: incorporate the work into something that has a more restrictive license."
      }), "\n"]
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
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/html/components/docs/license.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$License = createComponent(($$result, $$props, $$slots) => {
  const title = "License | AdminLTE 4";
  const path = "../../../dist";
  const mainPage = "docs";
  const page = "license";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">License</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Docs</a></li> <li class="breadcrumb-item active" aria-current="page">
License
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> ${renderComponent($$result, "License", Content, {})} </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/license.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/license.astro";
const $$url = "/docs/license.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$License,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
