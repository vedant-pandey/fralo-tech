import { ChangeEventHandler } from 'react';
import styles from './index.module.css';

export interface FLInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  adornmentBg?: unknown;
  value?: string | number
}

export function FLInput({label, adornmentBg, value: inputValue, onChange}: FLInputProps) {
  return (
    <div>
        <label style={{
          transform: "translate(12px, 7px) scale(0.75)",
          display: "block",
          transformOrigin: "top left",
          color: "rgba(0, 0, 0, 0.54)",
          fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
          fontWeight: "400",
          lineHeight: "1",
          letterSpacing: "0.00938em",
          left: "-12px",
          position: "relative",
          fontSize: "18px",
          paddingTop: "3px",
          paddingLeft: "0px",
          borderRadius: "100px",
          marginBottom: "3px",
          }}>
            {label}
        </label>
        <div>
          {adornmentBg ?
            <div style={{
              position: "absolute",
              marginTop: "2px",
              marginRight: "8px",
            }}>
              <div className="w-2 h-2 inline-block rounded-full relative"
                  style={{
                    left: '15px',
                    background: adornmentBg,
                  }}
                ></div>
            </div>
          : null}
          <input
            value={inputValue}
            onChange={onChange}
            style={{
              fontSize: '12px',
              background: '#efeff1',
              paddingTop: '8px',
              paddingLeft: '28px',
              borderRadius: '100px',
              paddingBottom: '8px',
              width: '100%',
              height: '1.1876em',
              boxSizing: 'content-box',
              letterSpacing: 'inherit',
            }}
          />
        </div>
      </div>
  );
}

export default FLInput;
