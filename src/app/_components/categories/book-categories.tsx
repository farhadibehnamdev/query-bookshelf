import { Card, CardBody, Checkbox } from "@nextui-org/react";

const BookCategories = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Categories</h1>
      <Card>
        <CardBody className="gap-y-4">
          <Checkbox radius="sm">Children</Checkbox>
          <Checkbox radius="sm">Sci-Fi</Checkbox>
          <Checkbox radius="sm">Horror</Checkbox>
          <Checkbox radius="sm">Crime</Checkbox>
          <Checkbox radius="sm">Alien Fiction</Checkbox>
          <Checkbox radius="sm">Western</Checkbox>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookCategories;
