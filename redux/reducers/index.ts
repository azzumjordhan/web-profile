import { combineReducers } from "redux";
import { projectReducer } from "./project";
import { globalReducer } from "./global";
import { articleReducer } from "./article";
import { dashboardReducer } from "./dashboard";
import { techReducer } from "./tech";

const reducers = combineReducers({
  globalReducer,
  projectReducer,
  articleReducer,
  dashboardReducer,
  techReducer,
});

export default reducers;