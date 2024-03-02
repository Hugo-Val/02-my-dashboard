import { CartCounter } from "@/shopping-cart";



export const metadata = {
  title: 'Counter Page',
  description: 'Simple Counter',
};

export default function CounterPage() {

  

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart Products</span>
      < CartCounter value = { 20 }/>
      


    </div>
  );
}