import React from 'react'

const page =async ({params}) => {
    const s=await params;
    console.log(s)
  return (
    <div>
      This is product review page.
    </div>
  )
}

export default page
