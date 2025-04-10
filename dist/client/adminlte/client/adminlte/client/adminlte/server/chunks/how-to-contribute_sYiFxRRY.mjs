import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_SkqlK2Go.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "contributing-to-adminlte",
    "text": "Contributing to AdminLTE"
  }, {
    "depth": 2,
    "slug": "online-one-click-setup-for-contributing",
    "text": "Online one-click setup for contributing"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    meta: "meta",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.h1, {
      id: "contributing-to-adminlte",
      children: "Contributing to AdminLTE"
    }), "\n", createVNode(_components.p, {
      children: ["Contributions are always ", createVNode(_components.strong, {
        children: "welcome and recommended"
      }), "! Here is how for beginner’s: ", createVNode(_components.a, {
        href: "https://youtu.be/GbqSvJs-6W4",
        children: "Get started with open source click here"
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Contribution Requirements :"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "When you contribute, you agree to give a non-exclusive license to AdminLTE.io to use that contribution in any context as we (AdminLTE.io) see appropriate."
          }), "\n", createVNode(_components.li, {
            children: ["If you use content provided by another party, it must be appropriately licensed using an ", createVNode(_components.a, {
              href: "https://opensource.org/licenses",
              children: "open source"
            }), " license."]
          }), "\n", createVNode(_components.li, {
            children: "Contributions are only accepted through GitHub pull requests."
          }), "\n", createVNode(_components.li, {
            children: "Finally, contributed code must work in all supported browsers (see above for browser support)."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Installation :"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Fork the repository (", createVNode(_components.a, {
              href: "https://help.github.com/articles/fork-a-repo/",
              children: "here is the guide"
            }), ")."]
          }), "\n", createVNode(_components.li, {
            children: "Clone to your machine"
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          children: createVNode(_components.code, {
            class: "language-bash",
            children: "git clone https://github.com/YOUR_USERNAME/AdminLTE.git\n"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Create a new branch from ", createVNode(_components.code, {
              children: "master"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Compile dist files (Development) :"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "To compile the dist files you need Node.js 18 or higher/npm (node package manager)"
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "npm install"
            }), " (install npm deps)"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "npm run dev"
            }), " (developer mode, autocompile with browsersync support for live demo)"]
          }), "\n", createVNode(_components.li, {
            children: ["Make your changes only in ", createVNode(_components.code, {
              children: "./src"
            }), " Folder OR ", createVNode(_components.code, {
              children: "package.json"
            }), " in any files which are necessary for contribution"]
          }), "\n", createVNode(_components.li, {
            children: ["Do not make changes in ", createVNode(_components.code, {
              children: "./dist/**"
            }), " Because it contains compiled files and do not include in PR (Pull Request)"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "npm run production"
            }), " (compile css/js files and test all pages are perfectly working fine, before creating a pull request)"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Create a pull request to ", createVNode(_components.code, {
            children: "master"
          }), " branch"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "online-one-click-setup-for-contributing",
      children: "Online one-click setup for contributing"
    }), "\n", createVNode(_components.p, {
      children: ["You can use ", createVNode(_components.a, {
        href: "https://docs.github.com/en/codespaces",
        children: "Codespace"
      }), " an online IDE which is free for Open Source for working on issues or making PRs (Pull Requests). With a single click it will launch a workspace and automatically:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["clone the ", createVNode(_components.code, {
          children: "AdminLTE"
        }), " repo."]
      }), "\n", createVNode(_components.li, {
        children: ["Open with ", createVNode(_components.a, {
          href: "https://docs.github.com/en/codespaces",
          children: "Codespace"
        }), " or ", createVNode(_components.a, {
          href: "https://gitpod.io/from-referrer/",
          children: createVNode(_components.img, {
            src: "https://gitpod.io/button/open-in-gitpod.svg",
            alt: "Open in Gitpod"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: "install the dependencies."
      }), "\n", createVNode(_components.li, {
        children: ["run ", createVNode(_components.code, {
          children: "npm run dev"
        }), " to start the server."]
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

const url = "/components/docs/how-to-contribute";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/how-to-contribute.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/how-to-contribute.mdx";
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
