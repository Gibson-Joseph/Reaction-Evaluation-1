import React, { useSelector } from "react-redux";
function HooksCakeContainer(props: any) {
  const numOfCakes = useSelector<any>((state) => state.numOFCakes);
  return (
    <div>
      {/* <h2>num oF Cakes-{numOfCakes}</h2> */}
      <button>Buy Cake</button>
    </div>
  );
}
export default HooksCakeContainer;
