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
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
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
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/html/components/docs/how-to-contribute.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$HowToContribute = createComponent(($$result, $$props, $$slots) => {
  const title = "How To Contribute | AdminLTE 4";
  const path = "../../../dist";
  const mainPage = "docs";
  const page = "how-to-contribute";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">How To Contribute</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Docs</a></li> <li class="breadcrumb-item active" aria-current="page">
How To Contribute
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> ${renderComponent($$result, "HowToContribute", Content, {})} </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/how-to-contribute.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/html/pages/docs/how-to-contribute.astro";
const $$url = "/docs/how-to-contribute.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$HowToContribute,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
