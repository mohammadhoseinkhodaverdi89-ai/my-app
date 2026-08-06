import { useState } from "react";
import Photo1 from "./Picture/Gemini_Generated_Image_75au4i75au4i75au.png";
import Photo2 from './Picture/dwada.png'
import Photo3 from './Picture/pwdad.png';
import { ArrowRight } from "lucide-react"; 
const Change = () => {
  const images = [Photo1, Photo2, Photo3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };
  return (
    <div>
      <div className="relative overflow-hidden w-full"> 
        <button onClick={prevImage} className="absolute z-40 top-1/2 translate-y-1/2 right-14">◀</button>
        <img
          src={images[currentIndex]}
          alt={`اسلاید شماره ${currentIndex + 1}`}
          className="px-4 py-2 md:px-6 md:py-3 w-full overflow-hidden rounded-4xl  object-cover aspect-[16/9] mt-3"
        />
        <button onClick={nextImage} className="absolute top-1/2 left-14 translate-y-1/2 z-40">▶</button>
      </div>
    </div>
  );
}
    
export default Change;
