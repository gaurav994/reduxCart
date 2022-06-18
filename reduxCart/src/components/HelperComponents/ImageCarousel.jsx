
import { useState } from 'react';
import styles from './ImageCarousel.module.css';

const ImageCarousel = (props) => {
    const [index , setIndex] = useState(0);
    const incrementInterval = () => {
      setIndex((props.images.length - 1) == index ?  0 : index + 1);
    }
    var intervalId ;
   const startCarousel = () => { if(intervalId == undefined) intervalId = setInterval(incrementInterval, 3000) };
   const stopCarousel = () => clearInterval(intervalId);
    return (
        <div className={styles.carouselContainer} onMouseEnter={startCarousel} onMouseLeave={stopCarousel}>
        <img className={styles.carouselImage} src={props.images[index]} alt="" ></img>
        </div>
    )
}


export default ImageCarousel;