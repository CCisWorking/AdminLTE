import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_BcTFPzss.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "can-adminlte-be-used-with-wordpress",
    "text": "Can AdminLTE be used with WordPress?"
  }, {
    "depth": 4,
    "slug": "is-there-an-integration-guide-for-php-frameworks-such-as-yii-or-symfony",
    "text": "Is there an integration guide for PHP frameworks such as Yii or Symfony?"
  }, {
    "depth": 4,
    "slug": "how-do-i-get-notified-of-new-adminlte-versions",
    "text": "How do I get notified of new AdminLTE versions?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h4: "h4",
    meta: "meta",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.h4, {
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

const url = "/components/docs/faq";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/faq.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/faq.mdx";
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
