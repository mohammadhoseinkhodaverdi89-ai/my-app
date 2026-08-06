import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Photo1 from "./Photo/Gemini_Generated_Image_i3xkmli3xkmli3xk.png";
import Photo2 from "./Photo/Gemini_Generated_Image_4aj1od4aj1od4aj1.png";
import Photo3 from "./Photo/Gemini_Generated_Image_fofaq4fofaq4fofa.png";
import Photo4 from "./Photo/Gemini_Generated_Image_s7k5hws7k5hws7k5.png";

function Wearing() {
  const categories = [
    {
      id: 1,
      img: Photo1,
      title: "sport-Clothes|لباس ورزشی",
      slug: "sport-clothes"
    },
    { id: 2, img: Photo2, title: "Set-Clothes|لباس ست", slug: "set-clothes" },
    {
      id: 3,
      img: Photo3,
      title: "classic-Clothes|لباس کلاسیک",
      slug: "classic-clothes",
    },
    { id: 4, img: Photo4, title: "Hot-Clothes|لباس گرم", slug: "hot-clothes" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 grid-rows-2 gap-2 px-4 py-2 md:px-6 md:py-3 md:grid-cols-3 md:grid-rows-2 cursor-pointer lg:grid-rows-1 lg:grid-cols-4"
    >
      {categories.map((item) => (
        <motion.div
          variants={itemVariants}
          key={item.id}
          className="h-full w-full"
        >
          <Link
            to={`/product/${item.slug}`}
            className="relative block overflow-hidden rounded-lg h-full w-full group"
          >
            <div className="transition-all duration-300 group-hover:scale-105 group-hover:opacity-55 h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-white font-bold text-center text-sm md:text-base z-10 pointer-events-none">
                {item.title}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Wearing;
