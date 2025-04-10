import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_ClJiVcmy.mjs';
import 'kleur/colors';
import 'clsx';
import Database from 'better-sqlite3';

// utils/getProjects.js
const db = new Database('./data.db');

function getProjects() {
  return db.prepare('SELECT id, dimension FROM projects').all();
}

const $$Astro = createAstro();
const $$Sidenav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidenav;
  const projects = getProjects();
  const { mainPage, page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark"> <div class="sidebar-brand"> <a href="/" class="brand-link"> <img src="/adminlte/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image opacity-75 shadow"> <span class="brand-text fw-light">Vitness</span> </a> </div> <div class="sidebar-wrapper"> <nav class="mt-2"> <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false"> <!-- Dashboard 菜单 --> <li${addAttribute(["nav-item", mainPage === "dashboard" && "menu-open"], "class:list")}> <a href="#"${addAttribute(["nav-link", mainPage === "dashboard" && "active"], "class:list")}> <i class="nav-icon bi bi-speedometer"></i> <p>
Dashboard
<i class="nav-arrow bi bi-chevron-right"></i> </p> </a> <ul class="nav nav-treeview"> <li class="nav-item"> <a href="/"${addAttribute(["nav-link", page === "index" && "active"], "class:list")}> <i class="nav-icon bi bi-circle"></i> <p>Dashboard Home</p> </a> </li> </ul> </li> <!-- 动态 Projects 子菜单 --> <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-folder"></i> <p>
Projects
<i class="nav-arrow bi bi-chevron-right"></i> </p> </a> <ul class="nav nav-treeview"> ${projects.map((project) => renderTemplate`<li class="nav-item"> <a${addAttribute("/projects/" + project.id, "href")} class="nav-link"> <p>${project.id}: ${project.dimension}</p> </a> </li>`)} </ul> </li> </ul> </nav> </div> </aside>`;
}, "/home/ec2-user/vit/AdminLTE/src/html/components/dashboard/_sidenav.astro", undefined);

export { $$Sidenav as $ };
