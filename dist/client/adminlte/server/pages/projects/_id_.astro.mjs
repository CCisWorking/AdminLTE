import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BWrJHys_.mjs';
import { g as getProjectsWithVersions } from '../../chunks/db.server_DJboH3cr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id: projectname } = Astro2.params;
  const url = new URL(Astro2.request.url);
  const versionname = url.searchParams.get("version") || "latest";
  const projects = await getProjectsWithVersions();
  const project = projects.find((p) => p.projectname === projectname);
  if (!project) {
    return new Response("Project not found", { status: 404 });
  }
  const mainPage = `project-${projectname}`;
  const page = `version-${versionname}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "mainPage": mainPage, "page": page }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-fluid py-4"> <h1 class="mb-3">Project: ${project.projectname}</h1> <p><strong>Selected version:</strong> ${versionname}</p> </div> ` })}`;
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
