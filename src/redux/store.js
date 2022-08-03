import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer/rootReducer"

export const store = createStore(reducer, {}, applyMiddleware(thunk))