"use client";
import useSearchQuery from "@/hooks/useSearchQuery";
import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import BookItem from "./book-item";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { Book } from "@/types/book.interface";
import { useBooksQuery } from "@/hooks/useBooksQuery";

const objMap = {
  yr: "param_publish_date",
  pgs: "param_pages",
  rat: "param_rating",
  bkf: "param_bookFormat",
  gnr: "param_genre",
};

const objectQueryString = (searchParams: ReadonlyURLSearchParams) => {
  const objs: { [key: string]: string } = {};
  for (const [key, value] of searchParams) {
    if (key in objMap) {
      const mappedKey = objMap[key as keyof typeof objMap];
      objs[mappedKey] = value;
    }
  }
  return objs;
};

export const BookList = () => {
  const searchParams = useSearchParams();
  const res = objectQueryString(searchParams);
  const { data: filteredBookData, isLoading: filterLoading } =
    useSearchQuery(res);
  const { data: initialBookData, isLoading: initLoading } = useBooksQuery();
  if (filterLoading || initLoading)
    return <Spinner className="flex justify-center items-center my-10" />;

  if (filteredBookData?.length === 0 || initialBookData?.length === 0)
    return (
      <p className="flex justify-center items-center text-gray-400 text-2xl">
        No Books Found.
      </p>
    );

  const booksData = filteredBookData ?? initialBookData;
  return (
    <div className="my-10 gap-4 grid grid-cols-6 ">
      <Suspense fallback={<Spinner />}>
        {booksData?.map((item: Book) => (
          <BookItem key={item.id} book={item} />
        ))}
      </Suspense>
    </div>
  );
};
