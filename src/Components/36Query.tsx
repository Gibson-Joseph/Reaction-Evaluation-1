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
