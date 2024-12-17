import Link from 'next/link';
import React from 'react'
import { LuFilePlus2 } from "react-icons/lu";


const Panel = () => {
  return (
    <div>
      <Link href="/cv" className=' flex gap-x-2 items-center justify-center rounded-3xl bg-normal px-5 py-3 text-white font-medium hover:bg-hover transition-colors delay-100'>
      <LuFilePlus2/>
      <span>Oluştur</span>
      
      </Link>
    </div>
  )
}

export default Panel