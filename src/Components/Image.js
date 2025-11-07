import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// images import
import imge1 from "../Assests/image.jpj.png";
import image2 from "../Assests/Mainimage.jpg";
import image3 from "../Assests/sunset.jpg";

const Image = () => {
  // Slider settings
  const settings = {
    dots: true,           // கீழே dots வரும்
    infinite: true,       // loop ஆகும்
    speed: 500,           // transition speed
    slidesToShow: 1,      // ஒரே படம் மட்டும்
    slidesToScroll: 1,    // ஒரு படம் மாறும்
    autoplay: true,       // auto slide
    autoplaySpeed: 3000,  // 2 second-க்கு ஒருமுறை மாறும்
  };

  return (
    <div className="w-full  overflow-hidden max-w-[1550px] mx-auto mt-[35px] rounded-[20px] border border-none">
      <Slider {...settings}>
        <img src={imge1} alt="img1" className="w-full h-[640px] object-cover" />
        <img src={image2} alt="img2" className="w-full h-[640px] object-cover" />
        <img src={image3} alt="img3" className="w-full h-[640px] object-cover" />
      </Slider>
    </div>
  );
};

export default Image;
