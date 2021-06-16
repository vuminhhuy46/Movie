import React, { useRef } from "react";
// data carousel
import { images } from "./CarouselData";
// material
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { CardActionArea, CardMedia } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import "./css/Carouselpage.css";

const CarouselSlick = () => {
  // carousel
  const ref = useRef({});
  const next = () => {
    ref.current.slickNext();
  };
  const previous = () => {
    ref.current.slickPrev();
  };
  const settings = {
    dots: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      }
    ]
  };
  // render
  const renderImageCarousel = () => {
    return images.map((item, index) => {
      return (
        <CardActionArea key={index}>
          <CardMedia
            className="imageSlider"
            image={item.img}
            title={item.title}
          />
          <div className="center">
            <PlayArrowIcon className="iconPlay" />
          </div>
        </CardActionArea>
      )
    })
  }
  return (
    <section className="slider">
      <Slider ref={ref} {...settings} >
        {renderImageCarousel()}
      </Slider>
      <div >
        <ArrowBackIosIcon className='left-arrow' onClick={previous} />
        <ArrowForwardIosIcon className='right-arrow' onClick={next} />
      </div>
    </section>
  );
};

export default CarouselSlick;