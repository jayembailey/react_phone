import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, []) //Empty brackets here mean that the function will only run once. Place a component name inside to run function every time that particular component is accessed.

    return { contactData, getData:handleDataFetch}
  
}

