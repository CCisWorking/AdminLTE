import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_BcTFPzss.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-start",
    "text": "Quick start"
  }, {
    "depth": 3,
    "slug": "download--changelog",
    "text": "Download & Changelog:"
  }, {
    "depth": 2,
    "slug": "stable-release",
    "text": "Stable release"
  }, {
    "depth": 3,
    "slug": "grab-from-jsdelivr-cdn",
    "text": "Grab from jsdelivr CDN:"
  }, {
    "depth": 3,
    "slug": "using-the-command-line",
    "text": "Using The Command Line:"
  }, {
    "depth": 4,
    "slug": "via-npm",
    "text": "Via npm"
  }, {
    "depth": 4,
    "slug": "via-yarn",
    "text": "Via Yarn"
  }, {
    "depth": 4,
    "slug": "via-composer",
    "text": "Via Composer"
  }, {
    "depth": 4,
    "slug": "via-git",
    "text": "Via Git"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    meta: "meta",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.h2, {
      id: "quick-start",
      children: "Quick start"
    }), "\n", createVNode(_components.p, {
      children: "There are multiple ways to install AdminLTE."
    }), "\n", createVNode(_components.h3, {
      id: "download--changelog",
      children: "Download & Changelog:"
    }), "\n", createVNode(_components.p, {
      children: ["Always Recommended to download from GitHub latest release ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/latest",
        children: "AdminLTE 4"
      }), " for bug free and latest features.", createVNode(_components.br, {}), "\nVisit the ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases",
        children: "releases"
      }), " page to view the changelog.", createVNode(_components.br, {}), "\nLegacy Releases are ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.2.0",
        children: "AdminLTE 3"
      }), " / ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/tag/v2.4.18",
        children: "AdminLTE 2"
      }), " / ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/tag/1.3.1",
        children: "AdminLTE 1"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "stable-release",
      children: "Stable release"
    }), "\n", createVNode(_components.h3, {
      id: "grab-from-jsdelivr-cdn",
      children: ["Grab from ", createVNode(_components.a, {
        href: "https://www.jsdelivr.com/package/npm/admin-lte",
        children: "jsdelivr"
      }), " CDN:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: [createVNode(_components.strong, {
          children: "Important Note"
        }), ": You needed to add separately cdn links for plugins in your project."]
      })
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-html",
        children: "<script\n  src=\"https://cdn.jsdelivr.net/npm/admin-lte@4.0.0-beta3/dist/js/adminlte.min.js\"\n  crossorigin=\"anonymous\"\n></script>\n"
      })
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-html",
        children: "<link\n  rel=\"stylesheet\"\n  href=\"https://cdn.jsdelivr.net/npm/admin-lte@4.0.0-beta3/dist/css/adminlte.min.css\"\n  crossorigin=\"anonymous\"\n/>\n"
      })
    }), "\n", createVNode(_components.h3, {
      id: "using-the-command-line",
      children: "Using The Command Line:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: [createVNode(_components.strong, {
          children: "Important Note"
        }), ": To install it via npm/Yarn, you need at least Node.js 14 or higher."]
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-npm",
      children: "Via npm"
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-bash",
        children: "npm install admin-lte@4.0.0-beta3 --save\n"
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-yarn",
      children: "Via Yarn"
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-bash",
        children: "yarn add admin-lte@4.0.0-beta3\n"
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-composer",
      children: "Via Composer"
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-bash",
        children: "composer require \"almasaeed2010/adminlte=4.0.0-beta3\"\n"
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-git",
      children: "Via Git"
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-bash",
        children: "git clone https://github.com/ColorlibHQ/AdminLTE.git\n"
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

const url = "/components/docs/introduction";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/introduction.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/introduction.mdx";
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
