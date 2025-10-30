import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="flex  gap-2 ">
        <MdOutlineMarkEmailUnread className="" />
        <p>Villa@company.com</p>
      </div>

    </div>
  )
}

export default Header
