import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TiWavesOutline } from "react-icons/ti";

const Header = () => {
  return (
    <div>
      <div className=' flex gap-[15px] border border-none '>
        <div className="flex  gap-[20px] text-xl m-[15px] ml-[5%]">
          <MdOutlineMarkEmailUnread className=" mt-[5px] text-sky-600" />
          <p className=' font-light'>Villa@company.com</p>
        </div>


        <div className=" flex  gap-[20px] text-xl m-[15px] ml-[5%]">
          <TiWavesOutline className=" mt-[5px] text-sky-600" />
          <p className=' font-light'> Sunny Isles Beach, FL 33160</p>
        </div>
      </div>
      <hr></hr>

    </div>
  )
}

export default Header
