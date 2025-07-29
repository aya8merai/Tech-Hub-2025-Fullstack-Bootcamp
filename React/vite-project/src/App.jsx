import './App.css'
import {
  Grid,
  Card,
  CardContent
} from "@mui/material";
import { useNavigate } from "react-router";

function App() {
  let navigate = useNavigate();

  return (
    <div className="main-container"
      >
      <h1>Home Page</h1>
      
          <div className="container">
              {/* <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 12 }}> */}
                          <Card onClick={() => navigate('/posts')} variant="outlined"  className="post-card">
                            <CardContent sx={{ height: '100%' }} >
                                    <h3>Posts</h3>
                            </CardContent>
                          </Card>

                          <Card  onClick={() => navigate('/todos')} variant="outlined"  className="post-card">
                            <CardContent sx={{ height: '100%' }} >
                                    <h3>todos</h3>
                            </CardContent>
                          </Card>

                          <Card  onClick={() => navigate('/users')} variant="outlined"  className="post-card">
                            <CardContent sx={{ height: '100%' }} >
                                    <h3>users</h3>
                            </CardContent>
                          </Card>
                        {/* </Grid>
                       
                  </Grid> */}
            
      </div>
      
    </div>
  );
}

export default App
