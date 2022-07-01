import React, { useEffect } from "react";
import { useRef } from "react";
import Image from 'next/image';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

export default function SimpleSlider(props) {
  let imgHost = "http://localhost:1337"
  let [imageList,setImgList] = React.useState(props.imgData.map(x => {
    return  <Image ref={imageEl} className={'h-full pointer-events-auto  bg-transparent relative z-0'} key ={x.id} src={x.attributes.url} width={x.attributes.width} height={x.attributes.height}  /> 
   
   }))

 

   
  let matchingIdArray = imageList.findIndex(element => {
    return element.key === props.id 
  })

  const sectionEl = useRef(null);
  const imageEl = useRef(0)

  let [sectionWidth,setSectionWidth] = React.useState({})
  let [windowWidth,setWindowWidth] = React.useState({})
  let [imageWidth,setImageWidth] = React.useState({})
  let navWidth = windowWidth - sectionWidth
  console.log(navWidth);
  useEffect(() => {
    setSectionWidth(sectionEl.current.offsetWidth)
    
  },[])

  useEffect(() => {
    setWindowWidth(window.innerWidth)

  })
  
console.log(windowWidth)
console.log(sectionWidth)
let half = sectionWidth / 2
console.log(half);
let [index,setIndex] = React.useState(matchingIdArray ? matchingIdArray : 0)



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

  let next = () => {    
  return   setIndex(prev => 
      {
      if(prev <props.imgData.length -1 )       {
       return   prev +1
        
        }
        else {

      return 0
        }
    } )
   
  }

  let previous = () => {
    return setIndex(prev =>
       {
      if (prev > 0) {
        return prev -1
      }
      else {
        return props.imgData.length-1
      }
    })
  }
 
   let [enterLeft,setEnterLeft] = React.useState(false);
   let [enterRight,setEnterRight] = React.useState(false)
   let [leftPosition,setLeftPosition] = React.useState([])

  let halfClick = leftPosition.x - navWidth

  return (
   
    
    <section  ref={sectionEl} className=" max-h-80 flex shrink max-w-full ">
    
     

  <div  onMouseMove ={(e)=> {setLeftPosition({x:e.clientX,y:e.clientY});console.log(leftPosition)}} className=" w-3/4  h-5/6 flex justify-center basis-11/12 my-5    " 
  onClick={halfClick < half ? previous : next}>
  <div id="slider-layout"  style={{width:sectionWidth}} className="w-3/4 h-full h-max-full z-99 absolute grid grid-cols-2">
      <div id ="left"  style={{cursor:"none"}}onMouseEnter={()=> {setEnterLeft(true)} } onMouseLeave={()=> {setEnterLeft(false)} } onMouseMove ={(e)=> {setLeftPosition({x:e.clientX,y:e.clientY});console.log(leftPosition)}}
      className="  h-full   z-99 relative  "></div>
        { enterLeft && 
          <AiOutlineArrowLeft 
          style={{position:"absolute",top:leftPosition.y+ 'px', left:leftPosition.x-navWidth + 'px' ,zIndex:'99'}}
          
          className=" font-medium text-lg text-slate-900  " onClick={previous}/> }

           { enterRight && 
          <AiOutlineArrowRight
          style={{position:"absolute",top:leftPosition.y+ 'px', left:leftPosition.x-navWidth + 'px' ,zIndex:'99'}}
          
          className=" font-medium text-lg text-slate-900 " onClick={next}/> }
    


     
      <div id="right "
      style={{cursor:"none"}}
      onMouseEnter={()=> {setEnterRight(true)} }
       onMouseLeave={()=> {setEnterRight(false)} } 
       onMouseMove ={(e)=> {setLeftPosition({x:e.clientX,y:e.clientY});console.log(leftPosition)}}
       className="  h-screen z-0 relative  "></div>
       </div>
     
 
    
  {imageList[index]}
 
  
  </div>
  
     
    </section>
  )
}