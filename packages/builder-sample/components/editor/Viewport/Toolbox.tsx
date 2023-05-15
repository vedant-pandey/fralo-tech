import { Element, useEditor } from '@fralo-tech/builder-core';
import React from 'react';
import styled from 'styled-components';

import {
  AiOutlineLink,
  AiOutlineBorder,
  AiOutlineFontSize,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { Button } from '../../selectors/Button';
import { Container } from '../../selectors/Container';
import { Text } from '../../selectors/Text';
import { Video } from '../../selectors/Video';
import { FLTooltip } from '@fralo-tech/components';

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-12 h-full flex flex-col bg-white"
    >
      <div className="flex flex-1 flex-col items-center pt-3">
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="300px"
              ></Element>
            )
          }
        >
          <FLTooltip tooltipLabel="Container" side="right" delayDuration={100}>
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <AiOutlineBorder />
            </Item>
          </FLTooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <FLTooltip tooltipLabel="Text" side="right" delayDuration={100}>
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <AiOutlineFontSize />
            </Item>
          </FLTooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <FLTooltip tooltipLabel='Button' side='right' delayDuration={100}>
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <AiOutlineLink />
            </Item>
          </FLTooltip>
        </div>
        <div ref={(ref) => create(ref, <Video />)}>
          <FLTooltip tooltipLabel='Video' side='right' delayDuration={100}>
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <AiOutlineYoutube />
            </Item>
          </FLTooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
