import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_SkqlK2Go.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 5,
    "slug": "excerpt-from-bootstraps-official-documentation",
    "text": "Excerpt from Bootstrap’s official Documentation!"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
      children: "AdminLTE comes with the same browser support as Bootstrap 5."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.h5, {
        id: "excerpt-from-bootstraps-official-documentation",
        children: "Excerpt from Bootstrap’s official Documentation!"
      }), "\n", createVNode(_components.p, {
        children: ["Bootstrap supports the ", createVNode(_components.strong, {
          children: "latest, stable releases"
        }), " of all major browsers and platforms."]
      }), "\n", createVNode(_components.p, {
        children: ["For more details ", createVNode(_components.a, {
          href: "https://getbootstrap.com/docs/5.0/getting-started/browsers-devices/#supported-browsers",
          children: "look here"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can find our supported range of browsers and their versions in ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/blob/master/.browserslistrc",
        children: "our .browserslistrc file"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        children: "# https://github.com/browserslist/browserslist#readme\n\n>= 0.5%\nlast 2 major versions\nnot dead\nChrome >= 60\nFirefox >= 60\nFirefox ESR\niOS >= 12\nSafari >= 12\nnot Explorer <= 11\n"
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

const url = "/components/docs/browser-support";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/browser-support.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/browser-support.mdx";
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
