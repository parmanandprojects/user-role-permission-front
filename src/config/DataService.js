import axios from "axios";

export const dataService=axios.create({
    baseURL:"http://127.0.0.1:3050/api/",
    
});
export const imageURL="http://127.0.0.1:3050/profile/"
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';