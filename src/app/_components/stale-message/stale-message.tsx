import { Button } from "@nextui-org/react";
type RefecthType = () => void;
export const StaleMessage = ({ refetch }: { refetch: RefecthType }) => {
  return (
    <div className="mt-3">
      <span>The checkout status may have changed...</span>
      <Button variant="ghost" className="text-orange-400" onClick={refetch}>
        Get the latest data
      </Button>
    </div>
  );
};
