import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Photo1 from "./photo/Gemini_Generated_Image_tsibc3tsibc3tsib.png";
import useFavorite from "../FavoriteProduct/Favorite";
import { Search } from "lucide-react";
import { CircleAlert } from "lucide-react";
const products = [
  {
    id: 1,
    name: "کت ولت |  Jacket",
    price: "$25.00",
    img: Photo1,
  },
  {
    id: 2,
    name: "کت ولت |  Hoodie",
    price: "$15.00",
    img: Photo1,
  },
  {
    id: 3,
    name: "کت ولت |  Jacket",
    price: "$35.00",
    img: Photo1,
  },
  {
    id: 4,
    name: "خانم‌ها |  Jacket",
    price: "$25.00",
    img: Photo1,
  },
  {
    id: 5,
    name: "افزودن سبد |  Hocket",
    price: "$25.00",
    img: Photo1,
  },
  {
    id: 6,
    name: "کت ولت |  Coat",
    price: "$45.00",
    img: Photo1,
  },
];

function Carousel() {
  const [isOpent, setIsopen] = useState(false);
  const [input, setInput] = useState("");
  const add = useFavorite((state) => state.action.add);
  const CountRef = useRef(null);
  const inputRef = useRef(null);
  const Handler = (duraction) => {
    if (CountRef.current) {
      const Moving = duraction === "left" ? -280 : 280;
      CountRef.current.scrollBy({
        left: Moving,
        behavior: "smooth",
      });
    }
  };
  const HandlerInput = () => {
    setIsopen((prev) => {
      const neg = !prev;
      if (neg) {
        setTimeout(() => inputRef.current?.focus(), 200);
      } else {
        setInput("");
      }
      return neg;
    });
  };

  const Filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-2.5 mb-2.5 px-4 py-2  md:px-6 md:py-3 w-full">
        <h1>FEATURED PRODUCTS</h1>
        <div className="flex gap-1 flex-row">
          <p className="flex border rounded-full p-2 bg-gray-400/20">
            <Search
              onClick={HandlerInput}
              className="hover:text-purple-500/50"
            />
            {isOpent ? (
              <motion.input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="rounded-2xl focus:border-purple-500"
                placeholder="search... "
                ref={inputRef}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              ""
            )}
          </p>
          <button
            onClick={() => Handler("left")}
            className="px-3 py-1 bg-purple-600 text-white rounded-md  transition"
          >
            {" "}
            <ChevronLeft />
          </button>
          <button
            onClick={() => Handler("right")}
            className="px-3 py-1 bg-slate-500/20 text-white rounded-md hover:bg-purple-600 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={CountRef}
        className="flex flex-row overflow-x-auto scrollbar-none px-4 py-2  md:px-6 md:py-3 gap-1.5"
      >
        {Filtered.length > 0 ? (
          Filtered.map((item) => (
            <div className="flex flex-col flex-shrink-0 border border-slate-500 p-2 rounded-lg gap-1.5 bg-slate-600/30 hover:border-purple-500 transition-all duration-300 hover:scale-105" key={item.id}>
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  key={item.id}
                  alt={item.name}
                  className="w-full h-40 object-cover flex-shrink-0 rounded-lg hover:scale-105 transition-all duration-300"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold text-white">
                {item.name}
              </h3>
              <p className="text-xs text-gray-400">{item.price}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => add(item)}
                  className="bg-purple-500 p-1 rounded-lg w-4/5 hover:scale-105 hover:bg-purple-500/70 active:scale-95 transition-all duration-300"
                >
                  favorite
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center w-200 ">
            <h1>Nothing here</h1>
            <p className="text-red-500">
              {" "}
              <CircleAlert />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Carousel;
