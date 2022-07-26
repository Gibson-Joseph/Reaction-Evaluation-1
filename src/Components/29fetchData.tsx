import React, { useEffect, useState } from "react";

export default function FetchData() {
  const [posts, setPosts] = useState("posts");
  // const [comments, setComments] = useState("comments");
  // const [data1, setData1] = useState(0);
  const [response, setReponse] = useState([]);
  function handlePostsClick() {
    setPosts("posts");
  }

  function handleCommentsClick() {
    setPosts("comments");
  }
  // console.log("Re-Render");

  // useEffect(() => {
  //   console.log("UseEffect");

  //   setData1(data * 2);
  // }, [data]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${posts}`)
      .then((response) => response.json())
      .then((json) => setReponse(json));
  }, [posts]);
  return (
    <div>
      {/* <h3>{data}</h3> */}
      {/* <h4>{data1}</h4> */}
      <button onClick={handlePostsClick}>Posts</button>
      <button onClick={handleCommentsClick}>Comments</button>
      {posts}
      <p>{JSON.stringify(response)}</p>
    </div>
  );
}
