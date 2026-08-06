import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import Photo1 from "./Photo/Screenshot 2026-07-17 084010.png";
import Photo2 from "./Photo/Screenshot 2026-07-17 084017.png";
import Photo3 from "./Photo/Screenshot 2026-07-17 084036.png";
import useCounterStore from "../CounterStore/Store";
const Products = [
  {
    id: 1,
    name: "لباس ورزشی",
    img: Photo1,
    price: 300,
    quantity: 1,
    details: "the brand is nike",
  },
  {
    id: 2,
    name: "لباس ورزشی",
    img: Photo2,
    price: 300,
    quantity: 1,
    details: "the brand is adidass",
  },
  {
    id: 3,
    name: "لباس ورزشی",
    img: Photo3,
    price: 300,
    quantity: 1,
    details: "the brand is puma",
  },
  {
    id: 4,
    name: "لباس ورزشی",
    img: Photo1,
    price: 300,
    quantity: 1,
    details: "the brand is nike",
  },
  {
    id: 5,
    name: "کفش ورزشی",
    img: Photo2,
    price: 300,
    quantity: 1,
    details: "the brand is puma",
  },
  {
    id: 6,
    name: "لباس ورزشی",
    img: Photo3,
    price: 300,
    quantity: 1,
    details: "the brand is puma",
  },
  {
    id: 7,
    name: "لباس ورزشی",
    img: Photo1,
    price: 300,
    quantity: 1,
    details: "the brand is puma",
  },
  {
    id: 8,
    name: "کفش ورزشی",
    img: Photo2,
    price: 300,
    quantity: 1,
    details: "the brand is puma",
  },
  {
    id: 9,
    name: "لباس ورزشی",
    img: Photo3,
    price: 300,
    quantity: 1,
    details: "the brand is addisa",
  },
  {
    id: 10,
    name: "لباس ورزشی",
    img: Photo1,
    price: 300,
    quantity: 1,
    details: "the brand is abibas",
  },
  {
    id: 11,
    name: "کفش ورزشی",
    img: Photo2,
    price: 300,
    quantity: 1,
    details: "the brand is puma",
  },
  {
    id: 12,
    name: "لباس ورزشی",
    img: Photo3,
    price: 300,
    quantity: 1,
    details: "the brand is nike",
  },
];

function Details() {
  const { id } = useParams();
  const nav = useNavigate();
  const [count, setCount] = useState(1);
  const product = Products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center text-white flex-row md:flex-col">
        Product not found
      </div>
    );
  }

  const plus = () => {
    setCount((prev) => prev + 1);
  };
  const negetive = () => {
    setCount((prev) => {
      if (prev < 1) {
        return 0;
      }
      return prev - 1;
    });
  };
  const add = useCounterStore((state) => state.action.add);
  const message = useCounterStore((state) => state.message);
  const reset = useCounterStore((state) => state.action.reset);
  const images = [Photo1, Photo2, Photo3];
  const [selectedImg, setSelectImg] = useState(product.img);
  useEffect(() => {
    const timer = setTimeout(() => {
      reset();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);
  return (
    <div className="max-w-6xl mx-auto px-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 py-4 border border-purple-500 rounded-2xl w-full">
        <div>
          <div className="overflow-hidden flex justify-center items-center">
            <img
              src={selectedImg}
              alt="photo"
              className="rounded-2xl hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="flex flex-row justify-center items-center gap-3 overflow-hidden mt-2 md:mt-4">
            {images.map((item, index) => (
              <button
                onClick={() => setSelectImg(item)}
                key={index}
                className="w-21 h-22 "
              >
                <img
                  src={item}
                  alt="photo"
                  className={`rounded-3xl w-full h-full ${
                    selectedImg === item
                      ? "border-2 border-purple-500 scale-105 shadow-lg shadow-purple-500/30"
                      : "border-2 border-gray-300 hover:border-purple-300 hover:scale-105"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5 md:justify-center">
          <div className="flex justify-between items-center border-b border-slate-500 py-2.5 md:py-5">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-500 border rounded-2xl p-1.5 bg-purple-300/10">
              کد : {product.id}
            </p>
          </div>
          <div className="border-b py-2.5 md:py-5">
            <p className="text-2xl text-purple-600 font-bold">
              {product.price} T
            </p>
            <p className="leading-8 text-gray-700 bg-gray-400/10 border rounded-2xl p-2 mt-2">مشخصات محصول: <br/>{product.details}</p>
          </div>
          <div className="flex flex-row justify-between py-2.5 md:py-5">
            <p>تعداد محصول</p>
          <div className="flex items-center justify-between bg-slate-900 border border-purple-500/30 rounded-xl p-1 w-32 shadow-sm">
          
            <button
              onClick={negetive}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:bg-purple-600/20 hover:text-purple-400 active:scale-90 transition-all font-bold text-lg"
            >
              -
            </button>

            <span className="font-bold text-white text-base select-none">
              {count}
            </span>

            <button
              onClick={plus}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:bg-purple-600/20 hover:text-purple-400 active:scale-90 transition-all font-bold text-lg"
            >
              +
            </button>
          </div>
          </div>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => nav(-1)}
              className="group relative flex items-center justify-center gap-2 w-2/5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/5 active:scale-95"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>بازگشت</span>
            </button>
            <button
              onClick={() => add({ ...product, quantity: count })}
              className="bg-purple-600 w-full hover:bg-purple-700 text-white py-3 rounded-xl transition active:scale-95"
            >
              افزودن به سبد خرید
            </button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}
export default Details;
