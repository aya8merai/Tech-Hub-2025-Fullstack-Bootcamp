import './App.css'
import { CircularProgress } from "@mui/material";

const ConnectionErrorComp = ( {errorMessage, setReloadState} ) => (
    <div className="container">
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
          <h2>
            {'Loading...'}<CircularProgress />
          </h2>
          <p>{'This may take a moment.'}</p>
        </> 
      }
    </div>)
export default ConnectionErrorComp
