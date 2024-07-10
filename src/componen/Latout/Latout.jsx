import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'


export default function Latout() {
  return (
    <div>
<Navbar/>





<Outlet/>







        {/* <h1 className='bg-dark fs-3 text-white p-3 position-fixed bottom-0 end-0 start-0'>footer</h1> */}
    </div>
  )
}
