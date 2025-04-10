import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  useReactFlow,
  Controls,
  Background,
  MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import { getLayoutedElements } from './layoutUtils';

const nodeTypes = { custom: CustomNode };

export default function ModelFlow({ architecture }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { fitView } = useReactFlow();

  const createNodeId = (path) => path.join('/');

  const buildContainerAndChildren = (parentId, fullData, path) => {
    const containerId = `container-${parentId}`;
    const children = fullData.children || [];
    const newNodes = [];
    const newEdges = [];

    // Container node
    newNodes.push({
      id: containerId,
      type: 'custom',
      data: {
        label: `${fullData.name || fullData.type} (展开)`,
        isContainer: true,
        parentId,
        fullData,
        hasChildren: false
      },
      position: { x: 0, y: 0 },
      style: {
        backgroundColor: '#e6f2ff',
        border: '2px dashed #66aaff',
        padding: 10
      }
    });

    let previousId = null;
    children.forEach((child, index) => {
      const childId = `${containerId}/${child.name || child.type || `child${index}`}`;
      newNodes.push({
        id: childId,
        type: 'custom',
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
    const path = parentId.split('/');
    const { containerNodeId, newNodes, newEdges } = buildContainerAndChildren(parentId, fullData, path);

    const updatedNodes = nodes
      .filter(n => n.id !== parentId)
      .concat(newNodes);

    const updatedEdges = edges
      .filter(e => e.source !== parentId && e.target !== parentId)
      .concat(newEdges);

    const layouted = getLayoutedElements(updatedNodes, updatedEdges, 'LR');
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  }, [nodes, edges]);

  const collapseContainer = useCallback((containerNode) => {
    const containerId = containerNode.id;
    const parentId = containerNode.data.parentId;
    const fullData = containerNode.data.fullData;

    const idsToRemove = nodes
      .filter(n => n.id.startsWith(`${containerId}/`) || n.id === containerId)
      .map(n => n.id);

    const remainingNodes = nodes.filter(n => !idsToRemove.includes(n.id));
    const remainingEdges = edges.filter(
      (e) => !idsToRemove.includes(e.id) &&
             !idsToRemove.includes(e.source) &&
             !idsToRemove.includes(e.target)
    );

    const restoredNode = {
      id: parentId,
      type: 'custom',
      data: {
        label: fullData.name || fullData.type,
        hasChildren: fullData.children?.length > 0,
        fullData
      },
      position: containerNode.position
    };

    const updatedNodes = [...remainingNodes, restoredNode];
    const layouted = getLayoutedElements(updatedNodes, remainingEdges, 'LR');

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
      type: 'custom',
      data: {
        label: architecture.name || architecture.type,
        hasChildren: architecture.children?.length > 0,
        fullData: architecture
      },
      position: { x: 0, y: 0 }
    };

    const { nodes: layoutedNodes } = getLayoutedElements([rootNode], [], 'LR');
    setNodes(layoutedNodes);
    setEdges([]);
  }, [architecture]);

  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodeTypes={nodeTypes}
        fitViewOptions={{ padding: 0.2 }}
        panOnDrag
        zoomOnScroll
        zoomOnPinch
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
}