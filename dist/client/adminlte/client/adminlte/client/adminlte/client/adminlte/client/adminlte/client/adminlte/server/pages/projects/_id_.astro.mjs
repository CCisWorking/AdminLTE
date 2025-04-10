import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BIu-ovs5.mjs';
import { a as getProjects } from '../../chunks/db.server_7BPIVy7b.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const url = new URL(Astro2.request.url);
  const version = url.searchParams.get("version");
  const project = getProjects().find((p) => p.projectname === id);
  if (!project) {
    return new Response("Not Found", { status: 404 });
  }
  const title = `Project: ${project.projectname}`;
  const path = "/adminlte/";
  const mainPage = "projects";
  const page = id;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "path": path, "mainPage": mainPage, "page": page }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-fluid py-4"> <h1 class="mb-3">Project: ${project.projectname}</h1> <p><strong>ID:</strong> ${project.id}</p> <p><strong>Version:</strong> ${version}</p> </div> ` })}`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/projects/[id].astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
