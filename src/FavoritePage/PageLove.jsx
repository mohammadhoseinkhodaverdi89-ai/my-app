import useFavorite from "../FavoriteProduct/Favorite";
import { CircleSlash, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function PageLove() {
    const cart = useFavorite((state) => state.cart)
    const remove = useFavorite((state) => state.action.remove)
    const nav = useNavigate()
    if(!cart || cart.length === 0) {
        return(
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
        We have nothing here to show you right now. Explore our catalog and add your favorite products!
      </p>

<button 
  onClick={() => nav(-1)} 
  className='border border-red-600 px-4 py-1 rounded-2xl shadow-2xl shadow-rose-600/20  transition-all hover:bg-rose-500/65 hover:scale-105 active:scale-95  duration-300'
>
  Back
</button>
     
    </div>
        )
    }
    return(
        <div className="px-4 py-2  md:px-6 md:py-3 ">
            <header className="flex justify-between items-center-safe mb-2">
                  <img src="/favicon.svg" alt="photo" className="h-4 w-auto" />
                <button onClick={() => nav(-1)} className="bg-purple-500 px-3 py-1 rounded-3xl hover:bg-purple-500/90 transition-all duration-300">back</button>
            </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {cart.map((item) => (
                <div key={item.id} className="">
                    <div className="border flex flex-col items-center bg-gray-500/20 px-2 md:px-4 rounded-3xl border-gray-500 hover:border-purple-500 transition-all duration-300">
                       <img src={item.img} className="rounded-3xl"/>
                    <p className="text-gray-500">{item.name}</p>
                    <p className="text-gray-300 ">{item.price}</p>
                    <button onClick={() =>remove(item.id)} className="bg-red-500/40 rounded-2xl px-3 py-1 hover:bg-amber-100/1 hover:border border-red-500 active:scale-95 transition-all duration-300 w-4/5 mb-1.5">remove</button>
                    </div>

                </div>
            ))}
        </div>
        </div>
    )
}
export default PageLove