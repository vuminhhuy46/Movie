import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
// component
import Home from "./pages/Home/Home.page";
import Header from "./pages/Header/Header.page";
import MovieDetailComponent from "./components/Movie-detail/Movie-detail.component";
import SignInPage from "./pages/Sign-In/Sign-In.page";
import SignUpPage from "./pages/Sign-Up/Sign-Up.page";
import AdminPage from "./pages/admin/admin.page";
import Guard from "./HOC/guard.hoc";
import BookingComponent from "./components/Booking/booking.component";

/**
 * 28-05-02021 Vũ Duy Anh
 * 1. Heder => notDone
 * Page/Header access to SignUpPage , SignInPage
 * pages/Home access to Carousel Slider , Carousel List
 * 2. Carousel Slider => notDone
 * 3. Carousel List => not Done 
 */

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:maPhim" exact component={MovieDetailComponent} />
        <Route path="/signUp" exact component={SignUpPage} />
        <Route path="/signIn" exact component={SignInPage} />
        <Route
          path="/bookingComponent/:showTimeCode"
          exact
          component={BookingComponent}
        />
        <Route path='/admin' >
          <Guard>
            <AdminPage />
          </Guard>
        </Route>
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
