import axios from "axios"

export const server= {
    baseUrl: `http://10.12.72.202:5000/api/v1`
}

export const apiClient= axios.create({
    baseURL: server.baseUrl,
    headers:{
        "Content-Type":"application/json",
    }
})