import React from "react";
// redux hook
import { useDispatch, useSelector } from "react-redux";
// material ui
import { Grid } from "@material-ui/core";
import { getCodeGroupCinemaPage } from "../../store/actions/tabNavigationPage.action";

function NavigationTabsTwoPage() {
  const dispatch = useDispatch();
  
  const listShowTime = useSelector((state) => {
    return state.TabNavigationPageReducer.listShowTime; // get data to TabNavigationPageReducer => type : GET_LIST_SHOWTIME_PAGE:
  });
  const codeCinema = useSelector((state) => {
    return state.TabNavigationPageReducer.codeCinema; // get codeCinema form NavigationTabsOne.page => TabNavigationPageReducer => type : GET_CODE_CINEMA_PAGE
  });
  const codeGroupCinema = useSelector((state) => {
    return state.TabNavigationPageReducer.codeGroupCinema;
  });
  const handleMaCumRap = (codeGroupCinema)=>{
    dispatch(getCodeGroupCinemaPage(codeGroupCinema))
  }

  const renderListCumRap = () => {
    const index = listShowTime.findIndex(item=>item.maHeThongRap === codeCinema)
    if(index !== -1){
      return listShowTime[index].lstCumRap.map((item, index) => {
        return(
          <Grid item xs={12} key={index} 
          className={
            item.maCumRap === codeGroupCinema
              ? "rowTwoNavigation_Child_Active"
              : "rowTwoNavigation_Child"
          }>
          <div className="rowTwoNavigation_Child_Intro">
            <div>
              <img src="" alt="" />
            </div>
            <div className="Child_Intro">
              <p className={`${codeCinema}`}>{item.tenCumRap}</p>
              <p>{item.diaChi}</p>
              <span onClick={()=>{
                handleMaCumRap(item.maCumRap)
              }}>[Chi Tiết]</span>
            </div>
          </div>
        </Grid>
        )
      });
    }
    
  };

  return (
    <Grid
      container
      item
      xs={5}
      className="rowTwoNavigation"
      id="rowTwoNavigation"
    >
      {renderListCumRap()}
    </Grid>
  );
}

export default NavigationTabsTwoPage;
