import { Slider } from "@nextui-org/react";

const SliderRating = () => {
  return (
    <Slider
      size="md"
      step={0.5}
      color="foreground"
      label="Minimum Rating"
      showSteps={true}
      maxValue={5}
      minValue={0}
      defaultValue={0}
      className="max-w-md"
    />
  );
};

export default SliderRating;
