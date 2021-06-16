import React, { useEffect } from "react";
// redux hook
import { useDispatch, useSelector } from "react-redux";
// rfce
import NavigationTabsTwoPage from "./NavigationTabsTwo.page";
import NavigationTabsTherePage from "./NavigationTabsThere.page";
// material ui
import { Container, Grid } from "@material-ui/core";
// css
import "./css/Navigation.style.css";
import { getCodeCinemaPage, getListShowTimePageAction } from "../../store/actions/tabNavigationPage.action";

function NavigationTabsOnePage() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getListShowTimePageAction())// get data to Axios tabNavigationPage.action 
  },[dispatch])

  const listShowTime = useSelector((state) => {
    return state.TabNavigationPageReducer.listShowTime; // get data to TabNavigationPageReducer
  });
  const codeCinema = useSelector((state) => {
    return state.TabNavigationPageReducer.codeCinema; // get codeCinema form NavigationTabsOne.page => TabNavigationPageReducer => type : GET_CODE_CINEMA_PAGE
  });

  const handleCodeCinema = (codeCinema)=>{
    dispatch(getCodeCinemaPage(codeCinema))
  }
  
  const renderLoGo = () => {
    return listShowTime.map((item, index) => {
      return (
        <Grid item xs={12} key={index} 
        className={
          item.maHeThongRap === codeCinema
            ? "rowOneNavigation_Child_Active"
            : "rowOneNavigation_Child"
        }
        >
          <button>
            <img
              src={item.logo}
              alt=""
              className="rowOneNavigation_Child_Images"
              onClick={()=>{handleCodeCinema(item.maHeThongRap)}}
            />
          </button>
        </Grid>
      );
    });
  };
  return (
    <>
      <div className="bgNaVigato"></div>
      <Container>
        <Grid container className="naViGaTion">
          <Grid container item xs={1} className="rowOneNavigation">
            {renderLoGo()}
          </Grid>
          {/* 2 */}
          <NavigationTabsTwoPage/>
          {/* 2 */}
          {/* 3 */}
          <NavigationTabsTherePage />
          {/* 3 */}
        </Grid>
      </Container>
      <div className="bgNaVigato"></div>
    </>
  );
}

export default NavigationTabsOnePage;
