import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, g as addAttribute } from '../../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { a as $$Head, $ as $$Scripts } from '../../../chunks/_scripts_CdAMe_9E.mjs';
import { a as $$Topbar, $ as $$Footer } from '../../../chunks/_topbar_b9tgrSJ9.mjs';
import { $ as $$Sidenav } from '../../../chunks/_sidenav_B_NiA9ny.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const title = "AdminLTE 4 | Timeline Elements";
  const path = "../../../dist";
  const mainPage = "ui-elements";
  const page = "timeline";
  return renderTemplate`<html lang="en"> <!--begin::Head--> <head>${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}${renderHead()}</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })} ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })} <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Timeline</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item active" aria-current="page">
Timeline
</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> <!-- Timelime example  --> <div class="row"> <div class="col-md-12"> <!-- The time line --> <div class="timeline"> <!-- timeline time label --> <div class="time-label"> <span class="text-bg-danger">10 Feb. 2023</span> </div> <!-- /.timeline-label --> <!-- timeline item --> <div> <i class="timeline-icon bi bi-envelope text-bg-primary"></i> <div class="timeline-item"> <span class="time"> <i class="bi bi-clock-fill"></i> 12:05
</span> <h3 class="timeline-header"> <a href="#">Support Team</a> sent you an email
</h3> <div class="timeline-body">
Etsy doostang zoodles disqus groupon greplin oooj voxy
                        zoodles, weebly ning heekya handango imeem plugg dopplr
                        jibjab, movity jajah plickers sifteo edmodo ifttt
                        zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu
                        weebly balihoo...
</div> <div class="timeline-footer"> <a class="btn btn-primary btn-sm">Read more</a> <a class="btn btn-danger btn-sm">Delete</a> </div> </div> </div> <!-- END timeline item --> <!-- timeline item --> <div> <i class="timeline-icon bi bi-person text-bg-success"></i> <div class="timeline-item"> <span class="time"> <i class="bi bi-clock-fill"></i> 5 mins ago
</span> <h3 class="timeline-header no-border"> <a href="#">Sarah Young</a> accepted your friend request
</h3> </div> </div> <!-- END timeline item --> <!-- timeline item --> <div> <i class="timeline-icon bi bi-chat-text-fill text-bg-warning"></i> <div class="timeline-item"> <span class="time"> <i class="bi bi-clock-fill"></i> 27 mins ago
</span> <h3 class="timeline-header"> <a href="#">Jay White</a> commented on your post
</h3> <div class="timeline-body">
Take me to your leader! Switzerland is small and
                        neutral! We are more like Germany, ambitious and
                        misunderstood!
</div> <div class="timeline-footer"> <a class="btn btn-warning btn-sm">View comment</a> </div> </div> </div> <!-- END timeline item --> <!-- timeline time label --> <div class="time-label"> <span class="text-bg-success">3 Jan. 2023</span> </div> <!-- /.timeline-label --> <!-- timeline item --> <div> <i class="timeline-icon bi bi-camera text-bg-primary"></i> <div class="timeline-item"> <span class="time"> <i class="bi bi-clock-fill"></i> 2 days ago
</span> <h3 class="timeline-header"> <a href="#">Mina Lee</a> uploaded new photos
</h3> <div class="timeline-body"> <img${addAttribute(path + "/assets/img/user1-128x128.jpg", "src")} alt="..."> <img${addAttribute(path + "/assets/img/user1-128x128.jpg", "src")} alt="..."> <img${addAttribute(path + "/assets/img/user1-128x128.jpg", "src")} alt="..."> <img${addAttribute(path + "/assets/img/user1-128x128.jpg", "src")} alt="..."> </div> </div> </div> <!-- END timeline item --> <!-- timeline item --> <div> <i class="timeline-icon bi bi-camera-film text-bg-info"></i> <div class="timeline-item"> <span class="time"> <i class="bi bi-clock-fill"></i> 5 days ago
</span> <h3 class="timeline-header"> <a href="#">Mr. Doe</a> shared a video
</h3> <div class="timeline-body"> <div class="ratio ratio-16x9"> <iframe src="https://www.youtube.com/embed/tMWkeBIohBs" allowfullscreen></iframe> </div> </div> <div class="timeline-footer"> <a href="#" class="btn btn-sm text-bg-warning">
See comments
</a> </div> </div> </div> <!-- END timeline item --> <div> <i class="timeline-icon bi bi-clock-fill text-bg-secondary"></i> </div> </div> </div> <!-- /.col --> </div> <!-- /.row --> </div> <!--end::Container--> </div> <!--end::App Content--> </main> <!--end::App Main--> ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!--end::App Wrapper--> <!--begin::Script--> ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })} <!--end::Script--> </body><!--end::Body--></html>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/pages/UI/timeline.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/pages/UI/timeline.astro";
const $$url = "/pages/UI/timeline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Timeline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
