import { MdContactEmergency } from "react-icons/md";

const Mainheader = () => {
    return (
        <div className='  border border-none flex justify-between'>
            <div>
                <p className=' font-semibold border border-none  mt-[30px] text-3xl ml-[120px] '>Villa</p>
                </div>

                <div className='flex gap-[70px] font-semibold border border-none mt-[30px] text-xl ml-[20%]'>
                    <a href='/'>Home</a>
                    <a href='/'>Properties</a>
                    <a href='/'>Property Deatils</a>
                    <a href='/'>About</a>
                    
                </div>

                <div className=" border border-none flex ">
                    
                    <button className='font-semibold border border-solid mt-[30px] text-xl mr-[100px] pr-[30px] py-[5px] flex  items-center gap-[20px]' >
                       < MdContactEmergency className=' m-[4px]'/> 
                        Visit Us
                        </button>
                </div>

            
        </div>
    )
}

export default Mainheader
