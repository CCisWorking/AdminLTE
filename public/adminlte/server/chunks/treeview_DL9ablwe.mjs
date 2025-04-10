import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_SkqlK2Go.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 5,
    "slug": "usage",
    "text": "Usage"
  }, {
    "depth": 5,
    "slug": "example",
    "text": "Example"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h5: "h5",
    meta: "meta",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.p, {
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

const url = "/components/javascript/treeview";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/javascript/treeview.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/javascript/treeview.mdx";
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
