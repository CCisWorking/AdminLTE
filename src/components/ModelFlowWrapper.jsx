import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import ModelFlow from './ModelFlow';

export default function ModelFlowWrapper({ architecture }) {
  return (
    <ReactFlowProvider>
      <ModelFlow architecture={architecture} />
    </ReactFlowProvider>
  );
}
