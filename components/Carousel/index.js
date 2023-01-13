import Image from "next/image";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import book1 from '../../public/image/book1.jpg';
import book2 from '../../public/image/book2.jpg';
import book3 from '../../public/image/book3.jpg';
import style from './carousel.module.scss';
import { config } from "@config";
function CustomCarousel({responsive,children}) {
    return (
        <Carousel 
            focusOnSelect={true} 
            responsive={responsive}
            
        >
            {children}
        </Carousel>

    );
}

export default CustomCarousel;