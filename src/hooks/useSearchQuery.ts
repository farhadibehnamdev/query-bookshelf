import { createData } from "@/core/http-service";
import { useQuery } from "@tanstack/react-query";
import { Book } from "./useBooksQuery";
import { API_KEY, API_URL } from "@/configs/globals";

type SearchTerm = {
  search_term: string;
};

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const bookQuery = async (search: string, signal: AbortSignal) => {
  const url = `${API_URL}rpc/search_books`;
  await sleep(1000);
  if (!signal.aborted) {
    const response = await createData<SearchTerm, Book[]>(
      url,
      { search_term: search },
      {
        Authorization: `Bearer ${API_KEY}`,
        apiKey: API_KEY,
      }
    );
    return response;
  }
};

const useSearchQuery = (search: string) => {
  console.log("search :: ", search);
  return useQuery({
    queryKey: ["book", "search", search],
    queryFn: ({ signal }: { signal: AbortSignal }) => bookQuery(search, signal),
    enabled: search !== "",
  });
};

export default useSearchQuery;
