import { Rating } from "@/app/_components/rating/rating";
import { Book } from "@/types/book.interface";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const BookItem = ({ book }: { book: Book }) => {
  const router = useRouter();
  return (
    <Card
      shadow="sm"
      key={book.id}
      isPressable
      onPress={() => router.push(`/book/${book.id}`)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={book.title}
          className="w-full object-cover h-[140px]"
          src={book.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{book.title}</b>
        <Rating />
        <p className="text-default-500">{book.rating}</p>
      </CardFooter>
    </Card>
  );
};

export default BookItem;
