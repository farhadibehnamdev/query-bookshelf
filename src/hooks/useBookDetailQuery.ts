import { useQuery } from "@tanstack/react-query";
import { Book } from "./useBooksQuery";
import { API_KEY, API_URL } from "@/configs/globals";
import { readData } from "@/core/http-service";
import { RawAxiosRequestHeaders } from "axios";

export interface BookDetails extends Book {
  pages: number;
  desc: string;
  reviews: number;
  link: string;
}

const getBook = async (id: number) => {
  const url = `${API_URL}Books?select=title,id,img,desc,rating,link,reviews,pages&id=eq.${id}`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  return await readData<BookDetails[]>(url, headers);
};
export const useBookDetailQuery = (id: number) => {
  return useQuery<BookDetails[]>({
    queryKey: ["book", id],
    queryFn: () => getBook(id),
    staleTime: 5000,
  });
};
