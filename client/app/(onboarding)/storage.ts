import * as SecureStore from "expo-secure-store";
import {jwtDecode} from "jwt-decode"


const key = "authToken";

const storeToken= async(value:string)=>{
    try {
        if(typeof value !== "string"){
            console.error("Token must be a string but got:", typeof value);
            return;
        }
        
        await SecureStore.setItemAsync(key,value);
    } catch (error) {
        console.log("Error while storing token in the store",error)
    }
}


const getToken= async () : Promise<string | null>=>{
    try {
        
       return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.error("Error while getting the token");
    }
    return null;
}



const removeToken= async ()=>{
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error while removing token",error);
        
    }
}

const getUser = async ()=>{
    const token= await getToken();
    if(!token) return null;
    const decoded: any= jwtDecode(token);
    const isTokenExpired = decoded.exp *1000 < Date.now(); 
    
    return isTokenExpired  ? null : decoded;
}


export default {
    getToken,
    storeToken,
    getUser,
    removeToken
}