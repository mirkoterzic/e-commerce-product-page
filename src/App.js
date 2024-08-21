import { useState } from "react";
import { data } from "./data";
import logo from "./images/logo.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatar from "./images/image-avatar.png";
function Header() {
  return (
    <>
      <header className="flex  items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex  items-center justify-start gap-4">
          <img src={logo}></img>
          <nav>
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
                <MdOutlineShoppingCart />
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
function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <article>
          <img src={mainImage} alt="" className="w-11/12 rounded-2xl" />

          <ul className="flex items-center justify-start gap-5 flex-wrap mt-5">
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
      </section>
    </>
  );
}

export default App;
