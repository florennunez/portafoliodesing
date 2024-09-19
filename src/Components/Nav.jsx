import React, { useState } from 'react'
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import {CiMenuKebab} from 'react-icons/ci';
import imgUrl from '../assets/logo.jpg'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  }
  const content = <>
  <div className="lg-hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
    <ul className="text-center text-xl p-20">
      <Link spy={true} smooth={true} to="Inicio">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Inicio</li>
        </Link>
        <Link spy={true} smooth={true} to="Sobremi">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Sobre mi</li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Proyectos</li>
        </Link>
    </ul>
  </div>
  </>
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800 items-center">
      <div className="flex items-center flex-1">
      <img className='mix-blend-multiply brightness-110' height={80} width={80} src={imgUrl} alt="logotipo" />
      </div>
      <div className="lg:flex md:flex lg:flex-1 items center just-end font-normal hidden"> 
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[18px]">
          <Link spy={true} smooth={true} to="Inicio">
          <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Inicio</li>
          </Link>
        
          <Link spy={true} smooth={true} to="Sobremi">
          <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Sobre mi</li>
          </Link>
        
          <Link spy={true} smooth={true} to="Services">
          <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>
          </Link>
        
          <Link spy={true} smooth={true} to="Projects">
          <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Proyectos</li>
          </Link>
        </ul>
      </div>
      </div>
      <div>
        {click && content}
      </div>
      <button className="block sm:hidden transtion" onClick={handleClick}>
        {click? <FaTimes/> : <CiMenuKebab/>} 
      </button>
      </div>
    </nav>
  );
};

export default Nav;