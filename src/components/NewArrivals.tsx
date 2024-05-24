
"use client";
import React from 'react'
import { Button } from './ui/button'
import { Productstest } from '@/lib/data'
import Image from 'next/image'
import ReactStars from "react-rating-stars-component";
import { Star } from 'lucide-react';
import Link from 'next/link';


const data = Productstest.slice(0,6);

function stars (num:number){
    const firstExample = {
        size: 22,
        value: Math.floor(num) ,
        edit: false,
        color: "lightgray",
        activeColor: "gold",
        a11y: true,
        isHalf: true,
        filledIcon : <Star  />,
      };
    
    return <ReactStars {...firstExample} />
}

export default function NewArrivals() {
  return (
    <div className='py-8'>
        <div className="container">
            <h1 className='t text-main text-center  mt-5 font-Volkhov text-4xl'>New Arrivals</h1>
            <p className='p text-prag my-5 max-w-[614px] leading-[1.6] text-center mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin</p>

            <div className='filters flex justify-evenly items-center w-full py-4 '>
                <Button>Men Fasion</Button>
                <Button>Women Fasion</Button>
                <Button>Women Fasion</Button>
                <Button>Men Fasion</Button>
                <Button>Discount Deals</Button>
            </div>

            <div className='hero-products flex justify-between flex-wrap py-12 gap-12'>
                {
                data.map(product => (
                    <Link 
                        href={`products/${product.productsId}`}                              
                        key={product.productsId}
                    >
                        <div 
                            key={product.productsId}
                            className='e w-[340px] rounded-xl p-4 pb-6 shadow-prBox'
                        >
                            <div className='image-cover h-[244px] overflow-hidden rounded-md'>
                                <Image
                                src={product.imageURL}
                                alt={product.name}
                                width={300}
                                height={300}
                                quality={100}
                                // layout='responsive'
                                priority
                                className='w-full object-cover rounded-md'
                                />
                            </div>

                            <div className='flex justify-between mt-2 '>
                                <div className='product-name'>
                                    <h3 className='name text-xl text-main font-medium'>{product.name}</h3>
                                    <p className='text-prag text-xs'>{product.brand}</p>
                                </div>
                                <div className='stars'>
                                    {
                                        stars(product.starFeedback)
                                    }
                                </div>
                            </div>

                            <div className='text-xs my-4'>
                                ({product.reviews}) Customer Reviews
                            </div>

                            <div className='price-amout flex justify-between items-center'>
                                <h3 className='text-2xl font-medium'>${product.price}</h3>
                                <p className='text-[#ff4646] text-xs'>
                                    {product.amount <= 10 ? 
                                    "Almost Sold Out" : 
                                    `${product.amount} piece`
                                    }
                                </p>
                            </div>

                        </div>

                    </Link>
                ))}
            </div>

            <div className="w-full flex justify-center py-5">
                <Link className='' href={"/products"} >
                    <Button className=' py-6 px-16 shadow-mainsh' >View More</Button>
                </Link>
            </div>


        </div>
    </div>
  )
}
