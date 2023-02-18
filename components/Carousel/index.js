import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function CustomCarousel({responsive,children}) {
    console.log(children);
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