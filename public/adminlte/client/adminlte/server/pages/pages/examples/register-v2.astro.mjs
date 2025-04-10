import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, g as addAttribute } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$Head } from '../../../chunks/_head_BxfbaKWv.mjs';
import { $ as $$Scripts } from '../../../chunks/_scripts_HQSeCJHe.mjs';
export { renderers } from '../../../renderers.mjs';

const $$RegisterV2 = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Register Page v2";
  const path = "../../../dist";
  const htmlPath = "..";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="register-page bg-body-secondary"> <div class="register-box"> <!-- /.register-logo --> <div class="card card-outline card-primary"> <div class="card-header"> <a${addAttribute(htmlPath + "/index2.html", "href")} class="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover"> <h1 class="mb-0"> <b>Admin</b>LTE
</h1> </a> </div> <div class="card-body register-card-body"> <p class="register-box-msg">Register a new membership</p> <form${addAttribute(htmlPath + "/index3.html", "action")} method="post"> <div class="input-group mb-1"> <div class="form-floating"> <input id="registerFullName" type="text" class="form-control" placeholder=""> <label for="registerFullName">Full Name</label> </div> <div class="input-group-text"> <span class="bi bi-person"></span> </div> </div> <div class="input-group mb-1"> <div class="form-floating"> <input id="registerEmail" type="email" class="form-control" placeholder=""> <label for="registerEmail">Email</label> </div> <div class="input-group-text"> <span class="bi bi-envelope"></span> </div> </div> <div class="input-group mb-1"> <div class="form-floating"> <input id="registerPassword" type="password" class="form-control" placeholder=""> <label for="registerPassword">Password</label> </div> <div class="input-group-text"> <span class="bi bi-lock-fill"></span> </div> </div> <!--begin::Row--> <div class="row"> <div class="col-8 d-inline-flex align-items-center"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> <label class="form-check-label" for="flexCheckDefault">
I agree to the <a href="#">terms</a> </label> </div> </div> <!-- /.col --> <div class="col-4"> <div class="d-grid gap-2"> <button type="submit" class="btn btn-primary">Sign In</button> </div> </div> <!-- /.col --> </div> <!--end::Row--> </form> <div class="social-auth-links text-center mb-3 d-grid gap-2"> <p>- OR -</p> <a href="#" class="btn btn-primary"> <i class="bi bi-facebook me-2"></i> Sign in using Facebook
</a> <a href="#" class="btn btn-danger"> <i class="bi bi-google me-2"></i> Sign in using Google+
</a> </div> <!-- /.social-auth-links --> <p class="mb-0"> <a href="login.html" class="link-primary text-center">
I already have a membership
</a> </p> </div> <!-- /.register-card-body --> </div> </div> <!-- /.register-box --> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/register-v2.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/examples/register-v2.astro";
const $$url = "/pages/examples/register-v2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RegisterV2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
