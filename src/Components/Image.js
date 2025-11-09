import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images import
import imge1 from "../Assests/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey (1).jpg";
import image2 from "../Assests/Mainimage.jpg";
import image3 from "../Assests/sunset.jpg";

const Image = () => {

  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 900,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  return (
    <div className="w-full  overflow-hidden max-w-[1550px] mx-auto mt-[35px] rounded-[20px] border border-none">
      <Slider {...settings}>
        <div className=" relative">
          <img src={image3} alt="img3" className="w-full h-[640px] object-cover" />
          <div className=" absolute top-[120px]   left-[60px] font- font-bold  text-5xl " >
            <p className=" text-orange-700 m-[10px] text-shadow"
              style={{ textShadow: "1px 3px 5px black " }}>Munnar, Karala</p>
            <p className=" text-white m-[10px]">Your perfect villa awaits.</p></div>
        </div>
        <div className=" relative">
        
          <img src={image2} alt="img2" className="w-full h-[640px] object-cover" />
        </div>
        <img src={imge1} alt="img1" className="w-full h-[640px] object-cover " />
      </Slider>
    </div>
  );
};

export default Image;
