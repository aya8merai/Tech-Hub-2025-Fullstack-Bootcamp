import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import {
  Grid,
} from "@mui/material";
import ConnectionErrorComp from "./ConnectionErrorComp.jsx"
import { useNavigate, useParams } from "react-router";

function UserTodos() {
  let {id} = useParams()
  let navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [userTodosData, setUserTodosData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reloadState, setReloadState] = useState(false);
  const userTodosLimit = 10;

  const NextButton = () => (
    <button 
      disabled={startIndex + userTodosLimit >= userTodosData.length} 
      onClick={() => setStartIndex((startIndex) => startIndex + userTodosLimit)}
      >
      Next
    </button>
  )
  const BackButton = () => (
    <button 
      disabled={startIndex <= 0} 
      onClick={() => setStartIndex((startIndex) => startIndex - userTodosLimit)}
      >
      Back
    </button>
  )
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => {
        setUserTodosData(response.data);
        console.log(response.data);
        // console.log(response.data[0].id);
        // setStartIndex(response.data[0].id)
      })
      .catch((error) => {
        console.error("Error fetching UserTodos:", error);
        setErrorMessage(error.message)
      });
  }, [reloadState, id]);

  return (
    <div className="main-container">
      <h1  onClick={()=> navigate(-1)} >User {id} Todos: {userTodosData.length}</h1>
      {
        userTodosData.length === 0 ? 
          <ConnectionErrorComp errorMessage={errorMessage} setReloadState={setReloadState}/>
          :
          <div className="container">
                <div className="nav-buttons">
                  <BackButton/>
                  <h2 className="padding0 margin0">Page {startIndex/userTodosLimit + 1}</h2>
                  <NextButton/>                  
                </div>
                
                {/* <div className="UserTodos-container gap20px"> */}
                  
              <Grid container spacing={2}>
                {userTodosData.map((todo, idx) => {
                    if (idx >= startIndex && idx < startIndex + userTodosLimit) 
                      return (        
                        <Grid size={{ xs: 12, md: 6 }} key={todo.id}>
                            <div key={todo.id} className="post-card">
                              <h4>📌<span>{todo.id}: </span>{todo.title}</h4>
                              <p><strong>completed:</strong> {todo.completed ? '✅': '❌'}</p>
                            </div>
                        </Grid>
                        )
                      }
                    )}  
                  </Grid>
                    {/* </div> */}
                    <div className="nav-buttons">
                  <BackButton/>
                  <div className="pages-num">                    
                    {startIndex >= userTodosLimit * 2 && startIndex/userTodosLimit + 1 !== 1 && <p onClick={()=> setStartIndex(0)}>1</p>}                    
                    {startIndex > userTodosLimit && <p>...</p>}
                    {startIndex/userTodosLimit > 0 && <p onClick={()=> setStartIndex(startIndex - userTodosLimit)}>{startIndex/userTodosLimit}</p>}
                    <p className='active-page-num'>{startIndex/userTodosLimit + 1}</p>
                    {startIndex + userTodosLimit < userTodosData.length && <p onClick={()=> setStartIndex(startIndex + userTodosLimit)}>{startIndex/userTodosLimit + 2}</p>}
                    {startIndex + userTodosLimit < userTodosData.length - userTodosLimit && <p>...</p>}
                    {startIndex + userTodosLimit < userTodosData.length - userTodosLimit && <p onClick={()=> setStartIndex(userTodosData.length - userTodosLimit)}>{userTodosData.length / userTodosLimit}</p>}
                  </div>
                  <NextButton/>
                </div>
            
      </div>
      }
    </div>
  );
}

export default UserTodos

// import { useEffect, useState } from "react";
// // import GetData from "./GetData.js";
// import axios from "axios";
// import {JSON_API_URL} from "./baseURL.js"
// import './App.css'
// import ConnectionErrorComp from "./ConnectionErrorComp.jsx"
// import { useNavigate, useParams } from "react-router";

// function Todo() {
//   let {id} = useParams()
//   let navigate = useNavigate();
//   const [todo, setTodo] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [reloadState, setReloadState] = useState(false);  
  
//   useEffect(() => {
//     // GetData(setTodo, setErrorMessage, `/userTodos/${id}`) 
//     axios
//       .get(`${JSON_API_URL}/userTodos/${id}`)
//       .then((response) => {
//         setTodo(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching userTodos:", error);
//         setErrorMessage(error.message)
//       });
//   }, [reloadState, id]);


//   return (
//     <div className="main-container"
//       >
//       <h1>Todo No.{id}</h1>
//       {
//         todo.length === 0 ?                     
//           <ConnectionErrorComp errorMessage={errorMessage} setReloadState={setReloadState}/>
//           :
//           <div className="container gap20px">
//             <div key={todo.id} className="todo-card">
//               <h3><span>{todo.id}: </span>{todo.title}</h3>
//               <p>{todo.body}</p>
//             </div>
//             <button onClick={()=> navigate(-1)}>Back</button>
//           </div>
//       }
//     </div>
//   );
// }

// export default Todo
