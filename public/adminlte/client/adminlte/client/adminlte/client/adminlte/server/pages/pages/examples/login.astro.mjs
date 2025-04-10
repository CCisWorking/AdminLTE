import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, g as addAttribute } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { a as $$Head, $ as $$Scripts } from '../../../chunks/_scripts_CdAMe_9E.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Login Page";
  const path = "../../../dist";
  const htmlPath = "..";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="login-page bg-body-secondary"> <div class="login-box"> <div class="login-logo"> <a${addAttribute(htmlPath + "/index2.html", "href")}><b>Admin</b>LTE</a> </div> <!-- /.login-logo --> <div class="card"> <div class="card-body login-card-body"> <p class="login-box-msg">Sign in to start your session</p> <form${addAttribute(htmlPath + "/index3.html", "action")} method="post"> <div class="input-group mb-3"> <input type="email" class="form-control" placeholder="Email"> <div class="input-group-text"> <span class="bi bi-envelope"></span> </div> </div> <div class="input-group mb-3"> <input type="password" class="form-control" placeholder="Password"> <div class="input-group-text"> <span class="bi bi-lock-fill"></span> </div> </div> <!--begin::Row--> <div class="row"> <div class="col-8"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> <label class="form-check-label" for="flexCheckDefault">
Remember Me
</label> </div> </div> <!-- /.col --> <div class="col-4"> <div class="d-grid gap-2"> <button type="submit" class="btn btn-primary">Sign In</button> </div> </div> <!-- /.col --> </div> <!--end::Row--> </form> <div class="social-auth-links text-center mb-3 d-grid gap-2"> <p>- OR -</p> <a href="#" class="btn btn-primary"> <i class="bi bi-facebook me-2"></i> Sign in using Facebook
</a> <a href="#" class="btn btn-danger"> <i class="bi bi-google me-2"></i> Sign in using Google+
</a> </div> <!-- /.social-auth-links --> <p class="mb-1"> <a href="forgot-password.html">I forgot my password</a> </p> <p class="mb-0"> <a href="register.html" class="text-center">
Register a new membership
</a> </p> </div> <!-- /.login-card-body --> </div> </div> <!-- /.login-box --> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/login.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/login.astro";
const $$url = "/pages/examples/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
