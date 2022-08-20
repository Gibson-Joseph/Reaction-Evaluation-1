import { useState, useContext } from "react";
import { createContext } from "react";
import Parent from "../../Components/useContext/parent";

export const Context = createContext<any>("");
export default function ParentComponent() {
  // 1. Create Context
  // 2. Creat provider
  // 3. Consume

  const [state, setState] = useState({
    name: "joseph",
    age: 21,
    job: "Web Developer",
  });

  const val = {
    detail: {
      name: "gibson",
      age: 3,
    },
  };

  return (
    <div>
      <Context.Provider value={state}>
        <h3>App Context</h3>
        <div>
          <Parent />
        </div>
      </Context.Provider>
    </div>
  );
}
