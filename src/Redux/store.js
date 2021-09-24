import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authRedux from "./authAPP";
import stateGlobalRedux from "./globalState";
import searchRedux from "./searchRedux";

const rootReducer = combineReducers({
  Logged: authRedux,
  searchCharacters: searchRedux,
  stateGlobal: stateGlobalRedux,
});

//devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Crear store
export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
