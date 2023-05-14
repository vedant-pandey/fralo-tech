import styles from './FLRadioGroup.module.css';
import * as RadioGroup from '@radix-ui/react-radio-group';

type RadioItemProps = {
  value: string;
  id?: string;
  label: string;
};

/* eslint-disable-next-line */
export interface FLRadioGroupProps {
  children?: React.ReactNode;
  onChange?: any;
  radioValues: RadioItemProps[];
}

export function FLRadioGroup(props: FLRadioGroupProps) {
  return (
    <form>
      <RadioGroup.Root
        className="flex flex-col gap-2.5"
        defaultValue="default"
        aria-label="View density"
        onValueChange={() => props.onChange()}
      >
        {props.radioValues.map(({label, value, id}) => (
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value={value}
              id={id}
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor={id}
            >
              {label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
}

export default FLRadioGroup;
