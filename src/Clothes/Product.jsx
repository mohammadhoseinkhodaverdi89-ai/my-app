import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Photo1 from "./Photo/Screenshot 2026-07-17 084010.png";
import Photo2 from "./Photo/Screenshot 2026-07-17 084017.png";
import Photo3 from "./Photo/Screenshot 2026-07-17 084036.png";
import useCounterStore from "../CounterStore/Store";
import { Link } from "react-router-dom";
import { motion,AnimatePresence, scale } from "framer-motion";
const Productes = [
  {
    id: 1,
    name: "لباس ورزشی",
    slug: "sport-clothes",
    img: Photo1,
    price: 300,
    quantity: 1,
  },
  {
    id: 2,
    name: "کفش ورزشی",
    slug: "sport-clothes",
    img: Photo2,
    price: 300,
    quantity: 1,
  },
  {
    id: 3,
    name: "لباس ورزشی",
    slug: "sport-clothes",
    img: Photo3,
    price: 300,
    quantity: 1,
  },
  {
    id: 4,
    name: "لباس ورزشی",
    slug: "set-clothes",
    img: Photo1,
    price: 300,
    quantity: 1,
  },
  {
    id: 5,
    name: "کفش ورزشی",
    slug: "set-clothes",
    img: Photo2,
    price: 300,
    quantity: 1,
  },
  {
    id: 6,
    name: "لباس ورزشی",
    slug: "set-clothes",
    img: Photo3,
    price: 300,
    quantity: 1,
  },
  {
    id: 7,
    name: "لباس ورزشی",
    slug: "classic-clothes",
    img: Photo1,
    price: 300,
    quantity: 1,
  },
  {
    id: 8,
    name: "کفش ورزشی",
    slug: "classic-clothes",
    img: Photo2,
    price: 300,
    quantity: 1,
  },
  {
    id: 9,
    name: "لباس ورزشی",
    slug: "classic-clothes",
    img: Photo3,
    price: 300,
    quantity: 1,
  },
  {
    id: 10,
    name: "لباس ورزشی",
    slug: "hot-clothes",
    img: Photo1,
    price: 300,
    quantity: 1,
  },
  {
    id: 11,
    name: "کفش ورزشی",
    slug: "hot-clothes",
    img: Photo2,
    price: 300,
    quantity: 1,
  },
  {
    id: 12,
    name: "لباس ورزشی",
    slug: "hot-clothes",
    img: Photo3,
    price: 300,
    quantity: 1,
  },
];
function Product() {
  const { slug } = useParams();
  const nav = useNavigate();

  const add = useCounterStore((state) => state.action.add);
  const message = useCounterStore((state) => state.message);
  const reset = useCounterStore((state) => state.action.reset);
  useEffect(() => {
    const timer = setTimeout(() => {
      reset();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);
  const Filtered = Productes.filter((item) => {
    return item.slug === slug;
  });
  return (
    <div className="p-3">
      <div className="flex flex-row justify-between items-baseline-last">
        <img src="/favicon.svg" alt="photo" className="h-4 w-auto" />
        <div className="flex gap-2">
          {/* <Funnel className="hover:text-purple-500 transition-all duration-300" /> */}
          <button
            onClick={() => nav("/")}
            className="mb-4 rounded-md bg-purple-600 px-3 py-2 text-sm text-white hover:scale-105  hover:shadow-[0_0_20px_rgba(168,85,247,0.7),0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 active:scale-95"
          >
            Back
          </button>
        </div>
      </div>
 <AnimatePresence>
  {message && (
    <motion.dev
    initial={{opacity: 0 , y: 50 , scale: 0.9}}
    animate={{opacity : 1 , y : 0 , scale: 1}}
    exit={{opacity : 0 , scale: 0.9 , y: -50}}
    transition={{duraction : 0.3}}
    className='fixed top-3 left-9 rounded-2xl p-4 bg-slate-400/30 border border-red-500/20 backdrop-blur-xl'
    >
    <span className="rounded-full bg-red-500 animate-pulse flex h-3 w-3"/>
    <p>{message}</p>
    </motion.dev>
  )}
 </AnimatePresence>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Filtered.map((item) => (
          <div className="overflow-hidden rounded-xl border border-purple-500/30 bg-slate-400/20 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <img
              src={item.img}
              alt={item.name}
              className="h-40 w-full object-cover transition duration-300 hover:scale-105"
            />

            <div className="p-3">
              <h1 className="text-sm font-semibold">{item.name}</h1>
              <p className="mt-1 text-xs text-gray-500">{item.slug}</p>
              <p className="mt-1 text-xs text-gray-500">{item.price}</p>
              <Link
                to={`/details/${item.id}`}
                key={item.id}
                className="group relative inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors duration-300 hover:text-blue-400"
              >
                <span className="relative">
                  see Details
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  add(item);
                }}
                className="mt-3 w-full rounded-md bg-purple-600 py-2 text-sm text-white hover:bg-purple-700 active:scale-95 transition-all duration-300"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Product;
