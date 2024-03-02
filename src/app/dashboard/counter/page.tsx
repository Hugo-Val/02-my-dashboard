"use client";
import { useState } from "react";

export const metadata = {
  title: 'Counter Page',
  description: 'Simple Counter',
};

export default function CounterPage() {

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart Products</span>
      <span className="text-9xl">{ count }</span>
      <div className="flex">
        <button 
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" type="button">
          +1
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]" type="button">
          -1
        </button>
      </div>
      


    </div>
  );
}