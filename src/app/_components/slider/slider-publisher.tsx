import { Slider } from "@nextui-org/react";

const SliderPublisher = () => {
  return (
    <Slider
      label="Publication Year"
      size="sm"
      maxValue={2024}
      getValue={(val) => `${val} of 2024 Years`}
      className="max-w-md"
      minValue={1925}
      color="foreground"
    />
  );
};

export default SliderPublisher;
