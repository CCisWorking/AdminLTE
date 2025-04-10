import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, g as addAttribute } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { a as $$Head, $ as $$Scripts } from '../../../chunks/_scripts_CdAMe_9E.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Lockscreen = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Lockscreen";
  const path = "../../../dist";
  const htmlPath = "..";
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="lockscreen bg-body-secondary"> <div class="lockscreen-wrapper"> <div class="lockscreen-logo"> <a${addAttribute(htmlPath + "/index2.html", "href")}><b>Admin</b>LTE</a> </div> <div class="lockscreen-name">John Doe</div> <div class="lockscreen-item"> <div class="lockscreen-image"> <img${addAttribute(path + "/assets/img/user1-128x128.jpg", "src")} alt="User Image"> </div> <form class="lockscreen-credentials"> <div class="input-group"> <input type="password" class="form-control shadow-none" placeholder="password"> <div class="input-group-text border-0 bg-transparent px-1"> <button type="button" class="btn shadow-none"> <i class="bi bi-box-arrow-right text-body-secondary"></i> </button> </div> </div> </form> </div> <div class="help-block text-center">
Enter your password to retrieve your session
</div> <div class="text-center"> <a href="login.html" class="text-decoration-none">Or sign in as a different user</a> </div> <div class="lockscreen-footer text-center">
Copyright © 2014-${year} &nbsp;
<b><a href="https://adminlte.io" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">AdminLTE.io</a></b> <br>
All rights reserved
</div> </div> ${renderComponent($$result, "Scripts", $$Scripts, {})} </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/lockscreen.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/lockscreen.astro";
const $$url = "/pages/examples/lockscreen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Lockscreen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
