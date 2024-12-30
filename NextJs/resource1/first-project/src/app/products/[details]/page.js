import React from 'react'

const page = async({params,searchParams}) => {
    const popo=await params;
    console.log(popo)
  return (
    <div>
      This is detail page.
    </div>
  )
}

export default page
