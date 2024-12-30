import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
    const userDetails=null;
    if(userDetails===null){
        redirect('cart?baba=abc')
    }
  return (
    <div>
      Profile page
    </div>
  )
}

export default page
