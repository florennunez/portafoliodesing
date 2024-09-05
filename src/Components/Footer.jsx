import React from 'react'
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillBehanceCircle} from 'react-icons/ai';
import imgUrl from '../assets/logo.jpg'
const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-4 py-20 text-center'>
      <div className="container mx-auto flex flex-col items-center md:items-start md:grid md:grid-cols-3 gap-4">
        <div className='mb-4 md:mb-0'>
        <img className='mix-blend-multiply brightness-110' height={180} width={180} src={imgUrl} alt="logotipo" />
          <p className='text-[16px] my-4'></p>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: Florencianunnez20@gmail.com</p>
          <p className='text-[16px] my-4'>Celular: 1137709546</p>
        </div>
        <div className='mb-4 md:mb-0 flex'>
        <div className='flex-row  space-x-4 w-full'>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Seguime</h2>
        <div className="flex gap-5 !ml-0 justify-center">
          <a className="text-white hover:text-fuchsia-800 transition duration-150 ease-in-out" href="">
            <FaGithub/>
          </a>
          <a className="text-white hover:text-fuchsia-800 transition duration-150 ease-in-out" href="">
            <FaLinkedinIn/>
          </a>
          <a className="text-white hover:text-fuchsia-800 transition duration-150 ease-in-out" href="">
            <AiFillBehanceCircle/>
          </a>
        </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer