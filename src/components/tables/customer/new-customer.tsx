import React, { useState } from 'react'
import { X } from 'lucide-react'

const NewCustomer = ({ isOpen, handleToggle }: any) => {
  return (
    <div className='z-10'>
      <div className={`fixed top-0 w-full bg-background/70 backdrop-blur-sm h-full ${isOpen ? 'translate-x-0' : 'hidden'
        }`}></div>
      <div
        className={`fixed top-0 left-0 md:left-[300px] bg-background border-r p-4 h-full w-full md:w-[40%] transition-transform ease-in-out duration-500 transform ${isOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'
          }`}
      >
        <X
          className='absolute right-6 top-20 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 h-4 w-4 hover:ring-2 hover:ring-ring hover:ring-offset-2'
          onClick={handleToggle}
        />
        <div className='px-8 pt-14 pb-8'>
          <p className='mt-10 text-2xl font-semibold'>Add a New Customer</p>
          <p className='mt-5 text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, blanditiis, reiciendis explicabo neque
            maxime impedit laudantium.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewCustomer
