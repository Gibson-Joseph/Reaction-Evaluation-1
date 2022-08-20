import { useContext } from "react";
import { Context } from "./app";
export default function Child() {
  const val = useContext<any>(Context);
  return (
    <>
      <h4>Child Components</h4>
      <h4>
        {" "}
        --{">"}
        {val.name}
      </h4>
    </>
  );
}
