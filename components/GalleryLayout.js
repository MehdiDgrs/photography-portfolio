import { XMasonry, XBlock } from 'react-xmasonry'
import styles from './GalleryLayout.module.css' 


export default function GalleryLayout(props){
    return (
        <XMasonry>
        {props.imgList}
        </XMasonry>
   
     
      
      
)}