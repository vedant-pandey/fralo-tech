import styles from './FLRadioItem.module.css';
import * as RadioGroup from '@radix-ui/react-radio-group';

/* eslint-disable-next-line */
export interface FLRadioItemProps {
  label: string;
  id: string;
  value: string;
}

export function FLRadioItem(props: FLRadioItemProps) {
  return (
    <div className="flex items-center">
      <RadioGroup.Item
        className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
        value={props.value}
        id={props.id}
      >
        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
      </RadioGroup.Item>
      <label
        className="text-white text-[15px] leading-none pl-[15px]"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
}

export default FLRadioItem;
