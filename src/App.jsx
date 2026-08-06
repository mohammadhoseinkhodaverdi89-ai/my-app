import Header from "./Header/Header";
import Login from "./Header/Login";
import Change from "./Change/Change";
import Wearin from "./Clothes/Wearing";
import Product from "./Clothes/Product";
import Cart from "./Sabad/carts";
import Carousel from "./Slider/Carousel";
import Protect from "./protect/Protect";
import FavoritePage from "./FavoritePage/PageLove";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Clothes/Details";
import Footer from "./footer/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-slate-950 flex justify-center items-center">
  //       <span className="text-white text-xl font-inter tracking-widest animate-pulse">
  //         Loadin...
  //       </span>
  //     </div>
  //   );
  // }
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Change />
              <Wearin />
              <Carousel />
              <Footer />
            </>
          }
        />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<Protect />}>
          <Route path="/details/:id" element={<Details />} />
        </Route>

        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}
export default App;
