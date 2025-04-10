import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from './astro/server_SkqlK2Go.mjs';
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
        children: "<!--begin::Header-->\n<nav class=\"navbar navbar-expand bg-body\">\n  <!--begin::Container-->\n  <div class=\"container-fluid\">\n    <!--begin::Start Navbar links-->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-lte-toggle=\"sidebar\" href=\"#\" role=\"button\"\n          ><i class=\"bi bi-list\"></i\n        ></a>\n      </li>\n      <li class=\"nav-item d-none d-md-block\">\n        <a href=\"#\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item d-none d-md-block\">\n        <a href=\"#\" class=\"nav-link\">Contact</a>\n      </li>\n    </ul>\n    <!--end::Start Navbar links-->\n    <!--begin::End Navbar links-->\n    <ul class=\"navbar-nav ms-auto\">\n      <li class=\"nav-item dropdown\">\n        <button\n          class=\"btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center\"\n          id=\"bd-theme\"\n          type=\"button\"\n          aria-expanded=\"false\"\n          data-bs-toggle=\"dropdown\"\n          data-bs-display=\"static\"\n        >\n          <span class=\"theme-icon-active\">\n            <i class=\"my-1\"></i>\n          </span>\n          <span class=\"d-lg-none ms-2\" id=\"bd-theme-text\">Toggle theme</span>\n        </button>\n        <ul\n          class=\"dropdown-menu dropdown-menu-end\"\n          aria-labelledby=\"bd-theme-text\"\n          style=\"--bs-dropdown-min-width: 8rem;\"\n        >\n          <li>\n            <button\n              type=\"button\"\n              class=\"dropdown-item d-flex align-items-center active\"\n              data-bs-theme-value=\"light\"\n              aria-pressed=\"false\"\n            >\n              <i class=\"bi bi-sun-fill me-2\"></i>\n              Light\n              <i class=\"bi bi-check-lg ms-auto d-none\"></i>\n            </button>\n          </li>\n          <li>\n            <button\n              type=\"button\"\n              class=\"dropdown-item d-flex align-items-center\"\n              data-bs-theme-value=\"dark\"\n              aria-pressed=\"false\"\n            >\n              <i class=\"bi bi-moon-fill me-2\"></i>\n              Dark\n              <i class=\"bi bi-check-lg ms-auto d-none\"></i>\n            </button>\n          </li>\n          <li>\n            <button\n              type=\"button\"\n              class=\"dropdown-item d-flex align-items-center\"\n              data-bs-theme-value=\"auto\"\n              aria-pressed=\"true\"\n            >\n              <i class=\"bi bi-circle-fill-half-stroke me-2\"></i>\n              Auto\n              <i class=\"bi bi-check-lg ms-auto d-none\"></i>\n            </button>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <!--end::End Navbar links-->\n  </div>\n  <!--end::Container-->\n</nav>\n<!--end::Header-->\n"
      })
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        class: "language-js",
        children: "// Color Mode Toggler\n(() => {\n  \"use strict\";\n\n  const storedTheme = localStorage.getItem(\"theme\");\n\n  const getPreferredTheme = () => {\n    if (storedTheme) {\n      return storedTheme;\n    }\n\n    return window.matchMedia(\"(prefers-color-scheme: dark)\").matches\n      ? \"dark\"\n      : \"light\";\n  };\n\n  const setTheme = function (theme) {\n    if (\n      theme === \"auto\" &&\n      window.matchMedia(\"(prefers-color-scheme: dark)\").matches\n    ) {\n      document.documentElement.setAttribute(\"data-bs-theme\", \"dark\");\n    } else {\n      document.documentElement.setAttribute(\"data-bs-theme\", theme);\n    }\n  };\n\n  setTheme(getPreferredTheme());\n\n  const showActiveTheme = (theme, focus = false) => {\n    const themeSwitcher = document.querySelector(\"#bd-theme\");\n\n    if (!themeSwitcher) {\n      return;\n    }\n\n    const themeSwitcherText = document.querySelector(\"#bd-theme-text\");\n    const activeThemeIcon = document.querySelector(\".theme-icon-active i\");\n    const btnToActive = document.querySelector(\n      `[data-bs-theme-value=\"${theme}\"]`\n    );\n    const svgOfActiveBtn = btnToActive.querySelector(\"i\").getAttribute(\"class\");\n\n    for (const element of document.querySelectorAll(\"[data-bs-theme-value]\")) {\n      element.classList.remove(\"active\");\n      element.setAttribute(\"aria-pressed\", \"false\");\n    }\n\n    btnToActive.classList.add(\"active\");\n    btnToActive.setAttribute(\"aria-pressed\", \"true\");\n    activeThemeIcon.setAttribute(\"class\", svgOfActiveBtn);\n    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;\n    themeSwitcher.setAttribute(\"aria-label\", themeSwitcherLabel);\n\n    if (focus) {\n      themeSwitcher.focus();\n    }\n  };\n\n  window\n    .matchMedia(\"(prefers-color-scheme: dark)\")\n    .addEventListener(\"change\", () => {\n      if (storedTheme !== \"light\" || storedTheme !== \"dark\") {\n        setTheme(getPreferredTheme());\n      }\n    });\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    showActiveTheme(getPreferredTheme());\n\n    for (const toggle of document.querySelectorAll(\"[data-bs-theme-value]\")) {\n      toggle.addEventListener(\"click\", () => {\n        const theme = toggle.getAttribute(\"data-bs-theme-value\");\n        localStorage.setItem(\"theme\", theme);\n        setTheme(theme);\n        showActiveTheme(theme, true);\n      });\n    }\n  });\n})();\n"
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

const url = "/components/docs/color-mode";
const file = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/color-mode.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ec2-user/vit/AdminLTE/src/pages/components/docs/color-mode.mdx";
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
