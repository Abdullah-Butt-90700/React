import Card from "./Card";

const App = () => {
  const user = { name: "John", age: 30, occupation: "Developer" };
  const product = { title: "Laptop", price: 1000, inStock: true };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Use Card component with different types of data */}
      <Card item={user} />
      <Card item={product} />
    </div>
  );
};

export default App;