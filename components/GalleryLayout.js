import Masonry from 'react-masonry-css' ;
import styles from './GalleryLayout.module.css'


export default function GalleryLayout(props) {
    const breakpointColumnsObj = {
        default: 3,
        1086: 2,
        900:1,
        700: 1,
        500: 1
      };

  
 return (


<Masonry
  breakpointCols={breakpointColumnsObj}
  className={styles.mymasonrygrid}
  columnClassName={styles.mymasonrygridcolumn}> 
  {props.imgList}

</Masonry>
  
 )
}
