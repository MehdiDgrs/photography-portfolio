import React from "react";
import Slider from "react-slick";
import Image from 'next/image';


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:true,
    autoplay:true,
    autoplaySpeed:4000,
    className:'w-full h-full',
    fade:true,
    infinite:true,
    swipe:true,
    arrows:false,
    dots:false,

  };
  return (
    <Slider {...settings} className="h-full">
      <div className="h-screen ">
        <Image src="/2020-05-05.png" layout="fill" />
      </div>
      <div className="h-screen ">
        <Image src="/2020-05-05.png" layout="fill" />
      </div>
      <div className="h-screen ">
        <Image src="/portrait-stock.webp" layout="fill" />
      </div>
      <div>
        
      </div>
      <div>
       
      </div>
      <div>
        
      </div>
    </Slider>
  );
}