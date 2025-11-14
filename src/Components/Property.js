import img4 from "../Assests/ban-rak-thai-mae-hong-son-thailand.jpg";

const Property = () => {
  return (
    <div className="relative py-[3%]">
      
      {/* Background Image */}
      <div
        className="h-[500px] bg-cover bg-center brightness-50 "
        style={{ backgroundImage: `url(${img4})` }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute top-[8%] left-0 w-full h-[500px] bg-black/35"></div>

    </div>
  );
};

export default Property;
