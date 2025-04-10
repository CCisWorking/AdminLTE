import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_FOCHk4Yk.mjs';
import { manifest } from './manifest_CKbcB8P8.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/upload_models.astro.mjs');
const _page2 = () => import('./pages/components/docs/browser-support.astro.mjs');
const _page3 = () => import('./pages/components/docs/color-mode.astro.mjs');
const _page4 = () => import('./pages/components/docs/components/main-header.astro.mjs');
const _page5 = () => import('./pages/components/docs/components/main-sidebar.astro.mjs');
const _page6 = () => import('./pages/components/docs/faq.astro.mjs');
const _page7 = () => import('./pages/components/docs/how-to-contribute.astro.mjs');
const _page8 = () => import('./pages/components/docs/introduction.astro.mjs');
const _page9 = () => import('./pages/components/docs/license.astro.mjs');
const _page10 = () => import('./pages/components/javascript/treeview.astro.mjs');
const _page11 = () => import('./pages/env.d.astro.mjs');
const _page12 = () => import('./pages/index copy.astro.mjs');
const _page13 = () => import('./pages/pages/docs/browser-support.astro.mjs');
const _page14 = () => import('./pages/pages/docs/color-mode.astro.mjs');
const _page15 = () => import('./pages/pages/docs/components/main-header.astro.mjs');
const _page16 = () => import('./pages/pages/docs/components/main-sidebar.astro.mjs');
const _page17 = () => import('./pages/pages/docs/faq.astro.mjs');
const _page18 = () => import('./pages/pages/docs/how-to-contribute.astro.mjs');
const _page19 = () => import('./pages/pages/docs/introduction.astro.mjs');
const _page20 = () => import('./pages/pages/docs/javascript/treeview.astro.mjs');
const _page21 = () => import('./pages/pages/docs/layout.astro.mjs');
const _page22 = () => import('./pages/pages/docs/license.astro.mjs');
const _page23 = () => import('./pages/pages/examples/lockscreen.astro.mjs');
const _page24 = () => import('./pages/pages/examples/login.astro.mjs');
const _page25 = () => import('./pages/pages/examples/login-v2.astro.mjs');
const _page26 = () => import('./pages/pages/examples/register.astro.mjs');
const _page27 = () => import('./pages/pages/examples/register-v2.astro.mjs');
const _page28 = () => import('./pages/pages/forms/general.astro.mjs');
const _page29 = () => import('./pages/pages/generate/theme.astro.mjs');
const _page30 = () => import('./pages/pages/index copy.astro.mjs');
const _page31 = () => import('./pages/pages/index2.astro.mjs');
const _page32 = () => import('./pages/pages/index3.astro.mjs');
const _page33 = () => import('./pages/pages/layout/baselayout.astro.mjs');
const _page34 = () => import('./pages/pages/layout/collapsed-sidebar.astro.mjs');
const _page35 = () => import('./pages/pages/layout/fixed-complete.astro.mjs');
const _page36 = () => import('./pages/pages/layout/fixed-footer.astro.mjs');
const _page37 = () => import('./pages/pages/layout/fixed-header.astro.mjs');
const _page38 = () => import('./pages/pages/layout/fixed-sidebar.astro.mjs');
const _page39 = () => import('./pages/pages/layout/layout-custom-area.astro.mjs');
const _page40 = () => import('./pages/pages/layout/layout-rtl.astro.mjs');
const _page41 = () => import('./pages/pages/layout/logo-switch.astro.mjs');
const _page42 = () => import('./pages/pages/layout/sidebar-mini.astro.mjs');
const _page43 = () => import('./pages/pages/layout/unfixed-sidebar.astro.mjs');
const _page44 = () => import('./pages/pages/tables/simple.astro.mjs');
const _page45 = () => import('./pages/pages/ui/general.astro.mjs');
const _page46 = () => import('./pages/pages/ui/icons.astro.mjs');
const _page47 = () => import('./pages/pages/ui/timeline.astro.mjs');
const _page48 = () => import('./pages/pages/widgets/cards.astro.mjs');
const _page49 = () => import('./pages/pages/widgets/info-box.astro.mjs');
const _page50 = () => import('./pages/pages/widgets/small-box.astro.mjs');
const _page51 = () => import('./pages/pages.astro.mjs');
const _page52 = () => import('./pages/projects/_id_.astro.mjs');
const _page53 = () => import('./pages/test.astro.mjs');
const _page54 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/upload_models.ts", _page1],
    ["src/pages/components/docs/browser-support.mdx", _page2],
    ["src/pages/components/docs/color-mode.mdx", _page3],
    ["src/pages/components/docs/components/main-header.mdx", _page4],
    ["src/pages/components/docs/components/main-sidebar.mdx", _page5],
    ["src/pages/components/docs/faq.mdx", _page6],
    ["src/pages/components/docs/how-to-contribute.mdx", _page7],
    ["src/pages/components/docs/introduction.mdx", _page8],
    ["src/pages/components/docs/license.mdx", _page9],
    ["src/pages/components/javascript/treeview.mdx", _page10],
    ["src/pages/env.d.ts", _page11],
    ["src/pages/index copy.astro", _page12],
    ["src/pages/pages/docs/browser-support.astro", _page13],
    ["src/pages/pages/docs/color-mode.astro", _page14],
    ["src/pages/pages/docs/components/main-header.astro", _page15],
    ["src/pages/pages/docs/components/main-sidebar.astro", _page16],
    ["src/pages/pages/docs/faq.astro", _page17],
    ["src/pages/pages/docs/how-to-contribute.astro", _page18],
    ["src/pages/pages/docs/introduction.astro", _page19],
    ["src/pages/pages/docs/javascript/treeview.astro", _page20],
    ["src/pages/pages/docs/layout.astro", _page21],
    ["src/pages/pages/docs/license.astro", _page22],
    ["src/pages/pages/examples/lockscreen.astro", _page23],
    ["src/pages/pages/examples/login.astro", _page24],
    ["src/pages/pages/examples/login-v2.astro", _page25],
    ["src/pages/pages/examples/register.astro", _page26],
    ["src/pages/pages/examples/register-v2.astro", _page27],
    ["src/pages/pages/forms/general.astro", _page28],
    ["src/pages/pages/generate/theme.astro", _page29],
    ["src/pages/pages/index copy.astro", _page30],
    ["src/pages/pages/index2.astro", _page31],
    ["src/pages/pages/index3.astro", _page32],
    ["src/pages/pages/layout/BaseLayout.astro", _page33],
    ["src/pages/pages/layout/collapsed-sidebar.astro", _page34],
    ["src/pages/pages/layout/fixed-complete.astro", _page35],
    ["src/pages/pages/layout/fixed-footer.astro", _page36],
    ["src/pages/pages/layout/fixed-header.astro", _page37],
    ["src/pages/pages/layout/fixed-sidebar.astro", _page38],
    ["src/pages/pages/layout/layout-custom-area.astro", _page39],
    ["src/pages/pages/layout/layout-rtl.astro", _page40],
    ["src/pages/pages/layout/logo-switch.astro", _page41],
    ["src/pages/pages/layout/sidebar-mini.astro", _page42],
    ["src/pages/pages/layout/unfixed-sidebar.astro", _page43],
    ["src/pages/pages/tables/simple.astro", _page44],
    ["src/pages/pages/UI/general.astro", _page45],
    ["src/pages/pages/UI/icons.astro", _page46],
    ["src/pages/pages/UI/timeline.astro", _page47],
    ["src/pages/pages/widgets/cards.astro", _page48],
    ["src/pages/pages/widgets/info-box.astro", _page49],
    ["src/pages/pages/widgets/small-box.astro", _page50],
    ["src/pages/pages/index.astro", _page51],
    ["src/pages/projects/[id].astro", _page52],
    ["src/pages/test.astro", _page53],
    ["src/pages/index.astro", _page54]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/ec2-user/vit/AdminLTE/dist/client/",
    "server": "file:///home/ec2-user/vit/AdminLTE/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
