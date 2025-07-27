import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
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

  const ErrorComp = () => (<div className="container">
    {errorMessage === 'Network Error' ?
      <>
        <h2>No Internet Connection!</h2>
        <p style={{margin: '0px 0px 25px 0px'}}>Check your internet connection and try again.</p>
        <button onClick={() => setReloadState((reloadState) => !reloadState)}>
          Retry ↻
        </button>
      </> 
      : 
      <>
        <h2>{'Loading...'}</h2>
        <p>{'This may take a moment.'}</p>
      </> }
    </div>)
    
  //   const getData = async() => {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }        
  //       const json = await response.json()
  //       setPostsData(json);
  //       // console.log(response.data);
  //     }
  //     catch (error) {
  //       console.error("Error fetching posts:", error);
  //       setErrorMessage(error.message)
  //     }
  //   }
  
  // useEffect(() => {
  //   getData()    
  // }, [reloadState]);

  
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
          <ErrorComp/>
          :
          <div className="container gap20px">
                <div className="nav-buttons">
                  <BackButton/>
                  <h2 className="padding0 margin0">Page {startIndex/postsLimit + 1}</h2>
                  <NextButton/>                  
                </div>
                
                <div className="posts-container gap20px">

                {postsData.map((post) => {
                    if (post.id > startIndex && post.id <= startIndex + postsLimit) 
                      return (        
                        <div key={post.id} className="post-card">
                          <h3><span>{post.id}: </span>{post.title}</h3>
                          <p>{post.body}</p>
                        </div>
                        )
                      }
                    )}
                    </div>
                    <div className="nav-buttons">
                  <BackButton/>
                  <div className="pages-num">
                    {startIndex/postsLimit !== 0 && <p>{startIndex/postsLimit}</p>}
                    <p className='active-page-num'>{startIndex/postsLimit + 1}</p>
                    {startIndex + postsLimit < postsData.length && <p>{startIndex/postsLimit + 2}</p>}
                  </div>
                  <NextButton/>
                </div>
              
      </div>
      }
    </div>
  );
}

export default App
