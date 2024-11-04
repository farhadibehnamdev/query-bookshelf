import { Slider } from "@nextui-org/react";

const SliderNumberOfPages = () => {
  return (
    <Slider
      label="Number Of Pages"
      step={1}
      maxValue={1000}
      minValue={0}
      defaultValue={0}
      className="max-w-md"
      color="foreground"
    />
  );
};

export default SliderNumberOfPages;
