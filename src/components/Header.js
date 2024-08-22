import { useState } from "react";
import logo from "../images/logo.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex  items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex  items-center justify-start gap-4">
          <ul className="flex  items-center justify-start gap-4">
            {!isOpen && (
              <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img className="cursor-pointer" src={menu} alt="" />
              </li>
            )}

            {isOpen && (
              <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                <img className="cursor-pointer w-6" src={close} alt="" />
              </li>
            )}
            <li>
              <img src={logo}></img>
            </li>
          </ul>

          <nav className={isOpen && "open"}>
            <ul>
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
