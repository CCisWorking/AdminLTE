import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getProjectsWithVersions } from './db.server_DJboH3cr.mjs';

const $$Astro = createAstro();
const $$Sidenav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidenav;
  const { path = "", mainPage = "", page = "" } = Astro2.props;
  const projects = await getProjectsWithVersions();
  return renderTemplate`${maybeRenderHead()}<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark"> <div class="sidebar-brand"> <a href="/" class="brand-link"> <img src="/adminlte/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image opacity-75 shadow"> <span class="brand-text fw-light">Vitness</span> </a> </div> <div class="sidebar-wrapper"> <nav class="mt-2"> <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false"> <!-- Dashboard --> <li${addAttribute(["nav-item", mainPage === "dashboard" && "menu-open"], "class:list")}> <a href="#"${addAttribute(["nav-link", mainPage === "dashboard" && "active"], "class:list")}> <i class="nav-icon bi bi-speedometer"></i> <p>Dashboard<i class="nav-arrow bi bi-chevron-right"></i></p> </a> <ul class="nav nav-treeview"> <li class="nav-item"> <a href="/"${addAttribute(["nav-link", page === "index" && "active"], "class:list")}> <i class="nav-icon bi bi-circle"></i> <p>Home</p> </a> </li> </ul> </li> <!-- Dynamic Projects --> ${projects.map((project) => renderTemplate`<li${addAttribute(["nav-item", mainPage === `project-${project.projectname}` && "menu-open"], "class:list")}> <a href="#"${addAttribute(["nav-link", mainPage === `project-${project.projectname}` && "active"], "class:list")}> <i class="nav-icon bi bi-folder"></i> <p> ${project.projectname} <i class="nav-arrow bi bi-chevron-right"></i> </p> </a> <ul class="nav nav-treeview"> ${project.versions.map((versionname) => renderTemplate`<li class="nav-item"> <a${addAttribute(`/projects/${project.projectname}?version=${versionname}`, "href")}${addAttribute(["nav-link", page === `version-${versionname}` && "active"], "class:list")}> <i class="nav-icon bi bi-circle"></i> <p>${versionname}</p> </a> </li>`)} </ul> </li>`)} </ul> </nav> </div> </aside>`;
}, "/home/ec2-user/vit/AdminLTE/src/pages/components/dashboard/_sidenav.astro", undefined);

export { $$Sidenav as $ };
