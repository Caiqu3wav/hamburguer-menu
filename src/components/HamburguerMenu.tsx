import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

interface MenuItem {
    title: string;
    path: string;
}

interface Props {
    menuItems: MenuItem[];
    buttonColor?: string;
    colorFrom?: string; 
    colorTo?: string;
}

export default function HamburgerMenu({
    menuItems,
    buttonColor = "white",
    colorFrom = "blue-400",
    colorTo = "blue-900", 
  }: Props) {
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

    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("keydown", handleEscKeyPress);
    return () => document.removeEventListener("keydown", handleEscKeyPress);
  }, [isActive]);

  return (
    <>
      {/* Botão do Menu */}
      <button
        aria-label="Open Menu"
        onClick={toggleMenu}
        className={`btn-hamburguer hidden midtw:flex`}
      >
        <GiHamburgerMenu size={60} className={`text-${buttonColor}`} />
      </button>

      {/* Overlay */}
      {isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex={0}
          ></div>
        </div>
      )}

      {/* Menu Lateral */}
      <aside
        className={`transform bg-gradient-to-b from-${colorFrom} to-${colorTo} 
        top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 text-white font-extrabold 
        fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {menuItems.map(({ title, path }, index) => (
          <a href={path} key={index}>
            <span className="flex items-center p-4 hover:bg-orange-500 dark:hover:bg-red-600 hover:text-black">
              <span className="border-b-4">{title}</span>
            </span>
          </a>
        ))}
      </aside>
    </>
  );
}