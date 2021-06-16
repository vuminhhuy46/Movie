import React, { useRef } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import { CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// data carousel
import { images } from "./CarouselData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  CardActionArea: {
    width: "35%",
    height: "50%",
  },
  carMedia: {
    width: "100%",
    height: "100%",
  },
}));

export default function SimpleBackdrop() {
  const ref = useRef({});
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const next = () => {
    ref.current.slickNext();
  };
  // carousel
  const previous = () => {
    ref.current.slickPrev();
  };
  // modal
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const settings = {
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
  console.log(images);
  const renderTest = () => {
    return images.map((item, index) => {
      return (
        <div key={index}>
          <img
            src={item.img}
            alt=""
            style={{ width: "100%", height: "700px" }}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <Slider ref={ref} {...settings}>
        {renderTest()}
      </Slider>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        {!open ? null : (
          <CardActionArea className={classes.CardActionArea}>
            <CardMedia
              className={classes.carMedia}
              component="iframe"
              src="https://www.youtube.com/embed/1q-a-Sdz6mw?autoplay=1&mute=1"
            />
          </CardActionArea>
        )}
      </Backdrop>
    </div>
  );
}
