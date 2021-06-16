import { combineReducers } from "redux";
import { movieReducer } from "./movie.reduder";
import { detaiMovielReducer } from "./detail.reducer";
import { signInReducer } from "./signIn.reducer";
import { BookingReducer } from "./booking.reducer";
import { CommonReducer } from "./common.reducer";
import { TabNavigationComponentReducer } from "./tabNavigationComponent.reducer";
import {TabNavigationPageReducer} from "./tabNavigationPage.reducer"

export const rootReducers = combineReducers({
  movieReducer,
  detaiMovielReducer,
  signInReducer,
  BookingReducer,
  CommonReducer,
  TabNavigationComponentReducer,
  TabNavigationPageReducer
});
