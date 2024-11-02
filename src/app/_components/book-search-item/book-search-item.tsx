"use client";
import { Book } from "@/hooks/useBooksQuery";
import useSearchQuery from "@/hooks/useSearchQuery";
import { Autocomplete, AutocompleteItem, Spinner } from "@nextui-org/react";
import { useState } from "react";

export const BookSearchItem: React.FC = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, status } = useSearchQuery(search);

  return (
    <Autocomplete
      onValueChange={(value: string) => setSearch(value)}
      label="Select an animal"
      className="max-w-xs"
    >
      {isLoading ? (
        <AutocompleteItem key="loading">
          <Spinner />
        </AutocompleteItem>
      ) : status === "error" ? (
        <AutocompleteItem key="error">
          <span>Something went wrong...</span>
        </AutocompleteItem>
      ) : status === "success" ? (
        data!.map((item: Book) => (
          <AutocompleteItem key={item.id} value={item.title}>
            {item.title}
          </AutocompleteItem>
        ))
      ) : (
        <AutocompleteItem key="no-value">
          <span>No results found</span>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};
