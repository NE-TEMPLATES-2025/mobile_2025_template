import { useEffect, useState } from "react"

export const useDebounce  = <T>(delay:number,value:T) :T=>{

    const [searchValue,setSearchValue]=useState<T>(value);


    useEffect(()=>{
     const handler= setTimeout(()=>{

            setSearchValue(value);
        },delay)

        return ()=> clearTimeout(handler);

    },[delay])
    return searchValue;


}