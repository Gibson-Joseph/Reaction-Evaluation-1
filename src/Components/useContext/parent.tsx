import { useContext, useState } from "react";
import Child from "../useContext/child";
import { Context } from "./app";

export default function Parent() {
  const value = useContext<any>(Context);
  console.log("app state -->", value);
  const [newState, setNewState] = useState(value);
  console.log("child -->", newState);

  return (
    <>
      <h3>Parent Component</h3>
      <h4>--&gt; {newState.job}</h4>

      <Child />
      <hr />
    </>
  );
}
