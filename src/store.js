import { rootreducer } from "./Redux/reducers/main";
import { createStore } from "redux";
export const store=createStore (rootreducer);
