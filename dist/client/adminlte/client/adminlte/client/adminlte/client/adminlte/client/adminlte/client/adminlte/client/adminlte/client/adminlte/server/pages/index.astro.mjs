import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderHead } from '../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { a as $$Scripts, $ as $$Head } from '../chunks/_scripts_Cju_VIGu.mjs';
import { a as $$Footer, $ as $$Topbar } from '../chunks/_topbar_lfdB47rZ.mjs';
import { $ as $$Sidenav } from '../chunks/_sidenav_CaNsonyP.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Vitness | Dashboard";
  const path = "/adminlte/";
  const mainPage = "dashboard";
  const page = "index";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <!--begin::Head--> <head>', '<!-- apexcharts --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css" integrity="sha256-4MX+61mt9NVvvuPjUWdUdyfZfxSB1/Rf9WtqRHgG5S0=" crossorigin="anonymous"><!-- jsvectormap --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/css/jsvectormap.min.css" integrity="sha256-+uGLJmmTKOqBr+2E6KDYs/NRsHxSkONXFHUL0fy2O/4=" crossorigin="anonymous">', '</head> <!--end::Head--> <!--begin::Body--> <body class="layout-fixed sidebar-expand-lg bg-body-tertiary"> <!--begin::App Wrapper--> <div class="app-wrapper"> ', " ", ' <!--begin::App Main--> <main class="app-main"> <!--begin::App Content Header--> <div class="app-content-header"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <div class="col-sm-6"> <h3 class="mb-0">Dashboard</h3> </div> <div class="col-sm-6"> <ol class="breadcrumb float-sm-end"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item active" aria-current="page">\nDashboard\n</li> </ol> </div> </div> <!--end::Row--> </div> <!--end::Container--> </div> <!--end::App Content Header--> <!--begin::App Content--> <div class="app-content"> <!--begin::Container--> <div class="container-fluid"> <!--begin::Row--> <div class="row"> <!-- Start col --> <div class="col-lg-7 connectedSortable"> <div class="card mb-4"> <div class="card-header"> <h3 class="card-title">Sales Value</h3> </div> <div class="card-body"> <div id="revenue-chart"></div> </div> </div> <!-- /.card --> <!-- Start col --> <div class="col-lg-5 connectedSortable"> <div class="card text-white bg-primary bg-gradient border-primary mb-4"> <div class="card-header border-0"> <h3 class="card-title">Sales Value</h3> <div class="card-tools"> <button type="button" class="btn btn-primary btn-sm" data-lte-toggle="card-collapse"> <i data-lte-icon="expand" class="bi bi-plus-lg"></i> <i data-lte-icon="collapse" class="bi bi-dash-lg"></i> </button> </div> </div> <div class="card-body"> <div id="world-map" style="height: 220px"></div> </div> <div class="card-footer border-0"> <!--begin::Row--> <div class="row"> <div class="col-4 text-center"> <div id="sparkline-1" class="text-dark"></div> <div class="text-white">Visitors</div> </div> <div class="col-4 text-center"> <div id="sparkline-2" class="text-dark"></div> <div class="text-white">Online</div> </div> <div class="col-4 text-center"> <div id="sparkline-3" class="text-dark"></div> <div class="text-white">Sales</div> </div> </div> <!--end::Row--> </div> </div> </div> <!-- /.Start col --> </div> <!-- /.row (main row) --> </div> <!--end::Container--> </div> <!--end::App Content--> </div></main> <!--end::App Main--> ', " </div> <!--end::App Wrapper--> <!--begin::Script--> ", ` <!-- OPTIONAL SCRIPTS --> <!-- sortablejs --> <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js" integrity="sha256-ipiJrswvAR4VAx/th+6zWsdeYmVae0iJuiR+6OqHJHQ=" crossorigin="anonymous"><\/script> <!-- sortablejs --> <script>
      const connectedSortables =
        document.querySelectorAll(".connectedSortable");
      connectedSortables.forEach((connectedSortable) => {
        let sortable = new Sortable(connectedSortable, {
          group: "shared",
          handle: ".card-header",
        });
      });

      const cardHeaders = document.querySelectorAll(
        ".connectedSortable .card-header",
      );
      cardHeaders.forEach((cardHeader) => {
        cardHeader.style.cursor = "move";
      });
    <\/script> <!-- apexcharts --> <script src="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js" integrity="sha256-+vh8GkaU7C9/wbSLIcwq82tQ2wTf44aOHA8HlBMwRI8=" crossorigin="anonymous"><\/script> <!-- ChartJS --> <script>
      // NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
      // IT'S ALL JUST JUNK FOR DEMO
      // ++++++++++++++++++++++++++++++++++++++++++

      const sales_chart_options = {
        series: [
          {
            name: "Digital Goods",
            data: [28, 48, 40, 19, 86, 27, 90],
          },
          {
            name: "Electronics",
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
        chart: {
          height: 300,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        colors: ["#0d6efd", "#20c997"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2023-01-01",
            "2023-02-01",
            "2023-03-01",
            "2023-04-01",
            "2023-05-01",
            "2023-06-01",
            "2023-07-01",
          ],
        },
        tooltip: {
          x: {
            format: "MMMM yyyy",
          },
        },
      };

      const sales_chart = new ApexCharts(
        document.querySelector("#revenue-chart"),
        sales_chart_options,
      );
      sales_chart.render();
    <\/script> <!-- jsvectormap --> <script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/js/jsvectormap.min.js" integrity="sha256-/t1nN2956BT869E6H4V1dnt0X5pAQHPytli+1nTZm2Y=" crossorigin="anonymous"><\/script> <script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/maps/world.js" integrity="sha256-XPpPaZlU8S/HWf7FZLAncLg2SAkP8ScUTII89x9D3lY=" crossorigin="anonymous"><\/script> <!-- jsvectormap --> <script>
      const visitorsData = {
        US: 398, // USA
        SA: 400, // Saudi Arabia
        CA: 1000, // Canada
        DE: 500, // Germany
        FR: 760, // France
        CN: 300, // China
        AU: 700, // Australia
        BR: 600, // Brazil
        IN: 800, // India
        GB: 320, // Great Britain
        RU: 3000, // Russia
      };

      // World map by jsVectorMap
      const map = new jsVectorMap({
        selector: "#world-map",
        map: "world",
      });

      // Sparkline charts
      const option_sparkline1 = {
        series: [
          {
            data: [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021],
          },
        ],
        chart: {
          type: "area",
          height: 50,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#DCE6EC"],
      };

      const sparkline1 = new ApexCharts(
        document.querySelector("#sparkline-1"),
        option_sparkline1,
      );
      sparkline1.render();

      const option_sparkline2 = {
        series: [
          {
            data: [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921],
          },
        ],
        chart: {
          type: "area",
          height: 50,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#DCE6EC"],
      };

      const sparkline2 = new ApexCharts(
        document.querySelector("#sparkline-2"),
        option_sparkline2,
      );
      sparkline2.render();

      const option_sparkline3 = {
        series: [
          {
            data: [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21],
          },
        ],
        chart: {
          type: "area",
          height: 50,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#DCE6EC"],
      };

      const sparkline3 = new ApexCharts(
        document.querySelector("#sparkline-3"),
        option_sparkline3,
      );
      sparkline3.render();
    <\/script> <!--end::Script--> </body><!--end::Body--></html>`])), renderComponent($$result, "Head", $$Head, { "title": title, "path": path }), renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path }), renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page }), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Scripts", $$Scripts, { "path": path }));
}, "/home/ec2-user/vit/AdminLTE/src/pages/index.astro", undefined);

const $$file = "/home/ec2-user/vit/AdminLTE/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
