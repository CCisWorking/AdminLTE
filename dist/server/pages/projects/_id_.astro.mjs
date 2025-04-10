import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BcTFPzss.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CkubbjxB.mjs';
import { a as getModelByProjectAndVersion } from '../../chunks/db.server_DjnXBi8c.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useCallback, useEffect } from 'react';
import ReactFlow, { Handle, Position, useNodesState, useEdgesState, useReactFlow, Controls, MiniMap, Background, ReactFlowProvider } from 'reactflow';
/* empty css                                   */
import dagre from 'dagre';
export { renderers } from '../../renderers.mjs';

function CustomNode({ data }) {
  const isContainer = data.isContainer;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-2 rounded text-xs max-w-[240px] text-center",
      style: {
        backgroundColor: isContainer ? "#e6f2ff" : "#fff",
        border: isContainer ? "2px dashed #66aaff" : "1px solid #ccc",
        boxShadow: isContainer ? "0 0 10px rgba(102,170,255,0.3)" : "0 1px 3px rgba(0,0,0,0.1)",
        padding: "0.5rem"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: data.label }),
        isContainer ? /* @__PURE__ */ jsx("div", { className: "text-[10px] text-blue-600 mt-1", children: "(双击收起)" }) : data.hasChildren ? /* @__PURE__ */ jsx("div", { className: "text-[10px] text-blue-500 mt-1", children: "(点击展开)" }) : null,
        /* @__PURE__ */ jsx(Handle, { type: "target", position: Position.Left }),
        /* @__PURE__ */ jsx(Handle, { type: "source", position: Position.Right })
      ]
    }
  );
}

const nodeWidth = 180;
const nodeHeight = 80;

function getLayoutedElements(nodes, edges, direction = 'LR') {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction }); // 'LR' = left-to-right

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  return {
    nodes: nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      return {
        ...node,
        position: {
          x: nodeWithPosition.x - nodeWidth / 2,
          y: nodeWithPosition.y - nodeHeight / 2,
        },
      };
    }),
    edges,
  };
}

const nodeTypes = { custom: CustomNode };
function ModelFlow({ architecture }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  useReactFlow();
  const buildContainerAndChildren = (parentId, fullData, path) => {
    const containerId = `container-${parentId}`;
    const children = fullData.children || [];
    const newNodes = [];
    const newEdges = [];
    newNodes.push({
      id: containerId,
      type: "custom",
      data: {
        label: `${fullData.name || fullData.type} (展开)`,
        isContainer: true,
        parentId,
        fullData,
        hasChildren: false
      },
      position: { x: 0, y: 0 },
      style: {
        backgroundColor: "#e6f2ff",
        border: "2px dashed #66aaff",
        padding: 10
      }
    });
    let previousId = null;
    children.forEach((child, index) => {
      const childId = `${containerId}/${child.name || child.type || `child${index}`}`;
      newNodes.push({
        id: childId,
        type: "custom",
        data: {
          label: child.name || child.type,
          hasChildren: child.children?.length > 0,
          fullData: child
        },
        position: { x: 0, y: 0 }
      });
      if (previousId) {
        newEdges.push({
          id: `${previousId}-${childId}`,
          source: previousId,
          target: childId
        });
      } else {
        newEdges.push({
          id: `${containerId}-${childId}`,
          source: containerId,
          target: childId
        });
      }
      previousId = childId;
    });
    return { containerNodeId: containerId, newNodes, newEdges };
  };
  const addChildrenAsContainer = useCallback((parentNode) => {
    const parentId = parentNode.id;
    const fullData = parentNode.data.fullData;
    parentId.split("/");
    const { containerNodeId, newNodes, newEdges } = buildContainerAndChildren(parentId, fullData);
    const updatedNodes = nodes.filter((n) => n.id !== parentId).concat(newNodes);
    const updatedEdges = edges.filter((e) => e.source !== parentId && e.target !== parentId).concat(newEdges);
    const layouted = getLayoutedElements(updatedNodes, updatedEdges, "LR");
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  }, [nodes, edges]);
  const collapseContainer = useCallback((containerNode) => {
    const containerId = containerNode.id;
    const parentId = containerNode.data.parentId;
    const fullData = containerNode.data.fullData;
    const idsToRemove = nodes.filter((n) => n.id.startsWith(`${containerId}/`) || n.id === containerId).map((n) => n.id);
    const remainingNodes = nodes.filter((n) => !idsToRemove.includes(n.id));
    const remainingEdges = edges.filter(
      (e) => !idsToRemove.includes(e.id) && !idsToRemove.includes(e.source) && !idsToRemove.includes(e.target)
    );
    const restoredNode = {
      id: parentId,
      type: "custom",
      data: {
        label: fullData.name || fullData.type,
        hasChildren: fullData.children?.length > 0,
        fullData
      },
      position: containerNode.position
    };
    const updatedNodes = [...remainingNodes, restoredNode];
    const layouted = getLayoutedElements(updatedNodes, remainingEdges, "LR");
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  }, [nodes, edges]);
  const onNodeClick = useCallback((_, node) => {
    if (node.data.hasChildren && !node.data.isContainer) {
      addChildrenAsContainer(node);
    }
  }, [addChildrenAsContainer]);
  const onNodeDoubleClick = useCallback((_, node) => {
    if (node.data.isContainer) {
      collapseContainer(node);
    }
  }, [collapseContainer]);
  useEffect(() => {
    const rootId = architecture.name || architecture.type;
    const rootNode = {
      id: rootId,
      type: "custom",
      data: {
        label: architecture.name || architecture.type,
        hasChildren: architecture.children?.length > 0,
        fullData: architecture
      },
      position: { x: 0, y: 0 }
    };
    const { nodes: layoutedNodes } = getLayoutedElements([rootNode], [], "LR");
    setNodes(layoutedNodes);
    setEdges([]);
  }, [architecture]);
  return /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "80vh" }, children: /* @__PURE__ */ jsxs(
    ReactFlow,
    {
      nodes,
      edges,
      onNodeClick,
      onNodeDoubleClick,
      onNodesChange,
      onEdgesChange,
      fitView: true,
      nodeTypes,
      fitViewOptions: { padding: 0.2 },
      panOnDrag: true,
      zoomOnScroll: true,
      zoomOnPinch: true,
      children: [
        /* @__PURE__ */ jsx(Controls, {}),
        /* @__PURE__ */ jsx(MiniMap, {}),
        /* @__PURE__ */ jsx(Background, {})
      ]
    }
  ) });
}

function ModelFlowWrapper({ architecture }) {
  return /* @__PURE__ */ jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsx(ModelFlow, { architecture }) });
}

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id: projectname } = Astro2.params;
  const url = new URL(Astro2.request.url);
  const versionname = url.searchParams.get("version");
  const model = await getModelByProjectAndVersion(projectname, versionname);
  console.log("\u{1F4CB} model:", model);
  const architecture = model.architecture;
  if (!model || typeof architecture !== "object" || architecture === null) {
    return new Response("Invalid model or architecture", { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Model Architecture: ${projectname}`, "mainPage": `project-${projectname}`, "page": `version-${versionname}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-4"> <h1>Model: ${projectname}</h1> <p><strong>Version:</strong> ${versionname}</p> ${renderComponent($$result2, "ModelFlowWrapper", ModelFlowWrapper, { "architecture": architecture, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ec2-user/vit/AdminLTE/src/components/ModelFlowWrapper.jsx", "client:component-export": "default" })} </div> ` })}`;
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
