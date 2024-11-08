"use client";

import { Rating } from "@/app/_components/rating/rating";
import { useBookDetailQuery } from "@/hooks/useBookDetailQuery";
import { Button, Spinner } from "@nextui-org/react";
import { BookOpenCheck, Heart } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export const BookDetailsContent = () => {
  const params = useParams();
  const { data, isStale, refetch, isFetching } = useBookDetailQuery(
    Number(params.id)
  );
  if (!data)
    return <Spinner className="flex justify-center items-center my-10" />;
  const [item] = data!;

  return (
    <div className="container h-screen flex justify-center items-center gap-5 ">
      <div className="p-5   ">
        <Image
          alt="Card background"
          className="mb-5 p-2  bg-slate-300 border-1 shadow-xl border-gray-400  rounded-md"
          src={item?.img}
          priority
          objectFit="cover"
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-5 ">
          <Button
            color="danger"
            variant="solid"
            startContent={<BookOpenCheck size={18} />}
          >
            Read Online
          </Button>
          <Button
            color="warning"
            variant="solid"
            startContent={<Heart size={18} />}
          >
            Favourit Book
          </Button>
        </div>
      </div>

      <div className="pb-0 text-white flex flex-col flex-1 justify-start items-start gap-3 ">
        <h1 className="text-lg uppercase font-bold">{item?.title}</h1>
        <div className="flex justify-center items-center text-center">
          <div className="font-bold text-large justify-start items-center flex">
            <Rating />
          </div>
          <small className="text-default-500">{item?.reviews}</small>
        </div>

        <p className="break-words text-wrap ">{item?.desc}</p>
      </div>
    </div>
  );
};
