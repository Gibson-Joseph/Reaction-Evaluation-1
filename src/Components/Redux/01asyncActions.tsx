import axios from "axios";
export default function AsyncAction() {
  const redux = require("redux");
  const createStore = redux.createStore;
  const applyMiddleware = redux.applyMiddleware;
  const thunkMiddleware = require("redux-thunk").default;

  const initialState = {
    loading: false,
    users: [],
    error: "",
  };

  //Action Type:
  const Fetch_User_Request = "Fetch_User_Request";
  const Fetch_User_Success = "Fetch_User_Success";
  const Fetch_User_Failure = "Fetch_User_Failure";

  //Action Creators:

  const fetchUsersRequest = () => {
    return {
      type: Fetch_User_Request,
    };
  };

  const fetchUsersSuccess = (users: any) => {
    return {
      type: Fetch_User_Success,
      payload: users,
    };
  };

  const fetchUsersError = (error: any) => {
    return {
      type: Fetch_User_Failure,
      payload: error,
    };
  };

  //Reducer Functions:
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case Fetch_User_Request:
        return {
          ...state,
          loading: true,
        };
      case Fetch_User_Success:
        return {
          loading: false,
          users: action.payload,
          error: "",
        };
      case Fetch_User_Failure:
        return {
          loading: false,
          users: [],
          error: action.payload,
        };
    }
  };
  const fetchUser = () => {
    return function (dispatch: any) {
      dispatch(fetchUsersRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          //response.data is the array of users
          const users = response.data.map((user: any) => user.id);
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          // error.message is the error description
          dispatch(fetchUsersError(error.message));
        });
    };
  };

  const store = createStore(reducer, applyMiddleware(thunkMiddleware));
  store.subscribe(() => {
    console.log(store.getState());
  });
  store.dispatch(fetchUser());

  return (
    <div>
      <h1>Async Functioin</h1>
    </div>
  );
}
