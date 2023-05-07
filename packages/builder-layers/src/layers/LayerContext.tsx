import { NodeId } from '@fralo-tech/builder-core';
import { EventHandlerConnectors } from '@fralo-tech/builder-utils';
import React from 'react';

import { LayerHandlers } from '../events/LayerHandlers';

export type LayerContextType = {
  id: NodeId;
  depth: number;
  connectors: EventHandlerConnectors<LayerHandlers, React.ReactElement>;
};

export const LayerContext = React.createContext<LayerContextType>(
  {} as LayerContextType
);
