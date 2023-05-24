import styles from './FLRadioGroup.module.css';
import * as RadioGroup from '@radix-ui/react-radio-group';

export type RadioItemProps = {
  value: string;
  id?: string;
  label: string;
};

/* eslint-disable-next-line */
export interface FLRadioGroupProps {
  children?: React.ReactNode;
  onChange?: any;
  radioValues: RadioItemProps[];
  ariaLabel?: string;
  defaultValue?: string;
  defaultIndex?: number;
}

export function FLRadioGroup(props: FLRadioGroupProps) {
  return (
    <form>
      <RadioGroup.Root
        className="flex flex-col gap-2.5"
        defaultValue={props.defaultValue ?? (props.defaultIndex ? props.radioValues[props.defaultIndex].value: "")}
        aria-label={props.ariaLabel}
        onValueChange={value => props.onChange(value)}
      >
        {props.radioValues ? props.radioValues.map(({label, value, id}) => (
          <div className="flex items-center">
            <RadioGroup.Item
              className="w-[15px] h-[15px] rounded-full shadow-[0_2px_10px] shadow-black hover:bg-violet-500 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value={value}
              id={id}
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-500" />
            </RadioGroup.Item>
            <label
              className="text-black text-[15px] leading-none pl-[15px]"
              htmlFor={id}
            >
              {label}
            </label>
          </div>
        )): null}
      </RadioGroup.Root>
    </form>
  );
}

export default FLRadioGroup;
