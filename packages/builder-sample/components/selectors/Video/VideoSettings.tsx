import React from 'react';

import { ToolbarItem } from '../../editor';
import { FLMultiAccordion } from '@fralo-tech/components';

export const VideoSettings = () => {
  return (
    <React.Fragment>
      <FLMultiAccordion
        items={[
          {
            title: 'Youtube',
            children: [
              <ToolbarItem
                full={true}
                propKey="videoId"
                type="text"
                label="Video ID"
                key={0}
              />,
            ],
          },
        ]}
      />
    </React.Fragment>
  );
};
