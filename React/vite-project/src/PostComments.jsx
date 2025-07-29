import { useEffect, useState } from "react";
import axios from "axios";
// import GetData from "./GetData.js";
import './App.css'
import {
  Grid,
  Card,
  CardContent
} from "@mui/material";
import { useParams } from "react-router";
import ConnectionErrorComp from "./ConnectionErrorComp.jsx"

function PostComments() {
  let {id} = useParams()
  // let navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [postCommentsData, setPostCommentsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reloadState, setReloadState] = useState(false);
  const postCommentsLimit = 10;

  const NextButton = () => (
    <button 
      disabled={startIndex + postCommentsLimit >= postCommentsData.length} 
      onClick={() => setStartIndex((startIndex) => startIndex + postCommentsLimit)}
      >
      Next
    </button>
  )
  const BackButton = () => (
    <button 
      disabled={startIndex <= 0} 
      onClick={() => setStartIndex((startIndex) => startIndex - postCommentsLimit)}
      >
      Back
    </button>
  )

  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        setPostCommentsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching postComments:", error);
        setErrorMessage(error.message)
      });
  }, [reloadState, id]);

  return (
    <div className="main-container"
      >
      <h1>Post {id} Comments: {postCommentsData.length}</h1>
      {
        postCommentsData.length === 0 ? 
          <ConnectionErrorComp errorMessage={errorMessage} setReloadState={setReloadState}/>
          :
          <div className="container">
                <div className="nav-buttons">
                  <BackButton/>
                  <h2 className="padding0 margin0">Page {startIndex/postCommentsLimit + 1}</h2>
                  <NextButton/>                  
                </div>
                
                {/* <div className="postComments-container gap20px"> */}
                  
              <Grid container spacing={2}>
                {postCommentsData.map((comment, idx) => {
                    if (idx >= startIndex && idx < startIndex + postCommentsLimit) 
                      return (        
                        <Grid size={{ xs: 12, md: 6 }} key={comment.id}>
                          <Card variant="outlined"  className="post-card">
                            <CardContent sx={{ height: '100%' }} key={comment.id} >
                                  {/* <div key={comment.id} className="comment-card"> */}
                                    <h3><span>{comment.id}: </span>{comment.name}</h3>
                                    <p>{comment.body}</p>
                                    <strong>by: {comment.email}</strong>
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
                    {startIndex >= postCommentsLimit * 2 && startIndex/postCommentsLimit + 1 !== 1 && <p onClick={()=> setStartIndex(0)}>1</p>}                    
                    {startIndex > postCommentsLimit && <p>...</p>}
                    {startIndex/postCommentsLimit > 0 && <p onClick={()=> setStartIndex(startIndex - postCommentsLimit)}>{startIndex/postCommentsLimit}</p>}
                    <p className='active-page-num'>{startIndex/postCommentsLimit + 1}</p>
                    {startIndex + postCommentsLimit < postCommentsData.length && <p onClick={()=> setStartIndex(startIndex + postCommentsLimit)}>{startIndex/postCommentsLimit + 2}</p>}
                    {startIndex + postCommentsLimit < postCommentsData.length - postCommentsLimit && <p>...</p>}
                    {startIndex + postCommentsLimit < postCommentsData.length - postCommentsLimit && <p onClick={()=> setStartIndex(postCommentsData.length - postCommentsLimit)}>{postCommentsData.length / postCommentsLimit}</p>}
                  </div>
                  <NextButton/>
                </div>
            
      </div>
      }
    </div>
  );
}

export default PostComments
