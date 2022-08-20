# 1. Lifecycle methods of React (Functional Components)

- componentDidMount

- componentDidUpdate

- componentWillUnmount

## ComponentDidMount:

- message will be printed when the component is mounted and every time the component state is updated.

```r
useEffect(() => {
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
});
```

## ComponentDidUpdate:

- The message will be priented when the component is mounted and every time the state is changed.

```r
 function handleClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log("Rendered");
  }, [count]);
```

## ComponentWillUnMount:

- If you add a return function inside the useEffect function, it is triggered when a component unmounts from the DOM.

```r
import React, { useEffect } from 'react';
const ComponentExample => () => {
    useEffect(() => {
        return () => {
            console.log("Rendered")
        }
    }, [])
}
```

# 2. What is a children prop?

- The parent component, import the child componet.

- a parent component can pass whatever is needed in the child component, even generated layout features that can then be rendered by the child.

# 3. What is the use of react-dom package?

- ReactDOM is a package.

- To use the ReactDOM in any React web app we must first import ReactDOM from the react-dom.

```
import ReactDOM from "react-dom"
```

- ReactDOM provides DOM specific methods that can be used at the top level of a web application to enable an efficient way of managing DOM elements of the web page

# 4.What is Create React APP (CRA) and what are it’s benefits

- The create-react-app CLI tool allows you to quickly create & run React applications with no configuration step.

- Project is structured by default.

- Once the Create React App releases the new versions, you can easily upgrade through this command:

```
npm install react-scripts@latest
```

# 5.How to pretty print JSON with React?

- Pretty Print is useful to display JSON in an easy to read format.

- The JSON.stringify() method converts a JavaScript object or value to a JSON string.

- We can use <pre> tag so that the formatting of the JSON.stringify() is retained:

example:

- <pre>{JSON.stringify(PrintData, null, 2)}</pre>

# 6.Why you can’t update props in React?

- props should be immutable. This means parent can send any prop values to a child, but the child can't modify received props.

# 7.What is React Router?

- React Router enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI with the URL.

# 8.How is React Router different from history library?

- React Router provides us with a history object, which is accessible by passing this object into each route as a prop. This history object lets us manually control the history of the browser.

- React Router is a wrapper around the history library that handles interaction with the browser's window. history with its browser and hash histories.

# 9.How to get query parameters in React Router

- Query parameters are a defined set of parameters attached to the end of a url.

- they are key=value pairs we can attach to a url.

```
import { useLocation } from "react-router-dom";

export default function QueryExample() {
  const location = useLocation();
  console.log("search Location-->", location);
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const age = queryParams.get("age");
  console.log(name);
  return (
    <div>
      <h1>Name:{name}</h1>
      <h3>Age:{age}</h3>
    </div>
  );
}
```

# 10.How to get history on React Router v4?

- In version 6 of react router, the useHistory() hook is replaced with useNavigate()
