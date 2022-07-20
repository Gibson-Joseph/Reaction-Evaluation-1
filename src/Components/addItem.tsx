import React, { useState } from "react";

export default function AddItem() {
  let arr: any[] = [1, 2, 3, 4];
  const [addNum, setAddNum]: any[] = useState(arr);
  function addItem() {
    // setAddNum((prev: number[]) => {
    //   return [...prev, addNum.length + 1];
    // });

    setAddNum([...addNum, addNum.length + 1]);
  }
  const mapArr = addNum.map((item: number) => <li>{item}</li>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>

      <ul>{mapArr}</ul>
    </div>
  );
}
