import { Buy_Cake } from "./05CakeTypes";
const intialState = {
  numOfCakes: 10,
};
const CakeReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;
