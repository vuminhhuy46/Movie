import React, { memo, useEffect, useRef } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// reducer dispatch
import { getMovieList_Action } from "../../store/actions/movie.action";
// react-router
import { useHistory } from "react-router";
// material
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CardMedia from "@material-ui/core/CardMedia";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button } from "@material-ui/core";
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import "./css/listPhim.css";

/**
 *  8-05-02021 Vũ Duy Anh
 * Carousel List => not Done
 *  pages/ListPhim access to Movie-detail/Movie-detail.page
 */

const ListPhim = (props) => {
  const ref = useRef({});
  const hisTory = useHistory();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => {
    return state.movieReducer.movieList;
  });
  useEffect(() => {
    dispatch(getMovieList_Action());
  }, []);
  // arrow function render to row.113
  const renderListPhim = () => {
    return movieList.map((item, index) => {
      return (
        <div key={index} className="slide">
          <div className="sliderAfter">
            <CardMedia
              className="imageSlider"
              image={item.hinhAnh}
              title={item.hinhAnh}
            />
            <div className="intro">
              <span className="introOne"> P </span>
              <span className="introTwo"> {item.tenPhim} </span>
              <p className="introThere">100 phút</p>
            </div>
            <Button
              variant="contained"
              color="secondary"
              className="buttonslide"
              onClick={() => {
                hisTory.push(`/detail/${item.maPhim}`); // transmission to Movie-detail/Movie-detail.compnent
              }}
            >
              Mua Vé
            </Button>
          </div>
          <label className="modalPlay">
            <PlayArrowIcon className="iconPlay" />
          </label>
        </div>
      );
    });
  };
  // arow carousel next
  const next = () => {
    ref.current.slickNext();
  };
  // arow carousel previous
  const previous = () => {
    ref.current.slickPrev();
  };
  // setting carousel
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <section className="sliderListPhim">
      <div className="btnCheckFlim">
        <span>Đang Chiếu</span>
        <span>Sắp Chiếu</span>
      </div>
      <Slider ref={ref} {...settings}>
        {renderListPhim()}
      </Slider>
      <ArrowBackIosIcon className="left-arrow" onClick={previous} />
      <ArrowForwardIosIcon className="right-arrow" onClick={next} />
    </section>
  );
};

export default memo(ListPhim);
