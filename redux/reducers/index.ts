import { combineReducers } from "redux";
import { projectReducer } from "./project";
import { globalReducer } from "./global";
import { articleReducer } from "./article";
import { dashboardReducer } from "./dashboard";

const reducers = combineReducers({
  globalReducer,
  projectReducer,
  articleReducer,
  dashboardReducer,
});

export default reducers;