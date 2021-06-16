import React, { useEffect, useState } from "react";
// material
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Container } from "@material-ui/core";
// styled materiall
import { styled } from "./Movie-detail.component.styles";
import { withStyles } from "@material-ui/styles";
// redux
import { useDispatch, useSelector } from "react-redux";
// reduer action
import { getMovieDetail_Action } from "../../store/actions/detail.actions";
import { getInforSystem } from "../../store/actions/tabNavigationComponent.action";
import { withRouter } from "react-router";
import Showtimecomponent from "../Show-time/Show-time.component";
import Loader from "../Loader/Loader";
import NavigationTabsOnecomponent from "../Show-time/NavigationTabsOne.component";

function MovieDetail(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(null);

  const codeMaPhim = props.match.params.maPhim; // recive data to listFlim/Listphim.page
  const detail = useSelector((state) => {
    return state.detaiMovielReducer.detail || {};
  });
  console.log(detail);
  useEffect(() => {
    dispatch(getMovieDetail_Action(codeMaPhim)).then((e) => setLoading(e)); // post data (codeMaPhim === id) to Axios detail.action & return object to detaiMovielReducer
  }, [dispatch, codeMaPhim]);
  useEffect(() => {
    dispatch(getInforSystem());// get data to Axios tabNavigation.action for component NavigationTabsOne
  }, [dispatch]);
  return (
    <Container>
      {loading === null ? (
        <Loader style={{ textAlign: "center" }} />
      ) : (
        <>
          <Typography className={classes.textIntro}>Thông Tin Phim</Typography>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={detail.hinhAnh}
                title={detail.maNhom}
                style={{ height: "500px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Code : {detail.maPhim} Phim : {detail.tenPhim}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Chi Tiết : {detail.moTa}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography gutterBottom variant="h5" component="h2">
                Ngày Chiếu : {detail.ngayKhoiChieu}
              </Typography>
            </CardActions>
          </Card>
          <section className="show-time">
            <NavigationTabsOnecomponent />
            <Showtimecomponent />
            {/* access to component/Show-time/Show-time.component */}
          </section>
        </>
      )}
    </Container>
  );
}

export default withStyles(styled)(withRouter(MovieDetail));
