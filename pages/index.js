
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { XMasonry, XBlock } from 'react-xmasonry'
import React, { useEffect } from "react";
import GalleryLayout from '../components/GalleryLayout'
import Slider from '../components/Slider'


import Head from 'next/head'



export default function Home(props) {

  

 let [img,setImg] = React.useState(props.data);
 let [toggle,settToggle] = React.useState(true)

 let hide = () => { 
  settToggle(!toggle)
}

 
  let imgList =   img.map(image => {
      return  <div key={image.id}onClick={hide} className="hover:opacity-60 cursor-pointer"><Image src={image.urls.raw} width={image.width} height={image.height} key={image.id}/></div>
    })
    
 


console.log(img)
  
  return (
    <>
    <Head>
    <title>Mehdi Photographe Portfolio</title>
    <meta name="description" content="Portfolio photographe haut de france Lille " />
    <link rel="icon" href="/favicon.ico" />
  </Head>
   
   
    
     { toggle ? <GalleryLayout imgList ={imgList}/>  : <Slider/>}
         
        
    
     
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
