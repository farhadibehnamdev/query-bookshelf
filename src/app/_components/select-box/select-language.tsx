import { Select, SelectItem } from "@nextui-org/react";

type languageType = {
  key: string;
  label: string;
};

const languages: languageType[] = [
  { key: "English", label: "English" },
  { key: "Spanish", label: "Spanish" },
  { key: "French", label: "French" },
  { key: "Persian", label: "Persian" },
  { key: "Korean", label: "Korean" },
];

const SelectLanguage = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        variant="bordered"
        label="Language"
        className="max-w-xs"
        labelPlacement="outside"
        placeholder="Select an language"
      >
        {languages?.map((item: languageType) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectLanguage;
