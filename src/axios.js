import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f3508.cloudfunctions.net/api", //API URL
});

export default instance;
