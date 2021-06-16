import React, { useState } from 'react'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { images } from '../CarouselData';
import './css/Carouselpage.css'
// modal
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { CardMedia } from '@material-ui/core';

const CarouselScratch = () => {
    const [current, setCurrent] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const lengTh = images.length;

    const nextSlide = () => {
        setCurrent(current === lengTh - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? lengTh - 1 : current - 1)
    }
    if (!Array.isArray(images) || images.lengTh <= 0) {
        return null
    }

    return (
        <section className="slider">
            {images.map((item, index) => {
                return (
                    <div key={index} className={index === current ? "slide active" : 'slide'}>
                        {index === current && (<CardMedia
                            className="imageSlider"
                            image={item.img}
                            title={item.title}
                        />)}
                    </div>
                )
            })}
            <ArrowBackIosIcon className='left-arrow' onClick={nextSlide} />
            <ArrowForwardIosIcon className='right-arrow' onClick={prevSlide} />
            <div className="center">
                <ModalVideo
                    className="modalVideo"
                    channel="youtube"
                    autoplay="1"
                    cc_load_policy="1"
                    isOpen={isOpen}
                    videoId={images[current].subtitle}
                    onClose={() => setOpen(false)}
                />
                <PlayArrowIcon className="iconPlay" onClick={() => setOpen(true)} />
            </div>
        </section>
    )
}

export default CarouselScratch
