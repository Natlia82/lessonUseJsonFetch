import React, {useState, useEffect, useRef} from "react";

function useJsonFetch(url, opts) {
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);
    const [flag, setFlag] = useState(null);
    const timestampRef = useRef();

    useEffect(() => {
        const fethNews = async() => {
            const timestap = Date.now();
            timestampRef.current = timestap;
            setFlag(true);
            try {
             // console.log(url)   
              const response = await fetch(url);  
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              const rez = await response.json();
             // console.log(rez);
              if (timestampRef.current === timestap) {
                setData(rez);
              }
              setErr(null);
              
            } catch (e) {
                setErr(e);
            } finally {
                setFlag(false);
            }

        }
        fethNews();
        return () => {setData([]); }
    }, []);


    return [{data, err, flag}]

}

export default useJsonFetch;