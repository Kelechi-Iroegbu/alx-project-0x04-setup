import { useCount } from "../context/CountContext";

export default function CounterApp() {
  const { count, increment, decrement } = useCount();

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Counter App</h1>

      <p className="text-2xl mb-6">Count: {count}</p>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
