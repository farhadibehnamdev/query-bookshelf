import { Select, SelectItem } from "@nextui-org/react";

type BookFormat = {
  key: string;
  label: string;
};

const bookformates: BookFormat[] = [
  { key: "Hardcover", label: "Hardcover" },
  { key: "Paperback", label: "Paperback" },
];

export const SelectBookformat = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        variant="bordered"
        label="Language"
        className="max-w-xs"
        labelPlacement="outside"
        placeholder="Select an language"
      >
        {bookformates?.map((item: BookFormat) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectBookformat;
