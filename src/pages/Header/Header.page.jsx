import React from "react";
// function component SingOutPage
import SingOutPage from "../Sign-Out/Sign-Out.page";
// redux
import { useSelector } from "react-redux";
// react-router-dom
import { Link } from "react-router-dom";
// material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
// css
import "./css/header.style.css";

function Header(props) {
  // take data reducer/signIn.reducer
  const signIn = useSelector((state) => {
    return state.signInReducer.auth;
  });
  return (
    <AppBar position="static" color="inherit" id="navbar" className="header">
      <Toolbar>
        <Grid item xs={4} className="headerGridOne">
          <Typography>
            <Link to="/" className="titleLink">
              <img className="headerloGo" src="./web-logo.png" alt="logo" />
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={4} className="headerGridTwo">
          <Typography className="headerTitleLinkTwo">
            <label className="headerTitleTwo">Lịch Chiếu</label>
            <label className="headerTitleTwo">Cụm Rạp</label>
            <label className="headerTitleTwo">Tin Tức</label>
            <label className="headerTitleTwo">Ứng Dụng</label>
          </Typography>
        </Grid>
        <Grid item xs={4} className="headerGridThere">
          {signIn ? (
            <>
              <SingOutPage />
              {/* acces to pages/Sign-Out/signout.page-rfc */}
            </>
          ) : (
            <Typography className="headerTitleLinkThere">
              <Link to="/signUp" className="headerTitleThere">
                Đăng Kí {/* acces to pages/Sign-Up/Sign-Up.page-rcc*/}
              </Link>
              <AccountCircleIcon className="headerIconLogIn" />
              <Link to="/signIn" className="headerTitleThere">
                Đăng Nhập {/* acces to pages/Sign-In/Sign-In.page-rfc */}
              </Link>
              <LocationOnIcon className="headerIconLogIn" />
            </Typography>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
