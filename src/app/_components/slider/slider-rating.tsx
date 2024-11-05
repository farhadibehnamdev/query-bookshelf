import { Slider, SliderValue } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SliderRating = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleBooksRating = (value: SliderValue) => {
    const term = value.toString();
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("yr", term);
    } else {
      params.delete("yr");
    }
    replace(`${pathname}?${params.toString()}`);
  };
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
      onChange={(value: SliderValue) => handleBooksRating(value)}
    />
  );
};

export default SliderRating;
