import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "../Reducer/Allreducers";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const middleware = [thunk];

const store = createStore(
  allReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(...middleware))
);

// ✅ keep Redux + localStorage in sync
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
