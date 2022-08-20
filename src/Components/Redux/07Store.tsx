import { legacy_createStore as createStore } from "redux";
import CakeReducer from "./06CakeReducers";
const store = createStore(CakeReducer);

export default store;
