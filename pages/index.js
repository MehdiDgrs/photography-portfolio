
import Image from 'next/image'


import React, { useEffect } from "react";
import GalleryLayout from '../components/GalleryLayout'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import SimpleSlider from '../components/Slider';

import Head from 'next/head'



export default function Home(props) {


 let [img,setImg] = React.useState(props.photos.uploadFiles.data);
 let [toggle,setToggle] = React.useState(true)
 let [width,setScreenWidth] = React.useState([]);
 let [currentImgId,setCurrentImgId] = React.useState([])

 useEffect(()=> {
 
  let screenWidth= window.screen.width;
  setScreenWidth(screenWidth);
  
},[width]) 
 let hide = (id) => { 
   
 width > 900 && setToggle(!toggle)
 
  setCurrentImgId(id);
  
}
 

  let imgList =   img.map(image => {
      return  <div key={image.id} onClick={()=> hide(image.id)} className={`${width <800 && 'my-10'} hover:opacity-60 cursor-pointer z-1`}>
        {console.log(image.attributes.width)}
         <Image   src={image.attributes.url} alt="Photo" width={image.attributes.width} height={image.attributes.height} key={image.id}/>
       </div>
    })
    
 



  
  return (
    <>
    <Head>
    <title>Photographe Developpeur Web  Portfolio Lille</title>
    <meta name="description" content="Portfolio photographe developpeur web front end haut de france Lille " />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  {/*<div className="animate-bounce absolute z-10 m-auto">
   <BsArrowDownCircle/>
   </div>
   */}
   

     { toggle ? <GalleryLayout imgList ={imgList}/> : <SimpleSlider id={currentImgId} imgData={img}/>}
   
      
         
        
    
     
     </>

   
     
    
  )
}
export async function getStaticProps() {
  
  const { data } = await client.query({
    query: gql`
    query UPLOADEDFILES {
      uploadFiles {
        data {
          attributes {
            caption
            width
            height
            url
          }
          id
        }
      }
    }
    `,
  });
  

  

  return {
    props: {
      photos: data,
    
    },
 };
}
