import axios from "axios"

export const server= {
    baseUrl: `http://192.168.1.200/api/v1`
}

export const apiClient= axios.create({
    baseURL: server.baseUrl,
    headers:{
        "Content-Type":"application/json",
    }
})