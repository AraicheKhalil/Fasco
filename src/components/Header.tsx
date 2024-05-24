import React from 'react'
import { links } from '@/lib/data'
import Link from 'next/link'
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="Header h-[91px] z-[100] w-full text-[17px] fixed bg-white">
      <div className="container flex justify-between h-full items-center">
        <div className="logo text-main text-5xl font-Volkhov">FASCO</div>
        <ul className='links flex gap-7'>
          {links.map((link) => (
            <li key={link.name} className='text-main mx-2 transition'>
              <Link className='hover:text-gray-400 ' href={link.route}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className='auth flex gap-3 font-normal'>
          
            <Link  href={"/auth/login"}>
              <Button className='text-[17px]' variant={"ghost"}>
                Login 
              </Button>
            </Link>

            <Link href={"/auth/signup"}>
              <Button className='text-[17px] font-normal shadow-2xl '>
                Sign up 
              </Button>
            </Link>

        </div>
      </div>
    </header>
  );
}
