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

                <div className=" border border-none flex ml-[70px] ">
                    
                    <button className='font-semibold border border-solid mt-[25px] text-xl mr-[100px] pr-[30px]  py-[5px] flex  items-center gap-[20px] bg-green-600 hover:text-rose-700 transition'  >
                       < MdContactEmergency className=' m-[4px] text-blue-900  text-2xl'/> 
                        Visit Us
                     </button>
                </div>

            
        </div>
    )
}

export default Mainheader
