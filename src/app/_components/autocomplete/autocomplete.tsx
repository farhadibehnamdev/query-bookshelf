"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
const animals = [
  { value: "bear", label: "bear" },
  { value: "dog", label: "dog" },
  { value: "cat", label: "dog" },
  { value: "horse", label: "horse" },
];
export const AutocompleteUI: React.FC = () => {
  return (
    <Autocomplete
      defaultItems={animals}
      label="Favorite Animal"
      placeholder="Search an animal"
      className="max-w-screen-md z-10 mb-2"
    >
      {(animal) => (
        <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};
