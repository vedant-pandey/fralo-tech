import * as Slider from '@radix-ui/react-slider';

/* eslint-disable-next-line */
export interface FLSliderProps {
  value: number
  onChange: unknown
  maxVal?: number
  step?: number
}

export function FLSlider(props: FLSliderProps) {
  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[200px] h-5"
      value={[props.value]}
      defaultValue={[50]}
      max={props.maxVal ?? 100}
      step={props.step ?? 1}
    >
      <Slider.Track className="bg-blackA10 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-white rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-black rounded-[10px] hover:bg-violet-400 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-black"
        aria-label="Volume"
      />
    </Slider.Root>
  );
}

export default FLSlider;
