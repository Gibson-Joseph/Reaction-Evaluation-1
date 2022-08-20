import React, { useState } from "react";
import MemeContainer from "./Components/15MemeParent";
// import SimpleForm from "./Components/Poc/25simpleForm";
import SimpleForm from "./Components/Poc/loginPage";
import Parent from "./Components/parent";
import UseEffectComponents from "./Components/26useEffect";
import SimpleUseEffect from "./Components/27useEffect";
import Timer from "./Components/28useEffect";
import FetchData from "./Components/29fetchData";
import Components from "./Components/30Useeffect";
import SimpleUseEffectComponents from "./Components/31useEffect";
import Window from "./Components/32WindowTracker";
import Container from "./Components/03Challenge";
import { LoginPage } from "./Components/Login";
import PageNavigation from "./Components/34Router";
import N_bar from "./Components/Poc/menuItem";
import Sample from "./Components/30Useeffect";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import QueryExample from "./Components/36Query";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import History from "./Components/37useHistory";
// import About from "./Components/Poc/about";
import About from "./Components/Poc/about";

import Data from "./Components/http";
import Customer from "./Components/Poc/customer";
import Edit from "./Components/Poc/edit";
import ParentComponent from "./Components/useContext/app";
import UseRef from "./Components/useRef/index";
import UseMemo from "./Components/useMemo";
import Redux from "./Components/Redux/00index";
import AsyncAction from "./Components/Redux/01asyncActions";
import CakeContainer from "./Components/Redux/03cakeContainer";
import { Provider } from "react-redux";
import store from "./Components/Redux/07Store";
import HooksCakeContainer from "./Components/Redux/08HooksCakeContainer";
import FRParentInputs from "./Components/Fragment/FRParentInput";
function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="App">
      {/* <UseRef /> */}
      {/* <UseMemo /> */}

      {/* <Redux /> */}
      {/* <Provider store={store}>
        <HooksCakeContainer />
        <CakeContainer />
      </Provider> */}
      {/* <UseRef /> */}
      {/* <FRParentInputs /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SimpleForm />}></Route>
          <Route path="/page" element={<N_bar />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Customer" element={<Customer />}></Route>
          <Route path="/Edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

///////////////////////

{
  /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<SimpleForm />}></Route>
          <Route path="/page" element={<N_bar />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Customer" element={<Customer />}></Route>
          <Route path="/Edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter> */
}
