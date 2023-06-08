import { useEditor } from '@fralo-tech/builder-core';
import cx from 'classnames';
import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import {
  AiOutlineCheck,
  AiOutlineEdit,
  AiOutlineRedo,
  AiOutlineUndo,
} from 'react-icons/ai';
import { FLTooltip } from '@fralo-tech/components';

const HeaderDiv = styled.div`
  width: 100%;
  height: 45px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #d4d4d4;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #707070;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey || event.metaKey) {
        if (event.key.toLowerCase() === 'z') {
          event.preventDefault();
          if (event.shiftKey) {
            if (canRedo) {
              actions.history.redo();
            }
          } else if (canUndo) {
            actions.history.undo();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [canUndo, canRedo, actions]);

  return (
    <HeaderDiv className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end">
        {enabled && (
          <div className="flex-1 flex">
            <FLTooltip tooltipLabel="Undo" side="bottom" delayDuration={100}>
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                <AiOutlineUndo />
              </Item>
            </FLTooltip>
            <FLTooltip tooltipLabel="Redo" side="bottom" delayDuration={100}>
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                <AiOutlineRedo />
              </Item>
            </FLTooltip>
          </div>
        )}
        <div className="flex">
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-green-400': enabled,
                'bg-primary': !enabled,
              },
            ])}
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {enabled ? 'Checkmark' : 'Customize'}
            {enabled ? (
              <AiOutlineCheck />
            ) : (
              <AiOutlineEdit />
            )}
            {enabled ? 'Finish Editing' : 'Edit'}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};
