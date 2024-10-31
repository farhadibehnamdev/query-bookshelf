import Books from "./(books)/page";
import { Search } from "./_components/search/search";

export default function Home() {
  return (
    <div className="p-5">
      <section className="flex w-full flex-col justify-center items-center mt-20">
        <Search />
      </section>

      <Books />
    </div>
  );
}
