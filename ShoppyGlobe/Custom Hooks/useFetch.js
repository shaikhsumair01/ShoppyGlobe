import { useState,useCallback, useEffect} from "react";
export const useFetch = (url,dataobj) =>{
    const [data, reqdata] = useState([]);
    const [error,setError] = useState(null);
    const [load, setload] = useState(true);

    const fetchData = useCallback(async()=>{
        try{
        const res = await fetch(url,dataobj)
        const data  = await res.json();
        reqdata(data);
        setload(false);
    } catch(err){
        setError(err);
        setload(false);
    }
}, [url, JSON.stringify(dataobj)]);
useEffect(() => {
    fetchData();
}, [url, JSON.stringify(dataobj)]);

return { data, load, error, reFetch: fetchData };

}