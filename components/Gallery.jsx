import React from "react";
import img from "../public/img.jpg";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import img6 from "../public/img6.jpg";
import img7 from "../public/img7.jpg";
import img8 from "../public/img8.jpg";
import img9 from "../public/img9.jpg";
import img11 from "../public/img11.jpg";
import img12 from "../public/img12.jpg";
import img13 from "../public/img13.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Gallery() {
  return (
    <div className="bg-blue-200 shadow-lg p-3 m-2 rounded-sm">
      <p className="text-justify text-sm"> Environments are excellent and facilities designed to nurture the intellectual, physical, social, and emotional development of students</p>
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
        <div>
          <Image src={img} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img1} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img2} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img3} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img4} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img5} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img6} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img7} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img8} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img9} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img11} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img12} alt="pic" className="rounded-lg" />
        </div>
        <div>
          <Image src={img13} alt="pic" className="rounded-lg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
