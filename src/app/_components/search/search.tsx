"use client";
import { BookSearchItem } from "../book-search-item/book-search-item";

export const Search = () => {
  return (
    <div className="  mb-10 gap-4">
      {/* <Input
        type="email"
        placeholder="you@example.com"
        labelPlacement="outside"
        size="lg"
        variant="bordered"
        endContent={
          <SearchIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      /> */}
      <BookSearchItem />
    </div>
  );
};
