import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TiWavesOutline } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <div >
      <div className=' flex gap-[15px] border border-none '>
        <div className="flex  gap-[20px] text-l m-[15px] ml-[5%]">
          <MdOutlineMarkEmailUnread className=" mt-[5px] text-sky-600" />
          <p className=' font-light'>Villa@company.com</p>
        </div>


        <div className="  flex  gap-[20px] text-l m-[15px] ml-[5%]">
          <TiWavesOutline className=" mt-[5px] text-sky-600" />
          <p className=' font-light'> Sunny Isles Beach, FL 33160</p>
        </div>

        <div className='mt-[10px] flex gap-[60px]  text-2xl   ml-[35%] justify-evenly' >

          <div>
            <p className='  rounded-full border  border-solid pl-[5px] pt-[3.8px] w-[35px] h-[35px] bg-slate-300 ' ><FaFacebook /></p>


          </div>

          <div>
            <p className='  rounded-full border  border-solid pl-[5px] pt-[3.8px] w-[35px] h-[35px] bg-slate-300 '><FaLinkedin /></p>

          
          </div>

          <div>
            <p className='  rounded-full border  border-solid pl-[5px] pt-[3.8px] w-[35px] h-[35px]  bg-slate-300'> <FaInstagram  /></p>


          </div>
          <div>
            <p className='  rounded-full border  border-solid pl-[5px] pt-[3.8px] w-[35px] h-[35px]  bg-slate-300 '> <FaTwitter /></p>

           
          </div>
        </div>
      </div>
      <hr></hr>

    </div>
  )
}

export default Header
