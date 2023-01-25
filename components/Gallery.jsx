import React from "react";
import img from "../public/img.jpg";
import img1 from "../public/img1.jpg";
import img3 from "../public/img3.jpg";
import img6 from "../public/img6.jpg";
import img11 from "../public/img11.jpg";
import img12 from "../public/img12.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Gallery() {
  return (
    <div className="bg-blue-200 shadow-lg p-1 m-2 rounded-sm">
      <p className=" text-sm text-center">
        {" "}
        Environments are excellent and facilities designed to nurture the
        intellectual, physical, social, and emotional development of students
      </p>
      <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
        <div>
          <Image src={img} alt="pic" className="rounded-lg" />
          <p></p>
        </div>
        <div>
          <Image src={img1} alt="pic" className="rounded-lg" />
          <p>
            {" "}
            Teachers play a vital role in shaping the minds of young people and
            helping them to reach their full potential.
          </p>
        </div>

        <div>
          <Image src={img3} alt="pic" className="rounded-lg" />
          <p>
            Agriculture education in schools can provide students with valuable
            hands-on learning experiences and knowledge about food production,
            environmental conservation, and business management
          </p>
        </div>

        <div>
          <Image src={img6} alt="pic" className="rounded-lg" />
          <p>
            The School administrators are dedicated and hardworking individuals
            who play a crucial role in the success of schools. They are
            committed to providing students with the best possible educational
            experience, and work tirelessly to ensure that schools run smoothly
            and efficiently
          </p>
        </div>

        <div>
          <Image src={img11} alt="pic" className="rounded-lg" />
          <p>
            "Knowledge is the key to unlocking your potential and achieving
            excellence in all areas of your life. Embrace learning and seek out
            new opportunities to expand your understanding of the world. With
            knowledge, you can accomplish anything you set your mind to.
          </p>
        </div>
        <div>
          <Image src={img12} alt="pic" className="rounded-lg" />
          <p>
            The School Administration helps to build a stronger, more
            knowledgeable, and more successful community.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
