import { useEffect,useState } from "react"

const useFetch = (enpoint:string) => {
    const[data,setData] = useState(null)
        const [isPending,setIsPending] = useState(true)
        const [error,setError] = useState(null)
    useEffect(()=>{

        const abortCont = new AbortController();

        setTimeout(()=>{
        fetch(enpoint,{signal:abortCont.signal})
        .then(res=>{
            if(!res.ok){
            throw Error('could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data=>{
            setTimeout(()=>{
            setData(data)
            setIsPending(false)
            setError(null)
        },1000)
        })
        .catch(err=>{
            if(err.name === 'AbortError') {
                console.log('Aborted')
            }else{
            setError(err.message)
            setIsPending(false)
            }
        })
    },1000);
    return () => abortCont.abort();
    },[enpoint])


    return {data,isPending,error}
}

export default useFetch;