import React from "react";
// rfce
import NavigationTabsOnePage from "../Navigation Tab/NavigationTabsOne.page";
// material
import { Container, withStyles } from "@material-ui/core";
//function component carousel slider
import CarouselSlick from "../Carousel/Carousel.Slick";
// carousel list phim
import ListPhim from "../ListFlim/Listphim.page";
//function component styled materiall
import { styled } from "./Home.styles";
import Footer from "../Footer/Footer";

/**
 *  8-05-02021 Vũ Duy Anh
 *  2. Carousel Slider => notDone
 *  3. Carousel List => not Done
 */

function Home() {
  return (
    <>
      <CarouselSlick />
      <Container maxWidth="lg">
        <ListPhim />
        <NavigationTabsOnePage />
      </Container>
      <Footer />
    </>
  );
}

export default withStyles(styled)(Home);
