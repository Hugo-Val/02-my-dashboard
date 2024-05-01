"use client"

import { useAppSelector, useAppDispatch } from "@/store";
import { addOne, initCounterState, resetCount, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
    value? : number;
}

export interface CounterResponse {
  method : string;
  count : number;
}

const getApiCounter = async () => {
  const response = await fetch('/api/counter');
  const data = await response.json();
  return data as CounterResponse;
}

export const CartCounter = ({ value = 0 } : Props) => {

  const count = useAppSelector( state => state.counter.count );
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch( initCounterState(value) );
  // }
  // , [value]);

  useEffect(() => {
    getApiCounter().then( data => {
      dispatch( initCounterState(data.count) );
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{ count }</span>
      <div className="flex">
        <button 
          onClick={() => dispatch( addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" type="button">
          +1
        </button>
        <button 
          onClick={() => dispatch( substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]" type="button">
          -1
        </button>
      </div>
    </>
  );
}