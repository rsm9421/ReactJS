import {useEffect , useState} from "react"

function useCurrencyinfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.rates))
    },[currency])
    return data

}
export default useCurrencyinfo;