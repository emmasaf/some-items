import React from 'react'
import logo from '.././images/logo.jpg'

export default function Logo({ size = '50px' }) {
  return (
    <div className="flex w-max items-center gap-2 justify-between">
      <img src={logo} width={size} alt="logo" />
      <span className='text-2xl font-mono font-bold text-gray-800'>GEKO</span>
    </div>
  )
}
