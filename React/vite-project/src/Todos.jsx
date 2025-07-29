import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import {
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router";
import ConnectionErrorComp from "./ConnectionErrorComp.jsx"

function Todos() {
  let navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [todosData, settodosData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reloadState, setReloadState] = useState(false);
  const todosLimit = 10;

  const NextButton = () => (
    <button 
      disabled={startIndex + todosLimit >= todosData.length} 
      onClick={() => setStartIndex((startIndex) => startIndex + todosLimit)}
      >
      Next
    </button>
  )
  const BackButton = () => (
    <button 
      disabled={startIndex <= 0} 
      onClick={() => setStartIndex((startIndex) => startIndex - todosLimit)}
      >
      Back
    </button>
  )
  
  useEffect(() => {
    
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        settodosData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Todos:", error);
        setErrorMessage(error.message)
      });
  }, [reloadState]);

  return (
    <div className="main-container"
      >
      <h1>Todos: {todosData.length}</h1>
      {
        todosData.length === 0 ? 
          <ConnectionErrorComp errorMessage={errorMessage} setReloadState={setReloadState}/>
          :
          <div className="container">
                <div className="nav-buttons">
                  <BackButton/>
                  <h2 className="padding0 margin0">Page {startIndex/todosLimit + 1}</h2>
                  <NextButton/>                  
                </div>
                
                {/* <div className="Todos-container gap20px"> */}
                  
              <Grid container spacing={2}>
                {todosData.map((todo) => {
                    if (todo.id > startIndex && todo.id <= startIndex + todosLimit) 
                      return (        
                        <Grid size={{ xs: 12, md: 6 }} key={todo.id}>
                            <div onClick={()=> navigate(`/userTodos/${todo.userId}`)} key={todo.id} className="post-card">
                              <h4>📌<span>{todo.id}: </span>{todo.title}</h4>
                              <p><strong>User id:</strong> {todo.userId}</p>
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
                    {startIndex >= todosLimit * 2 && startIndex/todosLimit + 1 !== 1 && <p onClick={()=> setStartIndex(0)}>1</p>}                    
                    {startIndex > todosLimit && <p>...</p>}
                    {startIndex/todosLimit > 0 && <p onClick={()=> setStartIndex(startIndex - todosLimit)}>{startIndex/todosLimit}</p>}
                    <p className='active-page-num'>{startIndex/todosLimit + 1}</p>
                    {startIndex + todosLimit < todosData.length && <p onClick={()=> setStartIndex(startIndex + todosLimit)}>{startIndex/todosLimit + 2}</p>}
                    {startIndex + todosLimit < todosData.length - todosLimit && <p>...</p>}
                    {startIndex + todosLimit < todosData.length - todosLimit && <p onClick={()=> setStartIndex(todosData.length - todosLimit)}>{todosData.length / todosLimit}</p>}
                  </div>
                  <NextButton/>
                </div>
            
      </div>
      }
    </div>
  );
}

export default Todos
