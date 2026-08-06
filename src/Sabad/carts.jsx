import { h1 } from "framer-motion/client";
import useCounterStore from "../CounterStore/Store";
import { useNavigate } from "react-router-dom";
import { CircleSlash, ShoppingBag } from "lucide-react";
function Cart() {
  const cart = useCounterStore((state) => state.cart);
  const remove = useCounterStore((state) => state.action.remove);
  const number = useCounterStore((state) => state.number);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const nav = useNavigate();
  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-[70vh] w-full flex flex-col justify-center items-center px-4 text-center">
        <div className="relative flex justify-center items-center mb-8">
          <div className="absolute w-32 h-32 bg-rose-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-rose-500/10">
            <div className="relative text-rose-500">
              <CircleSlash className="w-16 h-16 animate-[spin_10s_linear_infinite]" />
              <ShoppingBag className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
          Nothing Here!
        </h1>

        <p className="max-w-md text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          We have nothing here to show you right now. Explore our catalog and
          add your favorite products!
        </p>

        <button
          onClick={() => nav(-1)}
          className="border border-red-600 px-4 py-1 rounded-2xl shadow-2xl shadow-rose-600/20  transition-all hover:bg-rose-500/65 hover:scale-105 active:scale-95  duration-300"
        >
          Back
        </button>
      </div>
    );
  }
  return (
    <div className="px-4 py-2 md:px-6 md:py-3">
      <button
        className="bg-purple-500 rounded-lg w-1/5 hover:bg-purple-400 transition-all duration-300 active:scale-105"
        onClick={() => nav(-1)}
      >
        back
      </button>
      <div className="grid grid-cols-3 gap-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-purple-500/30 bg-slate-400/20 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300
        "
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="p-3">
              <h1 className="text-sm font-semibold">{item.name}</h1>
              <p className="mt-1 text-xs text-gray-500">{item.slug}</p>
              <p className="mt-1 text-xs text-gray-500">{item.price}</p>
              <p className="mt-1 text-xs text-gray-500">
                {item.number} | تعداد محصول
              </p>
              <button onClick={() => increase(item.id)}>+</button>
              <button onClick={() => decrease(item.id)}>-</button>
              <button
                onClick={() => remove(item.id)}
                className="mt-3 w-full rounded-md bg-purple-600 py-2 text-sm text-white hover:bg-purple-700 font-inter"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cart;