"use client";
import { Book, useBooksQuery } from "@/hooks/useBooksQuery";
import { Card, CardBody, CardFooter, Image, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
export const CardUI = () => {
  const router = useRouter();
  const { data } = useBooksQuery();
  if (!data)
    return <Spinner className="flex justify-center items-center my-10" />;
  return (
    <div className="my-10 gap-4 grid grid-cols-6 ">
      {data.map((item: Book) => (
        <Card
          shadow="sm"
          key={item.id}
          isPressable
          onPress={() => router.push(`/book/${item.id}`)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.rating}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
