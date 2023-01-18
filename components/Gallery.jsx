import React from "react";
import pic from "../public/img.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Gallery() {
  return (
    <div className="bg-blue-100 shadow-lg p-2 rounded-md">
      <p>the school gallery</p>
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
        <div>
          <Image src={pic} alt="pic" />
        </div>
        <div>
          <Image src={pic} alt="pic" />
        </div>
        <div>
          <Image src={pic} alt="pic" />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
