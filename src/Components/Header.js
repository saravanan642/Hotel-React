import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="flex  gap-[20px] text-xl m-[15px] ">
        <MdOutlineMarkEmailUnread className=" mt-[5px] text-sky-600" />
        <p className=' font-light'>Villa@company.com</p>
      </div> 
      <hr></hr>

    </div>
  )
}

export default Header
