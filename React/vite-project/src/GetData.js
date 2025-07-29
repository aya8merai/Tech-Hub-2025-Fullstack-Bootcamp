import axios from "axios";
// import {JSON_API_URL} from "./baseURL.js"

function GetData({ setGetData, setErrorMessage, endPoint }) {
  axios
    .get(`https://jsonplaceholder.typicode.com${endPoint}`)
    .then((response) => {
      setGetData(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
      setErrorMessage(error.message)
    });
}

export default GetData
