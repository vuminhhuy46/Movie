import React, { useState } from "react";
// material
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// modal
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
// data carousel
import { images } from "../CarouselData";
// css
import "./css/Carouselpage.css";

function Carouselpage() {
  const [image, setImage] = useState(0);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="carousel">
      <div
        className="carouselinner"
        style={{ background: `url(${images[image].img})` }}
        atl="img"
      >
        <div
          className="left"
          onClick={() => {
            image > 0 && setImage(image - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: "45px" }} />
        </div>
        <div className="center">
          <ModalVideo
            className="modalVideo"
            channel="youtube"
            autoplay="1"
            cc_load_policy="1"
            isOpen={isOpen}
            videoId={images[image].subtitle}
            onClose={() => setOpen(false)}
          />
          <PlayArrowIcon className="iconPlay" onClick={() => setOpen(true)} />
        </div>
        <div
          className="right"
          onClick={() => {
            image < images.length - 1 && setImage(image + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: "45px" }} />
        </div>
      </div>
    </div>
  );
}

export default Carouselpage;
