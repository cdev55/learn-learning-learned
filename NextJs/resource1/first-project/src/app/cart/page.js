"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const pathName=usePathname();
    console.log({pathName})
    const searchParams=useSearchParams();
    console.log({searchParams:searchParams.get('baba')})
  return (
    <div>
      This is cart page.
    </div>
  )
}

export default page
