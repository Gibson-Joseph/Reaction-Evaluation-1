//Redux:
import redux, { combineReducers } from "redux";
export default function Redux() {
  const redux = require("redux");
  const reduxLogger = require("redux-logger");
  const logger = reduxLogger.createLogger();
  const createStore = redux.createStore;
  const combineReducers = redux.combineReducers;
  const applyMiddleware = redux.applyMiddleware;
  const buy_Cake = "buy_Cake";
  const buy_IceCream = "buy_IceCream";

  function buyCake() {
    return {
      type: buy_Cake, //<-- Actions
      info: "First Redux Action",
    };
  }

  function buyIceCream() {
    return {
      type: buy_IceCream,
    };
  }

  //(PreviousState, Action) => newState
  // const []
  // const initialState = {
  //   numOfCakes: 10,
  //   numOfIceCreams: 20,
  // };

  const initialCakeState = {
    numOfCakes: 10,
  };
  const initialIceCreameState = {
    numOfIceCreams: 20,
  };

  const cakeReducer = (state = initialCakeState, action: any) => {
    switch (action.type) {
      case buy_Cake:
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1,
        };
      default:
        return state;
    }
  };

  const iceCreamReducer = (state = initialIceCreameState, action: any) => {
    switch (action.type) {
      case buy_IceCream:
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1,
        };
      default:
        return state;
    }
  };

  //it is a pure function that accepts state and action as arguments and returns the next state of the application

  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreake: iceCreamReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(logger));
  console.log("Store -->", store.getState());
  const unsubscribe = store.subscribe(() => {});
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());

  unsubscribe();

  return (
    <div>
      <h1></h1>
    </div>
  );
}
