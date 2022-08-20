import React from "react";
const FRInputs = React.forwardRef((props: any, ref: any) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
export default FRInputs;
