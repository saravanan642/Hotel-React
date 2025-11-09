import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images import
import image1 from "../Assests/sunset.jpg"
import image2 from "../Assests/beautiful-natural-landscape.jpg";
import image3 from "../Assests/white-bengal-tiger-nature.jpg";

const Image = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    // 
    <div className="w-full  overflow-hidden max-w-[1550px] mx-auto mt-[35px] rounded-[20px] border border-none">
      <Slider {...settings}>
        { <div className=" relative">
          <img src={image1} alt="img3" className="w-full h-[640px] object-cover" />
          <div className=" absolute top-[120px]   left-[60px] font- font-bold  text-5xl " >
            <p className=" text-orange-700 m-[10px] "
              style={{ textShadow: "1px 3px 5px black " }}>Munnar, Karala</p>
            <p className=" text-white m-[10px]"
            style={{ textShadow: "8px 5px 5px black " }}>Your perfect villa awaits.</p></div>
        </div> }
        {/*  */}

        { <div className=" relative">
          <img src={image2} alt="img2" className="w-full h-[640px] object-cover" />
          <div className="absolute top-[150px]   left-[60px] font- font-bold  text-5xl">
            <p className=" text-white m-[20px]"
              style={{ textShadow: "8px 5px 5px black " }} >Your perfect villa awaits,</p>
            <p className=" text-black m-[20px]"
              style={{ textShadow: "1px 1px 5px white " }} >where the hills whisper peace.</p>
          </div>
        </div> }
        {/*  */}

        <div className="relative">
          <img src={image3} alt="img1" className="w-full h-[640px] object-cover " />
          <div className="absolute top-[180px] left-[55%] font- font-semibold text-5xl">
            <p className="text-white drop-shadow-lg m-[20px]"
            style={{textShadow: "1px 1px 5px black"}}>Step into the wild,</p>
            <p  className="text-yellow-400 m-[20px]" 
            style={{textShadow: "1px 1px 5px black"}}>discover the untamed world.</p>
          </div>
      {/*  */}

        </div>



      </Slider>
    </div>
  );
};

export default Image;
