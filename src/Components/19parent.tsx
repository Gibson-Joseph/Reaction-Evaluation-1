import Header from "./17Header";
import Body from "./18Body";
import { useState } from "react";

export default function Parent() {
  const [user, setUser] = useState("Gibson");
  return (
    <div>
      <Header name={user} />
      <Body name={user} />
    </div>
  );
}
