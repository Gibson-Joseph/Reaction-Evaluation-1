import React, { useState } from "react";
import Child1 from "../Components/child";
import { Child2 } from "./grandChild";

type User = {
  firstName: string;
  lastName: string;
};

const Parent = () => {
  const [parentData, setParentData] = useState<User>({
    firstName: "",
    lastName: "",
  });

  function display(item: [key: string]) {
    console.log("item is", item);

    console.log("isParentData", parentData);
    setParentData({ ...parentData, ...item });
  }
  console.log("Parent Data function --->", parentData);
  return (
    <div>
      <Child1 method={display} />
      <Child2 method={display} />
      <h1>
        {parentData.firstName} {parentData.lastName}
      </h1>
    </div>
  );
};
export default Parent;
