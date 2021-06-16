import React from "react";
// redux hook
import { useSelector } from "react-redux";
// material ui
import { Grid } from "@material-ui/core";

function NavigationTabsTherePage() {
  const lstCumRap = useSelector((state) => {
    return state.TabNavigationPageReducer.lstCumRap; // get lstCumRap to  TabNavigationPageReducer => type : GET_CODE_CINEMA_PAGE
  });
  const codeGroupCinema = useSelector((state) => {
    return state.TabNavigationPageReducer.codeGroupCinema;
  });
  const codeCinema = useSelector((state) => {
    return state.TabNavigationPageReducer.codeCinema; // get codeCinema form NavigationTabsOne.page => TabNavigationPageReducer => type : GET_CODE_CINEMA_PAGE
  });

  const renderTenPhim = () => {
    const index = lstCumRap.findIndex(
      (item) => item.maCumRap === codeGroupCinema
    );
    if (index !== -1) {
      return lstCumRap[index].danhSachPhim.map((item, index) => {
        console.log(item);
        return (
          <Grid item xs={12} key={index} className="rowThereNavigation_Child">
            <div className="rowThereNavigation_Child_Intro">
              <Grid container>
                <Grid item xs={3}>
                  <div className="Child_Intro_Img">
                    <img src={item.hinhAnh} alt={item.hinhAnh} />
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="Child_Intro">
                    <label className={`maRap_${codeCinema}`}>
                      {item.maPhim}
                    </label>
                    <span className={codeCinema}>
                      {" "}
                      Tên Phim : {item.tenPhim}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        );
      });
    }
  };
  //className={`maRap_${codeGroupCinema}`}
  return (
    <Grid
      container
      item
      xs={6}
      className="rowThereNavigation"
      id="rowThereNavigation"
    >
      {renderTenPhim()}
    </Grid>
  );
}

export default NavigationTabsTherePage;
