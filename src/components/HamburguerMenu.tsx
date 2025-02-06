/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

interface MenuItem {
    title: string;
    path: string;
}

interface NavProps {
  MenuItems: MenuItem[];
  asideBgColor?: string;
  asideTextColor?: string;
  asideTextBgColor?: string;
  asideTextHoverColor?: string;
  asideBorderTextColor?: string;
}

export default function HamburguerMenu({ MenuItems, asideBgColor = "bg-blue-700", asideTextColor = "text-white", 
  asideBorderTextColor = "border-red-500", 
  asideTextHoverColor = "text-red-500", }: NavProps) {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => setIsActive(!isActive);

    useEffect(() => {
        const handleEscKeyPress = (e: any) => {
            if (e.keyCode === 27 && isActive) {
                setIsActive(false);
            }
        };

        if (isActive) {
            document.body.style.setProperty("overflow", "hidden");
        }else {
            document.body.style.setProperty("overflow", "auto");
        }

        document.addEventListener("keydown", handleEscKeyPress);
        
        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isActive]);

  return (
    <nav className="">
        <ul className={`hidden sm:flex  text-xl items-center justify-center gap-8 ${asideTextColor} font-semibold`}>
           {MenuItems.map(({ title, path }, index) => (
            <a href={path} key={index}>
                <li>{title}</li>
            </a>
           ))}
            </ul>
            <button aria-label="Open Menu" onClick={toggleMenu} className="btn-hamburguer flex sm:hidden">
                <GiHamburgerMenu size={60} style={{ color: 'black' }} />
            </button>

{isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex={0}
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 ${asideTextColor} ${asideBgColor}
         bg-opacity-50 font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-[900]
          isActive ? "translate-x-0" : "-translate-x-full"}`} > 
         {MenuItems.map(({ title, path }, index) => (
    <a href={path} key={index}>
        <span className={`flex items-center p-4 hover:bg-opacity-80 hover:${asideTextHoverColor}`}>
          <span className={`border-b-4 ${asideBorderTextColor}`}>{title}</span>
        </span>
    </a>
  ))}
      </aside>
    </nav>
  )
}
