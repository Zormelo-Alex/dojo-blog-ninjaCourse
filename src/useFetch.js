import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null)

     useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res => 
                {
                    //if the response ok value is false throw error
                    if(!res.ok){
                        throw Error("Could not fetch the data for that resourse");
                    }
                    return res.json()
                })
            .then(data=>{
                setData(data)
                setIsPending(false)
                setErr(null)
            })
            .catch((err)=> {
                console.log(err.message)
                setErr(err.message);
                setIsPending(false)
            });
        },800);
    },
    //array allows the useEffect to run only once buh you can put dependencies in the array to ensure it reruns when some states are trigered
    [url]);

    
    return {data, isPending, err};
}

export default useFetch;