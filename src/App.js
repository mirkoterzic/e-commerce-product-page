import { useState } from "react";
import { data } from "./data";
import logo from "./images/logo.svg";
import close from "./images/icon-close.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatar from "./images/image-avatar.png";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Header() {
  return (
    <>
      <header className="flex  items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex  items-center justify-start gap-4">
          <img src={logo}></img>
          <nav className="hidden">
            <ul className="flex  items-center justify-start gap-4">
              <li>Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex  items-center justify-start gap-4">
            <li>
              <button>
                <MdOutlineShoppingCart className=" text-2xl text-slate-400" />
              </button>
            </li>
            <li>
              <img src={avatar} alt="avatar image" className="w-12" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

function Lightbox({
  products,
  slideIndex,
  nextSlide,
  previousSlide,
  setShowLightbox,
}) {
  return (
    <>
      <article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50 ">
        <button onClick={() => setShowLightbox(false)}>
          <img
            src={close}
            alt=""
            className="w-5 lg:w-10 absolute top-10 right-10"
          />
        </button>
        <div className="flex items-center justify-center h-screen">
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt=""
                className=" big-image lg:w-full  lg:rounded-2xl"
              />
              <ul>
                <li>
                  <button
                    onClick={previousSlide}
                    className=" bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className=" bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2 "
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmout] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);

  const { mainImage } = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };
  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const handleMinus = () => {
    setAmout(amount - 1);
    if (amount <= 0) setAmout(0);
  };
  return (
    <>
      <Header />
      {showLightbox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20 ">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={item.id}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src={item.mainImage}
                  alt=""
                  className="w-full lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />
                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={previousSlide}
                      className=" bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className=" bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2 "
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt=""
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.thumbnail} alt="" className="w-20 rounded-xl " />
              </li>
            ))}
          </ul>
        </article>
        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            Sneaker Company
          </h2>
          <h1 className=" text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mb-10  leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2 ">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400  tracking-wide text-sm font-bold inline-block rounded shadow ">
                50%
              </li>
            </ul>
            <p className="text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>
          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className=" flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1 ">
              <li onClick={handleMinus} className="cursor-pointer">
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmout(amount + 1)}
                className="cursor-pointer"
              >
                <img src={plus} alt="" />
              </li>
            </ul>
            <div className="lg:flex-1">
              <button className="flex items-center justify-center gap-4 bg-orange-500  py-2 px4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200 ">
                <MdOutlineShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
