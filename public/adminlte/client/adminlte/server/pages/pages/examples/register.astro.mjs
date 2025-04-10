import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, g as addAttribute } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$Head } from '../../../chunks/_head_BxfbaKWv.mjs';
import { $ as $$Scripts } from '../../../chunks/_scripts_HQSeCJHe.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Register Page";
  const path = "../../../dist";
  const htmlPath = "..";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="register-page bg-body-secondary"> <div class="register-box"> <div class="register-logo"> <a${addAttribute(htmlPath + "/index2.html", "href")}><b>Admin</b>LTE</a> </div> <!-- /.register-logo --> <div class="card"> <div class="card-body register-card-body"> <p class="register-box-msg">Register a new membership</p> <form${addAttribute(htmlPath + "/index3.html", "action")} method="post"> <div class="input-group mb-3"> <input type="text" class="form-control" placeholder="Full Name"> <div class="input-group-text"> <span class="bi bi-person"></span> </div> </div> <div class="input-group mb-3"> <input type="email" class="form-control" placeholder="Email"> <div class="input-group-text"> <span class="bi bi-envelope"></span> </div> </div> <div class="input-group mb-3"> <input type="password" class="form-control" placeholder="Password"> <div class="input-group-text"> <span class="bi bi-lock-fill"></span> </div> </div> <!--begin::Row--> <div class="row"> <div class="col-8"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> <label class="form-check-label" for="flexCheckDefault">
I agree to the <a href="#">terms</a> </label> </div> </div> <!-- /.col --> <div class="col-4"> <div class="d-grid gap-2"> <button type="submit" class="btn btn-primary">Sign In</button> </div> </div> <!-- /.col --> </div> <!--end::Row--> </form> <div class="social-auth-links text-center mb-3 d-grid gap-2"> <p>- OR -</p> <a href="#" class="btn btn-primary"> <i class="bi bi-facebook me-2"></i> Sign in using Facebook
</a> <a href="#" class="btn btn-danger"> <i class="bi bi-google me-2"></i> Sign in using Google+
</a> </div> <!-- /.social-auth-links --> <p class="mb-0"> <a href="login.html" class="text-center">
I already have a membership
</a> </p> </div> <!-- /.register-card-body --> </div> </div> <!-- /.register-box --> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/register.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/register.astro";
const $$url = "/pages/examples/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
