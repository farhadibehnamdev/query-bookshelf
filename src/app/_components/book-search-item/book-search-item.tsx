"use client";
import { Book } from "@/hooks/useBooksQuery";
import useSearchQuery from "@/hooks/useSearchQuery";
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Link,
  Spinner,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const BookSearchItem: React.FC = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, status } = useSearchQuery(search);
  const router = useRouter();
  return (
    <Autocomplete
      onValueChange={(value: string) => setSearch(value)}
      label="Select an book"
      className="max-w-full"
      items={data}
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
            <Link onPress={() => router.push(`/book/${item.id}`)}>
              <div className="flex justify-between justify-items-center items-center">
                <Avatar src={item.img} isBordered radius="sm" size="sm" />
                <span>{item.title}</span>
                <span>{item.rating}</span>
              </div>
            </Link>
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
