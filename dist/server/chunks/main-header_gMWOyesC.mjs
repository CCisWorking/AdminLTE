import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_BcTFPzss.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    meta: "meta",
    pre: "pre",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-html",
        children: "<!-- Navbar -->\n<nav class=\"app-header navbar navbar-expand bg-body\">\n  <!--begin::Container-->\n  <div class=\"container-fluid\">\n    <!-- Start navbar links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-lte-toggle=\"sidebar\" href=\"#\" role=\"button\">\n          <i class=\"bi bi-list\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item d-none d-md-block\">\n        <a href=\"#\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item d-none d-md-block\">\n        <a href=\"#\" class=\"nav-link\">Contact</a>\n      </li>\n    </ul>\n    <!-- End navbar links -->\n\n    <ul class=\"navbar-nav ms-auto\">\n      <!-- Navbar Search -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"navbar-search\" href=\"#\" role=\"button\">\n          <i class=\"bi bi-search\"></i>\n        </a>\n      </li>\n\n      <!-- Messages Dropdown Menu -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" data-bs-toggle=\"dropdown\" href=\"#\">\n          <i class=\"bi bi-chat-text\"></i>\n          <span class=\"navbar-badge badge text-bg-danger\">3</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-end\">\n          <a href=\"#\" class=\"dropdown-item\">\n            <!-- Message Start -->\n            <div class=\"d-flex\">\n              <div class=\"flex-shrink-0\">\n                <img\n                  src=\"../../../dist/assets/img/user1-128x128.jpg\"\n                  alt=\"User Avatar\"\n                  class=\"img-size-50 rounded-circle me-3\"\n                />\n              </div>\n              <div class=\"flex-grow-1\">\n                <h3 class=\"dropdown-item-title\">\n                  Brad Diesel\n                  <span class=\"float-end fs-7 text-danger\">\n                    <i class=\"bi bi-star-fill\"></i>\n                  </span>\n                </h3>\n                <p class=\"fs-7\">Call me whenever you can...</p>\n                <p class=\"fs-7 text-secondary\">\n                  <i class=\"bi bi-clock-fill me-1\"></i> 4 Hours Ago\n                </p>\n              </div>\n            </div>\n            <!-- Message End -->\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <!-- Message Start -->\n            <div class=\"d-flex\">\n              <div class=\"flex-shrink-0\">\n                <img\n                  src=\"../../../dist/assets/img/user8-128x128.jpg\"\n                  alt=\"User Avatar\"\n                  class=\"img-size-50 rounded-circle me-3\"\n                />\n              </div>\n              <div class=\"flex-grow-1\">\n                <h3 class=\"dropdown-item-title\">\n                  John Pierce\n                  <span class=\"float-end fs-7 text-secondary\">\n                    <i class=\"bi bi-star-fill\"></i>\n                  </span>\n                </h3>\n                <p class=\"fs-7\">I got your message bro</p>\n                <p class=\"fs-7 text-secondary\">\n                  <i class=\"bi bi-clock-fill me-1\"></i> 4 Hours Ago\n                </p>\n              </div>\n            </div>\n            <!-- Message End -->\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <!-- Message Start -->\n            <div class=\"d-flex\">\n              <div class=\"flex-shrink-0\">\n                <img\n                  src=\"../../../dist/assets/img/user3-128x128.jpg\"\n                  alt=\"User Avatar\"\n                  class=\"img-size-50 rounded-circle me-3\"\n                />\n              </div>\n              <div class=\"flex-grow-1\">\n                <h3 class=\"dropdown-item-title\">\n                  Nora Silvester\n                  <span class=\"float-end fs-7 text-warning\">\n                    <i class=\"bi bi-star-fill\"></i>\n                  </span>\n                </h3>\n                <p class=\"fs-7\">The subject goes here</p>\n                <p class=\"fs-7 text-secondary\">\n                  <i class=\"bi bi-clock-fill me-1\"></i> 4 Hours Ago\n                </p>\n              </div>\n            </div>\n            <!-- Message End -->\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item dropdown-footer\">See All Messages</a>\n        </div>\n      </li>\n      <!-- Notifications Dropdown Menu -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" data-bs-toggle=\"dropdown\" href=\"#\">\n          <i class=\"bi bi-bell-fill\"></i>\n          <span class=\"navbar-badge badge text-bg-warning\">15</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-end\">\n          <span class=\"dropdown-item dropdown-header\">15 Notifications</span>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <i class=\"bi bi-envelope me-2\"></i> 4 new messages\n            <span class=\"float-end text-secondary fs-7\">3 mins</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <i class=\"bi bi-people-fill me-2\"></i> 8 friend requests\n            <span class=\"float-end text-secondary fs-7\">12 hours</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item\">\n            <i class=\"bi bi-file-earmark-fill me-2\"></i> 3 new reports\n            <span class=\"float-end text-secondary fs-7\">2 days</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#\" class=\"dropdown-item dropdown-footer\">\n            See All Notifications\n          </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown user-menu\">\n        <a href=\"#\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\">\n          <img\n            src=\"../../../dist/assets/img/user2-160x160.jpg\"\n            class=\"user-image rounded-circle shadow\"\n            alt=\"User Image\"\n          />\n          <span class=\"d-none d-md-inline\">Alexander Pierce</span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-menu-lg dropdown-menu-end\">\n          <!-- User image -->\n          <li class=\"user-header text-bg-primary\">\n            <img\n              src=\"../../../dist/assets/img/user2-160x160.jpg\"\n              class=\"rounded-circle shadow\"\n              alt=\"User Image\"\n            />\n\n            <p>\n              Alexander Pierce - Web Developer\n              <small>Member since Nov. 2023</small>\n            </p>\n          </li>\n          <!-- Menu Body -->\n          <li class=\"user-body\">\n            <!--begin::Row-->\n            <div class=\"row\">\n              <div class=\"col-4 text-center\">\n                <a href=\"#\">Followers</a>\n              </div>\n              <div class=\"col-4 text-center\">\n                <a href=\"#\">Sales</a>\n              </div>\n              <div class=\"col-4 text-center\">\n                <a href=\"#\">Friends</a>\n              </div>\n            </div>\n            <!--end::Row-->\n          </li>\n          <!-- Menu Footer-->\n          <li class=\"user-footer\">\n            <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n            <a href=\"#\" class=\"btn btn-default btn-flat float-end\">Sign out</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <!--end::Container-->\n</nav>\n<!-- /.navbar -->\n"
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

const url = "/components/docs/components/main-header";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/components/main-header.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/components/main-header.mdx";
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
