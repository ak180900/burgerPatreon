"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <nav className='bg-blue-950 text-white flex justify-between px-4 h-16 items-center'>
      <div className="logo"><Link href={"/"}>GetMeABurger</Link></div>
      <ul className='flex justify-around gap-4'>


        {session && <Link className='hover:font-bold' href={"/signup"}><li>Signup</li></Link>}
        {!session && <Link className='hover:font-bold' href={"/login"}><button >Login</button></Link>}


      </ul>

    </nav>
  )
}

export default Navbar
