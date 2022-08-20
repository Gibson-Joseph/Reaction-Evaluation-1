import { getUser } from "../Api/api";

export default function Data() {
  function displayuser() {
    getUser();
  }
  return (
    <div>
      <button onClick={displayuser}>get</button>
    </div>
  );
}
