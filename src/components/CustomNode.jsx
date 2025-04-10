import React from 'react';
import { Handle, Position } from 'reactflow';

export default function CustomNode({ data }) {
  const isContainer = data.isContainer;

  return (
    <div
      className="p-2 rounded text-xs max-w-[240px] text-center"
      style={{
        backgroundColor: isContainer ? '#e6f2ff' : '#fff',
        border: isContainer ? '2px dashed #66aaff' : '1px solid #ccc',
        boxShadow: isContainer
          ? '0 0 10px rgba(102,170,255,0.3)'
          : '0 1px 3px rgba(0,0,0,0.1)',
        padding: '0.5rem',
      }}
    >
      <div className="font-semibold text-sm">
        {data.label}
      </div>

      {isContainer ? (
        <div className="text-[10px] text-blue-600 mt-1">(双击收起)</div>
      ) : data.hasChildren ? (
        <div className="text-[10px] text-blue-500 mt-1">(点击展开)</div>
      ) : null}

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
