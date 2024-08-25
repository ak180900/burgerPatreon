"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Username = ({params}) => {
    const { data: session } = useSession();
    const router = useRouter();
    if(!session) 
    {
        router.push('/');
    }

  return (
    <div>
      {session && <div>Welcome {params.username} </div>}
      
    </div>
  )
}

export default Username
