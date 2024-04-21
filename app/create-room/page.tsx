import React from 'react'
import { CreateRoomForm } from './create-room-form'
import {  auth } from "@clerk/nextjs/server";
const createRoompage = () => {
  const {userId}=auth()
  return (
    <div className='container mx-auto flex flex-col gap-1'>
      <h1 className=' text-3xl md:text-4xl lg:text-6xl  w-full  flex justify-center '>Create Room</h1>
      
      <CreateRoomForm />
    </div>
  )
}

export default createRoompage