"use client";

import { BackgroundUpdate } from "@/app/_components/background-update";
import { Rating } from "@/app/_components/rating/rating";
import { StaleMessage } from "@/app/_components/stale-message";
import { Uptodate } from "@/app/_components/uptodate";
import { useBookDetailQuery } from "@/hooks/useBookDetailQuery";
import { Button, Card, CardBody, Image, Spinner } from "@nextui-org/react";
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
    <Card className="py-4 container text-white  w-1/2">
      <CardBody className=" grid grid-cols-[auto_1fr] gap-5">
        <Image alt="Card background" src={item?.img} />
        <div className="pb-0 text-white flex flex-col justify-start items-start gap-3 ">
          <h1 className="text-lg uppercase font-bold">{item?.title}</h1>
          <small className="text-default-500">{item?.reviews}</small>
          <p className="font-bold text-large justify-start items-center flex">
            <Rating />
            <Rating />
            <Rating />
          </p>
          <div className="p-2 border-slate-500 w-full rounded-lg border-2">
            <Button color="warning" className="rounded-lg" fullWidth size="lg">
              Check Out
            </Button>
            {isFetching ? (
              <BackgroundUpdate />
            ) : isStale ? (
              <StaleMessage refetch={refetch} />
            ) : (
              <Uptodate />
            )}
          </div>

          <p className="break-words text-wrap ">{item?.desc}</p>
        </div>
      </CardBody>
    </Card>
  );
};
