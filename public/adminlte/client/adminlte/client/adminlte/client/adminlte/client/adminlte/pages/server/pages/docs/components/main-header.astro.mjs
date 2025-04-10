import { _ as __astro_tag_component__, i as Fragment, j as createVNode, e as createComponent, r as renderTemplate, k as renderComponent, l as renderHead, g as addAttribute } from '../../../chunks/astro/server_ClJiVcmy.mjs';
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
    pre: "pre",
    ...props.components
  };
  return createVNode(_components.pre, {
    children: createVNode(_components.code, {
      class: "language-html",
      children: "<!-- Navbar -->\n<nav class=\"app-header navbar navbar-expand bg-body\">\n  <!--begin::Container-->\n  <div class=\"container-fluid\">\n    <!-- Start navbar links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-lte-toggle=\"sidebar\" href=\"#\" role=\"button\">\n          <i class=\"bi bi-list\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item d-none d-md-block\">\n        <a href=\"#\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item d-none d-md-block\">\n        <a href=\"#\" class=\"nav-link\">Contact</a>\n      </li>\n    </ul>\n    <!-- End navbar links -->\n\n    <ul class=\"navbar-nav ms-auto\">\n      <!-- Navbar Search -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"navbar-search\" href=\"#\" role=\"button\">\n          <i class=\"bi bi-search\"></i>\n        </a>\n      </li>\n\n      <!-- Messages Dropdown Menu -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" data-bs-toggle=\"dropdown\" href=\"#\">\n          <i class=\"bi bi-chat-text\"></i>\n          <span class=\"navbar-badge badge text-bg-danger\">3</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-end\">\n          <a href=\"#\" class=\"dropdown-item\">\n            <!-- Message Start -->\n            <div class=\"d-flex\">\n              <div class=\"flex-shrink-0\">\n                <img\n                  src=\"../../../dist/assets/img/user1-128x128.jpg\"\n                  alt=\"User Avatar\"\n                  class=\"img-size-50 rounded-circle me-3\"\n                />\n              </div>\n              <div class=\"flex-grow-1\">\n                <h3 class=\"dropdown-item-title\">\n                  Brad Diesel\n                  <span class=\"float-end fs-7 text-danger\">\n                    <i class=\"bi bi-star-fill\"></i>\n                  </span>\n                </h3>\n                <p class=\"fs-7\">Call me whenever you can...</p>\n                <p class=\"fs-7 text-secondary\">\n                  <i class=\"bi bi-clock-fill me-1\"></i> 4 Hours Ago\n                </p>\n              </div>\n            </div>\n            <!-- Message End -->\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <!-- Message Start -->\n            <div class=\"d-flex\">\n              <div class=\"flex-shrink-0\">\n                <img\n                  src=\"../../../dist/assets/img/user8-128x128.jpg\"\n                  alt=\"User Avatar\"\n                  class=\"img-size-50 rounded-circle me-3\"\n                />\n              </div>\n              <div class=\"flex-grow-1\">\n                <h3 class=\"dropdown-item-title\">\n                  John Pierce\n                  <span class=\"float-end fs-7 text-secondary\">\n                    <i class=\"bi bi-star-fill\"></i>\n                  </span>\n                </h3>\n                <p class=\"fs-7\">I got your message bro</p>\n                <p class=\"fs-7 text-secondary\">\n                  <i class=\"bi bi-clock-fill me-1\"></i> 4 Hours Ago\n                </p>\n              </div>\n            </div>\n            <!-- Message End -->\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <!-- Message Start -->\n            <div class=\"d-flex\">\n              <div class=\"flex-shrink-0\">\n                <img\n                  src=\"../../../dist/assets/img/user3-128x128.jpg\"\n                  alt=\"User Avatar\"\n                  class=\"img-size-50 rounded-circle me-3\"\n                />\n              </div>\n              <div class=\"flex-grow-1\">\n                <h3 class=\"dropdown-item-title\">\n                  Nora Silvester\n                  <span class=\"float-end fs-7 text-warning\">\n                    <i class=\"bi bi-star-fill\"></i>\n                  </span>\n                </h3>\n                <p class=\"fs-7\">The subject goes here</p>\n                <p class=\"fs-7 text-secondary\">\n                  <i class=\"bi bi-clock-fill me-1\"></i> 4 Hours Ago\n                </p>\n              </div>\n            </div>\n            <!-- Message End -->\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item dropdown-footer\">See All Messages</a>\n        </div>\n      </li>\n      <!-- Notifications Dropdown Menu -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" data-bs-toggle=\"dropdown\" href=\"#\">\n          <i class=\"bi bi-bell-fill\"></i>\n          <span class=\"navbar-badge badge text-bg-warning\">15</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-end\">\n          <span class=\"dropdown-item dropdown-header\">15 Notifications</span>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <i class=\"bi bi-envelope me-2\"></i> 4 new messages\n            <span class=\"float-end text-secondary fs-7\">3 mins</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <i class=\"bi bi-people-fill me-2\"></i> 8 friend requests\n            <span class=\"float-end text-secondary fs-7\">12 hours</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <i class=\"bi bi-file-earmark-fill me-2\"></i> 3 new reports\n            <span class=\"float-end text-secondary fs-7\">2 days</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item dropdown-footer\">\n            See All Notifications\n          </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown user-menu\">\n        <a href=\"#\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\">\n          <img\n            src=\"../../../dist/assets/img/user2-160x160.jpg\"\n            class=\"user-image rounded-circle shadow\"\n            alt=\"User Image\"\n          />\n          <span class=\"d-none d-md-inline\">Alexander Pierce</span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-menu-lg dropdown-menu-end\">\n          <!-- User image -->\n          <li class=\"user-header text-bg-primary\">\n            <img\n              src=\"../../../dist/assets/img/user2-160x160.jpg\"\n              class=\"rounded-circle shadow\"\n              alt=\"User Image\"\n            />\n\n            <p>\n              Alexander Pierce - Web Developer\n              <small>Member since Nov. 2023</small>\n            </p>\n          </li>\n          <!-- Menu Body -->\n          <li class=\"user-body\">\n            <!--begin::Row-->\n            <div class=\"row\">\n              <div class=\"col-4 text-center\">\n                <a href=\"#\">Followers</a>\n              </div>\n              <div class=\"col-4 text-center\">\n                <a href=\"#\">Sales</a>\n              </div>\n              <div class=\"col-4 text-center\">\n                <a href=\"#\">Friends</a>\n              </div>\n            </div>\n            <!--end::Row-->\n          </li>\n          <!-- Menu Footer-->\n          <li class=\"user-footer\">\n            <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n            <a href=\"#\" class=\"btn btn-default btn-flat float-end\">Sign out</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <!--end::Container-->\n</nav>\n<!-- /.navbar -->\n"
    })
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
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/html/components/docs/components/main-header.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$MainHeader = createComponent(($$result, $$props, $$slots) => {
  const title = "Main Header Component | AdminLTE 4";
  const path = "../../../../dist";
  const mainPage = "components";
  const page = "main-header";
  const distPath = path;
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Main Header Component</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Docs</a></li> <li class="breadcrumb-item active" aria-current="page">
Main Header Component
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> <div class="callout callout-warning mb-4"> <h5 class="fw-bold">Reminder!</h5> <p>
AdminLTE uses all of Bootstrap 5 components. It's a good start
                to review the <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" class="callout-link">
Bootstrap documentation
</a> to get an idea of the
                various components that this documentation <b>does not</b> cover.
</p> </div> <div class="callout callout-info mb-4"> <h5 class="fw-bold">Tips!</h5> <p>
If you go through the example pages and would like to copy a
                component, right-click on the component and choose “inspect
                element” to get to the HTML quicker than scanning the HTML page.
</p> </div> <!-- Navbar --> <nav class="navbar navbar-expand bg-body"> <!--begin::Container--> <div class="container-fluid"> <!-- Start navbar links --> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button"> <i class="bi bi-list"></i> </a> </li> <li class="nav-item d-none d-md-block"> <a href="#" class="nav-link">Home</a> </li> <li class="nav-item d-none d-md-block"> <a href="#" class="nav-link">Contact</a> </li> </ul> <!-- End navbar links --> <ul class="navbar-nav ms-auto"> <!-- Navbar Search --> <li class="nav-item"> <a class="nav-link" data-widget="navbar-search" href="#" role="button"> <i class="bi bi-search"></i> </a> </li> <!-- Messages Dropdown Menu --> <li class="nav-item dropdown"> <a class="nav-link" data-bs-toggle="dropdown" href="#"> <i class="bi bi-chat-text"></i> <span class="navbar-badge badge text-bg-danger">3</span> </a> <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <a href="#" class="dropdown-item"> <!-- Message Start --> <div class="d-flex"> <div class="flex-shrink-0"> <img${addAttribute(distPath + "/assets/img/user1-128x128.jpg", "src")} alt="User Avatar" class="img-size-50 rounded-circle me-3"> </div> <div class="flex-grow-1"> <h3 class="dropdown-item-title">
Brad Diesel
<span class="float-end fs-7 text-danger"> <i class="bi bi-star-fill"></i> </span> </h3> <p class="fs-7">Call me whenever you can...</p> <p class="fs-7 text-secondary"> <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
</p> </div> </div> <!-- Message End --> </a> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <!-- Message Start --> <div class="d-flex"> <div class="flex-shrink-0"> <img${addAttribute(distPath + "/assets/img/user8-128x128.jpg", "src")} alt="User Avatar" class="img-size-50 rounded-circle me-3"> </div> <div class="flex-grow-1"> <h3 class="dropdown-item-title">
John Pierce
<span class="float-end fs-7 text-secondary"> <i class="bi bi-star-fill"></i> </span> </h3> <p class="fs-7">I got your message bro</p> <p class="fs-7 text-secondary"> <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
</p> </div> </div> <!-- Message End --> </a> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <!-- Message Start --> <div class="d-flex"> <div class="flex-shrink-0"> <img${addAttribute(distPath + "/assets/img/user3-128x128.jpg", "src")} alt="User Avatar" class="img-size-50 rounded-circle me-3"> </div> <div class="flex-grow-1"> <h3 class="dropdown-item-title">
Nora Silvester
<span class="float-end fs-7 text-warning"> <i class="bi bi-star-fill"></i> </span> </h3> <p class="fs-7">The subject goes here</p> <p class="fs-7 text-secondary"> <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
</p> </div> </div> <!-- Message End --> </a> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item dropdown-footer">
See All Messages
</a> </div> </li> <!-- Notifications Dropdown Menu --> <li class="nav-item dropdown"> <a class="nav-link" data-bs-toggle="dropdown" href="#"> <i class="bi bi-bell-fill"></i> <span class="navbar-badge badge text-bg-warning">15</span> </a> <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <span class="dropdown-item dropdown-header">15 Notifications</span> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <i class="bi bi-envelope me-2"></i> 4 new messages
<span class="float-end text-secondary fs-7">3 mins</span> </a> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <i class="bi bi-people-fill me-2"></i> 8 friend requests
<span class="float-end text-secondary fs-7">
12 hours
</span> </a> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <i class="bi bi-file-earmark-fill me-2"></i> 3 new reports
<span class="float-end text-secondary fs-7">
2 days
</span> </a> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item dropdown-footer">
See All Notifications
</a> </div> </li> <li class="nav-item dropdown user-menu"> <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <img${addAttribute(distPath + "/assets/img/user2-160x160.jpg", "src")} class="user-image rounded-circle shadow" alt="User Image"> <span class="d-none d-md-inline">Alexander Pierce</span> </a> <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <!-- User image --> <li class="user-header text-bg-primary"> <img${addAttribute(distPath + "/assets/img/user2-160x160.jpg", "src")} class="rounded-circle shadow" alt="User Image"> <p>
Alexander Pierce - Web Developer
<small>Member since Nov. 2023</small> </p> </li> <!-- Menu Body --> <li class="user-body"> <!--begin::Row--> <div class="row"> <div class="col-4 text-center"> <a href="#">Followers</a> </div> <div class="col-4 text-center"> <a href="#">Sales</a> </div> <div class="col-4 text-center"> <a href="#">Friends</a> </div> </div> <!--end::Row--> </li> <!-- Menu Footer--> <li class="user-footer"> <a href="#" class="btn btn-default btn-flat">Profile</a> <a href="#" class="btn btn-default btn-flat float-end">
Sign out
</a> </li> </ul> </li> </ul> </div> <!--end::Container--> </nav> <!-- /.navbar --> ${renderComponent($$result, "MainHeader", Content, {})} </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/components/main-header.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/components/main-header.astro";
const $$url = "/docs/components/main-header.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MainHeader,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
