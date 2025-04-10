import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_SkqlK2Go.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_hTcESfT_.mjs';
import { g as getProjectsWithVersions } from '../../chunks/db.server_DJboH3cr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const url = new URL(Astro2.request.url);
  const version = url.searchParams.get("version") || "latest";
  const { id } = Astro2.params;
  const projects = await getProjectsWithVersions();
  const project = projects.find((p) => p.projectname === id);
  if (!project) {
    return new Response("Not Found", { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "activePages": [project.projectname] }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-fluid py-4"> <h1>${project.projectname} - Version: ${version}</h1> </div> ` })}`;
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
