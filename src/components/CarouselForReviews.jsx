import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhatPeopleSay = () => {


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div>
      <h2>What People Say</h2>
      <Slider {...settings}>
        <div>
          <h3>Person 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3>Person 2</h3>
          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div>
          <h3>Person 3</h3>
          <p>Nulla quis sem at nibh elementum imperdiet.</p>
        </div>
      </Slider>
    </div>
  );
};

export default WhatPeopleSay;
