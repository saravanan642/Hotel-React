import img4 from "../Assests/ban-rak-thai-mae-hong-son-thailand.jpg";

const Property = () => {
  return (
  <div className="relative py-[3%] px-[10px] border border-none  rounded-[20px] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="h-[500px] bg-cover bg-center brightness-50  rounded-[20px]"
        style={{ backgroundImage: `url(${img4})` }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute top-[8%] left-0 mr-[130px] ml-[10px] w-full h-[500px] bg-black/35"></div>
      <div  className="  absolute  top-[39%] left-[38%] font-bold  text-7xl text-gray-200  ">
        <h1 className=" text-gray-200">Property</h1>
        <button className=" text-3xl absoute ml-[20%] mt-[30px] border border-border-solid p-[8px]  hover:bg-slate-950 transition-colors duration-7500"> Explore Now</button>
      </div>

    </div>
  );
};

export default Property;
