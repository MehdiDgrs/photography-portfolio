
import Image from 'next/image'


import React, { useEffect } from "react";
import GalleryLayout from '../components/GalleryLayout'

import SimpleSlider from '../components/Slider';

import Head from 'next/head'



export default function Home(props) {

  

 let [img,setImg] = React.useState(props.data);
 let [toggle,setToggle] = React.useState(true)
 let [width,setScreenWidth] = React.useState([]);
 let [currentImgId,setCurrentImgId] = React.useState([])
 let hide = (id) => { 
   
  setToggle(!toggle)
 
  setCurrentImgId(id);
  
}
useEffect(()=> {
 
  let screenWidth= window.screen.width;
  setScreenWidth(screenWidth);
  
},[])
 
  let imgList =   img.map(image => {
      return  <div key={image.id} onClick={()=> hide(image.id)} className={`${width <800 && 'my-10'} hover:opacity-60 cursor-pointer z-1`}><Image src={image.urls.raw} width={image.width} height={image.height} key={image.id}/></div>
    })
    
 



  
  return (
    <>
    <Head>
    <title>Mehdi Photographe Portfolio</title>
    <meta name="description" content="Portfolio photographe haut de france Lille " />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  {/*<div className="animate-bounce absolute z-10 m-auto">
   <BsArrowDownCircle/>
   </div>
   */}
   
    
     { toggle ? <GalleryLayout imgList ={imgList}/>  : <SimpleSlider id={currentImgId} imgData={img}/>}
         
        
    
     
     </>

   
     
    
  )
}
export async function getServerSideProps() {
  const res = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_ACCESS_TOKEN}`) //dont forget to hide env
  const data = await res.json();
  

  return {
    props: {data}, // will be passed to the page component as props
  }
}

