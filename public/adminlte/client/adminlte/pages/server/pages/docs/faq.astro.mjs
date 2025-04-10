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
    h4: "h4",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h4, {
      id: "can-adminlte-be-used-with-wordpress",
      children: "Can AdminLTE be used with WordPress?"
    }), "\n", createVNode(_components.p, {
      children: "AdminLTE is an HTML template that can be used for any purpose. However, it is not made to be easily installed on WordPress. It will require some effort and enough knowledge of the WordPress script to do so."
    }), "\n", createVNode(_components.h4, {
      id: "is-there-an-integration-guide-for-php-frameworks-such-as-yii-or-symfony",
      children: "Is there an integration guide for PHP frameworks such as Yii or Symfony?"
    }), "\n", createVNode(_components.p, {
      children: "Short answer, no. However, there are forks and tutorials around the web that provide info on how to integrate with many different frameworks. There are even versions of AdminLTE that are integrated with jQuery ajax, AngularJS and/or MVC5 ASP .NET."
    }), "\n", createVNode(_components.h4, {
      id: "how-do-i-get-notified-of-new-adminlte-versions",
      children: "How do I get notified of new AdminLTE versions?"
    }), "\n", createVNode(_components.p, {
      children: ["You may watch the ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE",
        children: "releases on GitHub"
      }), "."]
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
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/html/components/docs/faq.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const title = "FAQ | AdminLTE 4";
  const path = "../../../dist";
  const mainPage = "docs";
  const page = "faq";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">FAQ</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Docs</a></li> <li class="breadcrumb-item active" aria-current="page">
FAQ
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> ${renderComponent($$result, "Faq", Content, {})} </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/faq.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/faq.astro";
const $$url = "/docs/faq.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
