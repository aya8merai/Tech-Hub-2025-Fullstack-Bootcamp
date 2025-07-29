import { useEffect, useState } from "react";
import axios from "axios";
// import GetData from "./GetData.js";
import './App.css'
import {
  Grid,
  Card,
  CardContent
} from "@mui/material";
import { useNavigate } from "react-router";
import ConnectionErrorComp from "./ConnectionErrorComp.jsx"

function Posts() {
  let navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [postsData, setPostsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reloadState, setReloadState] = useState(false);
  const postsLimit = 10;

  const NextButton = () => (
    <button 
      disabled={startIndex + postsLimit >= postsData.length} 
      onClick={() => setStartIndex((startIndex) => startIndex + postsLimit)}
      >
      Next
    </button>
  )
  const BackButton = () => (
    <button 
      disabled={startIndex <= 0} 
      onClick={() => setStartIndex((startIndex) => startIndex - postsLimit)}
      >
      Back
    </button>
  )

  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPostsData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setErrorMessage(error.message)
      });
  }, [reloadState]);

  return (
    <div className="main-container"
      >
      <h1>Posts: {postsData.length}</h1>
      {
        postsData.length === 0 ? 
          <ConnectionErrorComp errorMessage={errorMessage} setReloadState={setReloadState}/>
          :
          <div className="container">
                <div className="nav-buttons">
                  <BackButton/>
                  <h2 className="padding0 margin0">Page {startIndex/postsLimit + 1}</h2>
                  <NextButton/>                  
                </div>
                
                {/* <div className="posts-container gap20px"> */}
                  
              <Grid container spacing={2}>
                {postsData.map((post) => {
                    if (post.id > startIndex && post.id <= startIndex + postsLimit) 
                      return (        
                        <Grid size={{ xs: 12, md: 6 }} key={post.id}>
                          <Card onClick={()=> navigate(`/post/${post.id}`)} variant="outlined"  className="post-card">
                            <CardContent sx={{ height: '100%' }} key={post.id} >
                                  {/* <div key={post.id} className="post-card"> */}
                                    <h3><span>{post.id}: </span>{post.title}</h3>
                                    <p>{post.body}</p>
                                  {/* </div> */}
                            </CardContent>
                          </Card>
                        </Grid>
                        )
                      }
                    )}  
                  </Grid>
                    {/* </div> */}
                    <div className="nav-buttons">
                  <BackButton/>
                  <div className="pages-num">                    
                    {startIndex >= postsLimit * 2 && startIndex/postsLimit + 1 !== 1 && <p onClick={()=> setStartIndex(0)}>1</p>}                    
                    {startIndex > postsLimit && <p>...</p>}
                    {startIndex/postsLimit > 0 && <p onClick={()=> setStartIndex(startIndex - postsLimit)}>{startIndex/postsLimit}</p>}
                    <p className='active-page-num'>{startIndex/postsLimit + 1}</p>
                    {startIndex + postsLimit < postsData.length && <p onClick={()=> setStartIndex(startIndex + postsLimit)}>{startIndex/postsLimit + 2}</p>}
                    {startIndex + postsLimit < postsData.length - postsLimit && <p>...</p>}
                    {startIndex + postsLimit < postsData.length - postsLimit && <p onClick={()=> setStartIndex(postsData.length - postsLimit)}>{postsData.length / postsLimit}</p>}
                  </div>
                  <NextButton/>
                </div>
            
      </div>
      }
    </div>
  );
}

export default Posts
