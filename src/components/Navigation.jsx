import React from "react";
import basket from '../assets/basket.webp';
import logo from '../assets/logo.png';
import '../index.css';

const Navigation = () => {
    return (
            <nav className="absolute  z-10 w-full h-auto flex bg-glass p-4"> 
                <ul>
                    <img className="h-14" src={logo} alt="logo" />
                </ul>

                <ul className="flex gap-6 text-center ">
                    <li className="bg-slate-200 rounded-full py-2 px-5 text-center m-0 p-0 opacity-80">Menu</li> 
                    <li className="bg-slate-200 rounded-full py-2 px-5 text-center m-0 p-0 opacity-80">About</li> 
                    <li className="bg-slate-200 rounded-full py-2 px-5 text-center m-0 p-0 opacity-80">Contact</li>
                    <li className="bg-orange-400 rounded-full py-2 px-6 font-bold  text-center m-0 p-0 opacity-80">Order Here . .</li>
                    <li className=" " ><img src={basket} alt="add to cart" /></li> 
                </ul>
            </nav>
    )
}

export default Navigation;
