import { Button } from "@/components/ui/button"
// Define the generic Props type for the Card component
type CardProps<T> = {
  item: T;  // The item prop can be of any type
};

const Card = <T,>({ item }: CardProps<T>): JSX.Element => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        {/* Show item as JSON string, useful for complex data */}
        <pre className="text-sm text-gray-700">{JSON.stringify(item, null, 2)}</pre>
      </div>
      <Button className="mt-4">Click Me</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
};

export default Card;