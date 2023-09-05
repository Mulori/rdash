'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function ButtonLogout(){    
  const router = useRouter();

  async function Logout() {
    await signOut({
      redirect: false
    })

    router.replace('/')
  }

  return(
    <a className="nav-link" onClick={Logout} >Sair</a>
  )
}