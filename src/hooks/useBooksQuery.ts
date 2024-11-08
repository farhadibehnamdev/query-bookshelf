import { API_KEY, API_URL } from "@/configs/globals";
import { readData } from "@/core/http-service";
import { Book } from "@/types/book.interface";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";

const getBooks = async () => {
  const url = `${API_URL}Books?select=id,title,img,rating`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
    range: "0-30",
  };
  const res = await readData<Book[]>(url, headers);
  return res;
};

export const useBooksQuery = () => {
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: getBooks,
  });
};
