import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import ConnectionErrorComp from "./ConnectionErrorComp.jsx"
import { useNavigate, useParams } from "react-router";

function Post() {
  let {id} = useParams()
  let navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reloadState, setReloadState] = useState(false);  
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setErrorMessage(error.message)
      });
  }, [reloadState, id]);


  return (
    <div className="main-container"
      >
      <h1>Post No.{id}</h1>
      {
        post.length === 0 ?                     
          <ConnectionErrorComp errorMessage={errorMessage} setReloadState={setReloadState}/>
          :
          <div  onClick={()=> navigate(`/posts/${id}/comments`)}  className="container gap20px">
            <div key={post.id} className="post-card">
              <h3><span>{post.id}: </span>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <div className="nav-buttons">
              <button onClick={()=> navigate(-1)}>← Go Back</button>
              <button onClick={()=> navigate(`/posts/${id}/comments`)}>Comments</button>
            </div>
          </div>
      }
    </div>
  );
}

export default Post
