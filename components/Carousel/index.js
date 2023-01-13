import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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