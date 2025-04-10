import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_H_lQQ9-r.mjs';
import { manifest } from './manifest_DZ5hinsi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/docs/browser-support.astro.mjs');
const _page2 = () => import('./pages/docs/color-mode.astro.mjs');
const _page3 = () => import('./pages/docs/components/main-header.astro.mjs');
const _page4 = () => import('./pages/docs/components/main-sidebar.astro.mjs');
const _page5 = () => import('./pages/docs/faq.astro.mjs');
const _page6 = () => import('./pages/docs/how-to-contribute.astro.mjs');
const _page7 = () => import('./pages/docs/introduction.astro.mjs');
const _page8 = () => import('./pages/docs/javascript/treeview.astro.mjs');
const _page9 = () => import('./pages/docs/layout.astro.mjs');
const _page10 = () => import('./pages/docs/license.astro.mjs');
const _page11 = () => import('./pages/examples/lockscreen.astro.mjs');
const _page12 = () => import('./pages/examples/login.astro.mjs');
const _page13 = () => import('./pages/examples/login-v2.astro.mjs');
const _page14 = () => import('./pages/examples/register.astro.mjs');
const _page15 = () => import('./pages/examples/register-v2.astro.mjs');
const _page16 = () => import('./pages/forms/general.astro.mjs');
const _page17 = () => import('./pages/generate/theme.astro.mjs');
const _page18 = () => import('./pages/index copy.astro.mjs');
const _page19 = () => import('./pages/index2.astro.mjs');
const _page20 = () => import('./pages/index3.astro.mjs');
const _page21 = () => import('./pages/layout/collapsed-sidebar.astro.mjs');
const _page22 = () => import('./pages/layout/fixed-complete.astro.mjs');
const _page23 = () => import('./pages/layout/fixed-footer.astro.mjs');
const _page24 = () => import('./pages/layout/fixed-header.astro.mjs');
const _page25 = () => import('./pages/layout/fixed-sidebar.astro.mjs');
const _page26 = () => import('./pages/layout/layout-custom-area.astro.mjs');
const _page27 = () => import('./pages/layout/layout-rtl.astro.mjs');
const _page28 = () => import('./pages/layout/logo-switch.astro.mjs');
const _page29 = () => import('./pages/layout/sidebar-mini.astro.mjs');
const _page30 = () => import('./pages/layout/subpage.astro.mjs');
const _page31 = () => import('./pages/layout/unfixed-sidebar.astro.mjs');
const _page32 = () => import('./pages/tables/simple.astro.mjs');
const _page33 = () => import('./pages/ui/general.astro.mjs');
const _page34 = () => import('./pages/ui/icons.astro.mjs');
const _page35 = () => import('./pages/ui/timeline.astro.mjs');
const _page36 = () => import('./pages/widgets/cards.astro.mjs');
const _page37 = () => import('./pages/widgets/info-box.astro.mjs');
const _page38 = () => import('./pages/widgets/small-box.astro.mjs');
const _page39 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/html/pages/docs/browser-support.astro", _page1],
    ["src/html/pages/docs/color-mode.astro", _page2],
    ["src/html/pages/docs/components/main-header.astro", _page3],
    ["src/html/pages/docs/components/main-sidebar.astro", _page4],
    ["src/html/pages/docs/faq.astro", _page5],
    ["src/html/pages/docs/how-to-contribute.astro", _page6],
    ["src/html/pages/docs/introduction.astro", _page7],
    ["src/html/pages/docs/javascript/treeview.astro", _page8],
    ["src/html/pages/docs/layout.astro", _page9],
    ["src/html/pages/docs/license.astro", _page10],
    ["src/html/pages/examples/lockscreen.astro", _page11],
    ["src/html/pages/examples/login.astro", _page12],
    ["src/html/pages/examples/login-v2.astro", _page13],
    ["src/html/pages/examples/register.astro", _page14],
    ["src/html/pages/examples/register-v2.astro", _page15],
    ["src/html/pages/forms/general.astro", _page16],
    ["src/html/pages/generate/theme.astro", _page17],
    ["src/html/pages/index copy.astro", _page18],
    ["src/html/pages/index2.astro", _page19],
    ["src/html/pages/index3.astro", _page20],
    ["src/html/pages/layout/collapsed-sidebar.astro", _page21],
    ["src/html/pages/layout/fixed-complete.astro", _page22],
    ["src/html/pages/layout/fixed-footer.astro", _page23],
    ["src/html/pages/layout/fixed-header.astro", _page24],
    ["src/html/pages/layout/fixed-sidebar.astro", _page25],
    ["src/html/pages/layout/layout-custom-area.astro", _page26],
    ["src/html/pages/layout/layout-rtl.astro", _page27],
    ["src/html/pages/layout/logo-switch.astro", _page28],
    ["src/html/pages/layout/sidebar-mini.astro", _page29],
    ["src/html/pages/layout/subpage.astro", _page30],
    ["src/html/pages/layout/unfixed-sidebar.astro", _page31],
    ["src/html/pages/tables/simple.astro", _page32],
    ["src/html/pages/UI/general.astro", _page33],
    ["src/html/pages/UI/icons.astro", _page34],
    ["src/html/pages/UI/timeline.astro", _page35],
    ["src/html/pages/widgets/cards.astro", _page36],
    ["src/html/pages/widgets/info-box.astro", _page37],
    ["src/html/pages/widgets/small-box.astro", _page38],
    ["src/html/pages/index.astro", _page39]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/ec2-user/vit/AdminLTE/dist/pages/client/",
    "server": "file:///home/ec2-user/vit/AdminLTE/dist/pages/server/",
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
