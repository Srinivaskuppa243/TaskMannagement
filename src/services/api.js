import axios from "axios";
//Creating the instance of an api for fetching the data from backend server
const api=axios.create({
    baseURL:"http://localhost:5020/",
    headers:"application/json"
})

export default api