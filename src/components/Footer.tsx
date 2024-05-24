

import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-8'>
        <div className="container flex justify-between items-center flex-wrap">
            <h3 className=' font-Volkhov text-4xl cursor-pointer'>FASCO</h3>
            <p className='t text-prag text-sm -mr-28'>Copyright © 2022 Xpro . All Rights Reseved.</p>   
            <div className='flex gap-6 text-xs'>
                <Link href="/" >Support Center</Link>
                <Link href="/" >Contact</Link>
                <Link href="/" >Careers</Link>
                <Link href="/" >FAQs</Link>
            </div>  
        </div>
    </div>
  )
}
