import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_BcTFPzss.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    meta: "meta",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.p, {
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

const url = "/components/docs/license";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/license.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/license.mdx";
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
