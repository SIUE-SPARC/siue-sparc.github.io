import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import pic1 from "../assets/images/CarouselPhotos/workshop5.jpg";
import pic2 from "../assets/images/CarouselPhotos/workshop1.jpg";
import pic3 from "../assets/images/CarouselPhotos/IMG_3010.JPG";
import pic4 from "../assets/images/CarouselPhotos/IMG_2999.jpg";
import pic5 from "../assets/images/CarouselPhotos/IMG_3002.jpg";
import pic6 from "../assets/images/CarouselPhotos/IMG_3994.jpg";
import pic7 from "../assets/images/CarouselPhotos/IMG_3006.jpg";
import "../Stylesheets/Gallery.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={pic5} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={pic2} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={pic3} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={pic4} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={pic1} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={pic6} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={pic7} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
    1200: { items: 4 }
  }


const Gallery = () => {
    
    return (
    <AliceCarousel 
        mouseTracking 
        items={items} 
        autoHeight={false} 
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={6000}
    />
  );
}

export default Gallery;