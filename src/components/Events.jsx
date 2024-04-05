import React from 'react'
import { MdOutlinePlace } from 'react-icons/md'
import { TbClockHour3 } from 'react-icons/tb'

export default function Events({
  day,
  month,
  title,
  hour,
  place,
  description,
  image,
}) {
  return (
    <section className=" border-t-2  py-[30px] border-gray-300 flex flex-col gap-5 md:flex-row  md:justify-between md:items-center">
      <div className="flex flex-col gap-1">
        <span className="text-primary font-bold text-6xl leading-60">
          {day}
        </span>
        <span className="text-gray leading-[25px]">{month}</span>
      </div>
      <div className="gap-2 flex flex-col">
        <h5 className="text-2xl font-bold hover:text-primary transition-colors duration-300 cursor-pointer ">{title}</h5>
        <div className="flex gap-1 items-center">
          <TbClockHour3 className="text-primary" /> <span>{hour}</span>
          <MdOutlinePlace className="text-primary" /> <span>{place}</span>
        </div>
        <p className="  ">{description}</p>
      </div>
      <img alt="image" src={image} className="rounded-md w-full md:w-[270px]" />
    </section>
  )
}
