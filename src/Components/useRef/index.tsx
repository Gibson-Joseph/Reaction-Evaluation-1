import React, {
  useState,
  useRef,
  RefObject,
  useEffect,
  useLayoutEffect,
} from "react";

export default function UseRef() {
  const [value, setValue] = useState<string>("");

  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  console.log("Re-Rendered");

  const countRef = useRef(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(value);
  }

  function showDom() {
    console.log(inputRef.current);
  }

  useEffect(() => {
    console.log("useEffect call", inputRef.current);

    countRef.current = countRef.current + 1;
    inputRef.current?.focus();
  });
  useLayoutEffect(() => {
    console.log("UseLayOut call");
  });
  console.log("value ->>", countRef.current);
  return (
    <React.StrictMode>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter name..."
          value={value}
          onChange={handleChange}
        />
        <p>{value}</p>
        <p>{countRef.current}</p>

        <button onClick={showDom}>Show</button>
      </div>
    </React.StrictMode>
  );
}
