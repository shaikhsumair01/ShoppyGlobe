import { useState,useCallback, useEffect} from "react";
// A custom hook used for fetching the data from the api passed by the user 
// and converting them to objects for rendering

export const useFetch = (url,dataobj) =>{
    const [data, reqdata] = useState([]); // initially empty object, updates when retrieves the data 
    const [error,setError] = useState(null); //setting error message for when the fetch api fails to get the data 
    const [load, setload] = useState(true); // setting loading for the fetch api

    const fetchData = useCallback(async()=>{
        try{
        const res = await fetch(url,dataobj) // getting the data
        const data  = await res.json(); // parsing it from json format
        reqdata(data);
        setload(false); // setting load to false so that it doesn't show the loading status
    } catch(err){
        setError(err); 
        setload(false);
    }
}, [url, JSON.stringify(dataobj)]); // will work as long as the data doesn't change
useEffect(() => {
    fetchData();
}, [url, JSON.stringify(dataobj)]);

return { data, load, error, reFetch: fetchData };

}