import React from 'react'

export default function ContactInfo({ icon, text, description ,color}) {
  return (
    <div className={`flex p-5 w-[250px] border border-gray-300 hover:border-b  hover:border-${color} rounded transition-all duration-300 flex-col items-center gap-2`}>
      {icon}
      <b className='text-bold text-xl text-black'>{text}</b>
      <p className='text-gray text-center'>{description}</p>
    </div>
  )
}
