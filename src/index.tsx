import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi'

interface MenuItem {
    title: string;
    path: string;
}

interface Props {
    menuItems: MenuItem[];
}

const HamburgerMenu: React.FC<Props> = ({ menuItems, className }) => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleMenu = () => {
      setIsActive(!isActive);
    };
  
    useEffect(() => {
      const handleEscKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isActive) {
          setIsActive(false);
        }
      };
  
      if (isActive) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
  
      document.addEventListener("keydown", handleEscKeyPress);
      return () => document.removeEventListener("keydown", handleEscKeyPress);
    }, [isActive]);
  
    return (
      <div className={`relative ${className}`}>
        <button aria-label="Open Menu" onClick={toggleMenu} className="btn-hamburguer hidden md:flex">
          <GiHamburgerMenu size={40} className="text-white" />
        </button>
  
        {isActive && (
          <div className="z-10 fixed inset-0 transition-opacity">
            <div onClick={toggleMenu} className="absolute inset-0 bg-black opacity-50" tabIndex={0}></div>
          </div>
        )}
  
        <aside
          className={`transform bg-gradient-to-b from-orange-400 to-orange-900 dark:from-red-700 dark:to-red-950 top-0 left-0 w-64 text-white font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            isActive ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {menuItems.map(({ title, path }, index) => (
            <Link href={path} key={index}>
              <span className="flex items-center p-4 hover:bg-orange-500 dark:hover:bg-red-600 hover:text-black">
                <span className="border-b-4">{title}</span>
              </span>
            </Link>
          ))}
        </aside>
      </div>
    );
  };
  
  export default HamburgerMenu;