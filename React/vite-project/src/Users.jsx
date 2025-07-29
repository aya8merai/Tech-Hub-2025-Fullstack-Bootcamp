import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import {
  Grid,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import ConnectionErrorComp from "./ConnectionErrorComp.jsx"
import { useNavigate } from "react-router";

function Users() {
  let navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [UsersData, setUsersData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reloadState, setReloadState] = useState(false);
  const UsersLimit = 10;

  const NextButton = () => (
    <button 
      disabled={startIndex + UsersLimit >= UsersData.length} 
      onClick={() => setStartIndex((startIndex) => startIndex + UsersLimit)}
      >
      Next
    </button>
  )
  const BackButton = () => (
    <button 
      disabled={startIndex <= 0} 
      onClick={() => setStartIndex((startIndex) => startIndex - UsersLimit)}
      >
      Back
    </button>
  )
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsersData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Users:", error);
        setErrorMessage(error.message)
      });
  }, [reloadState]);

  return (
    <div className="main-container"
      >
      <h1>Users: {UsersData.length}</h1>
      {
        UsersData.length === 0 ? 
          <ConnectionErrorComp errorMessage={errorMessage} setReloadState={setReloadState}/>
          :
          <div className="container">
                <div className="nav-buttons">
                  <BackButton/>
                  <h2 className="padding0 margin0">Page {startIndex/UsersLimit + 1}</h2>
                  <NextButton/>                  
                </div>
                
                {/* <div className="Users-container gap20px"> */}
                  
              <Grid container spacing={2}>
                {UsersData.map((user) => {
                    if (user.id > startIndex && user.id <= startIndex + UsersLimit) 
                      return (
                        <Grid size={{ xs: 12, md: 6 }} key={user.id}>
                          <Card  onClick={()=> navigate(`/userTodos/${user.id}`)} variant="outlined"  className="post-card">
                            <CardContent sx={{ height: '100%' }} key={user.id} >
                              <p><strong>{user.name}</strong> (@{user.username})</p>                              
                              <p>📧 {user.email}</p>
                              <p>☎️ {user.phone}</p>
                              <p>🌐 {user.website}</p>
                              <Divider />
                              <p><strong>Company:</strong> {user.company.name}</p>
                              <p>“{user.company.catchPhrase}”</p>
                              <Divider />
                              <p><strong>Address:</strong></p>
                              <p>{user.address.street}, {user.address.suite}</p>
                              <p>{user.address.city}, {user.address.zipcode}</p>
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
                    {startIndex/UsersLimit !== 0 && <p>{startIndex/UsersLimit}</p>}
                    <p className='active-page-num'>{startIndex/UsersLimit + 1}</p>
                    {startIndex + UsersLimit < UsersData.length && <p>{startIndex/UsersLimit + 2}</p>}
                  </div>
                  <NextButton/>
                </div>
            
      </div>
      }
    </div>
  );
}

export default Users
