import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-500 placeholder-gray-500 flex justify-between text-lg  font-bold h-16 items-center p-5  '>
       
     
  <Link href="/">Next.js</Link>
        <div className='gap-x-10 flex' > 
        <Link href="/about">About page</Link>
        <Link href="/contact">Contact page</Link>
        <Link href="/price">Price</Link>
        <Link href="/coureses">coureses </Link>
      </div>
    </div>
  )
}

export default Navbar
