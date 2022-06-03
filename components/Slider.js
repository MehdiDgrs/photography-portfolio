import React, { useEffect } from "react";

import Image from 'next/image';

export default function SimpleSlider(props) {

 

   
  let matchingIdArray = props.imgData.findIndex(element => {
    return element.id === props.id 
  })


let [index,setIndex] = React.useState(matchingIdArray ? matchingIdArray : 0)
console.log(index)

  let next = () => {    
  return   setIndex(prev => 
      {
      if(prev <props.imgData.length -1 )       {
       return   prev +1
        
        }
        else {

       setIndex(0)
        }
    } )
   
  }
 
 


  return (
   
    
    <section className="w-full h-screen mx-auto">
  
  <div onClick={next}  className=" w-3/4 mx-auto h-screen  ">
  
  <Image src={props.imgData[index].urls.raw} width={props.imgData[index].width} height={props.imgData[index].height} quality={100}  /> 
  </div>

      
    </section>
  )
}