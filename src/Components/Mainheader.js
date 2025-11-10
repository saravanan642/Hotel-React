import { MdContactEmergency } from "react-icons/md";
import { Link ,useNavigate} from "react-router-dom";


const Mainheader = () => {
    const navigate = useNavigate()

    return (
        <div className='  border border-none flex justify-between'>
            <div>
                <p className=' font-semibold border border-none  mt-[30px] text-3xl ml-[120px] '>Villa</p>
            </div>
            <div className='flex gap-[70px] font-semibold border-none mt-[30px] text-xl ml-[20%]'>
                <a  href="/"className='hover:text-red-600 transition-colors duration-300'>Home</a>
                <Link to={"/about"}  className="hover:text-red-600 transition-colors duration-300">Property</Link>

                <a href='/' className='hover:text-red-600 transition-colors duration-300' onClick={ () =>  navigate ("/deatils")}>Property Details</a>
                <a href='/' className='hover:text-red-600 transition-colors duration-300'>About</a>
            </div>
            <div className=" border border-none flex ml-[70px] ">

                <button className='font-semibold border border-solid mt-[25px] text-xl mr-[100px] pr-[30px]  py-[5px] flex  items-center gap-[20px] bg-green-600 hover:text-rose-700 transition'  >
                    < MdContactEmergency className=' m-[4px] text-blue-900  text-2xl' />
                    Visit Us
                </button>
            </div>


        </div>
    )
}

export default Mainheader
