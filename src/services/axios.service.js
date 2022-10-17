import axios from "axios";

import {baseURL} from "../configs";
import {token} from "../token";


const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
});


export {
    axiosService
}