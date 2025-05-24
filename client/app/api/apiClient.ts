import axios from "axios"
import storage from "../(onboarding)/storage"
export const server= {
    baseUrl: `http://10.12.73.33:5000/api/v1`
}

export const apiClient= axios.create({
    baseURL: server.baseUrl,
    headers:{
        "Content-Type":"application/json",
    }
})


export const protectedApiClient = axios.create({
    baseURL: "http://10.12.73.33:5000/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${storage.getToken()}`,
    }
})