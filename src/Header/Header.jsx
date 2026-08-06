import { Route, Routes, Router, BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { ShoppingBasket } from "lucide-react";
import { StarCheck } from 'lucide-react'; 
import useCounterStore from "../CounterStore/Store";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCounterStore((state) => state.cart)
  const totalItems = cart.reduce((total,item) => total + (item.count || 1),0)
  const Handler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-row text-white justify-between items-center px-4 py-2  md:px-6 md:py-3 sticky top-2 z-50 border rounded-3xl border-slate-800 shadow-[0_4px_25px_rgba(168,85,247,0.15)] font-sans bg-slate-900/50 mx-4  md:mx-6 backdrop-blur-sm">
      <Link>
        <img src="/favicon.svg" alt="photo" className="h-4 w-auto" />
      </Link>
      <nav>
        <ul className="flex gap-2 text-sm font-sans">
          <li className="cursor-pointer hover:text-purple-600 transition-colors duration-300 ease-in">
            Home
          </li>
          <li className="cursor-pointer hover:text-purple-600 transition-colors duration-300 ease-in">
            <Link to={'/favorite'}>
              favorite
            </Link>
          
          </li>
        
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-1">
          <p className="cursor-pointer hover:text-purple-600 transition-colors duration-300 ease-in relative">
            <Link to={'/cart'}>
              <ShoppingBasket />
                <span className="bg-red-500 rounded-full w-4 h-4 absolute font-medium text-[10px] font-bold -top-1.5 -left-0.5 flex justify-center items-center">{totalItems}</span>
            </Link>
          </p>
               <button
        onClick={Handler}
        className=" 
    px-6 py-1.5
    bg-purple-500
    text-white font-semibold tracking-wide
    rounded-xl
    border border-purple-400
    shadow-[0_0_15px_rgba(168,85,247,0.5)]
    hover:bg-purple-600
    hover:shadow-[0_0_20px_rgba(168,85,247,0.7),0_0_40px_rgba(168,85,247,0.5)]
    hover:scale-105
    active:scale-95
    transition-all duration-500"
      >
        Login
      </button>
      </div>
 
      
      {isOpen && <Login onClose={Handler} />}
    </div>
  );
}
export default Header;