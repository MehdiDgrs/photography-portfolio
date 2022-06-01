import React from "react";
import Slider from "react-slick";
import Image from 'next/image';


export default function SimpleSlider(props) {
  console.log(props.id)
  console.log(props.imgData)

  let filteredArray = props.imgData.filter(imageWithId => {
   return  imageWithId.id === props.id 

  })
  console.log(filteredArray)

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:true,
    autoplay:false,
    autoplaySpeed:4000,
    className:'w-full h-4/5',
    fade:true,
    infinite:true,
    swipe:true,
    arrows:false,
    dots:false,
    centerMode:true,
    adaptiveHeight:true,

  };
  return (
    <Slider {...settings}>
     
    
      <div style={{ position: 'relative'}} className="h-4/5">
      
        <Image src={filteredArray[0].urls.raw} width={props.imgData[0].width} height={props.imgData[0].height}layout='raw'
   /> 
      </div>
      
      <div>
       
      </div>
      <div>
        
      </div>
    </Slider>
  );
}