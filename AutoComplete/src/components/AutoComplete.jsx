/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import "./style.css"
import Suggestion from "./Suggestion";
const AutoComplete = ({
    palceholder = '',
    fetchSuggestion,
    datakey = '',      
    customLoader='Wait Loading component',
    onSelect,
    onChange = ()=>{},
    onBlur= ()=>{},
    onFocus= ()=>{},
}) => {

    const [inputVal, setInputVal] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const handleInputChange = (e)=>{
        setInputVal(e.target.value)
        onChange(e.target.value)
    }

   

    const getSuggestions = async (query)=>{
        setError(null);
        setLoading(true);

        try{
            let results
            if(fetchSuggestion){
                results = await fetchSuggestion(query);
            }

            setSuggestions(results);

        }catch(error){

            setError("Failed to fecth")
            setSuggestions([]);
        }finally{
            setLoading(false);
        }
    }
    console.log(suggestions);

    useEffect(()=>{

        if(inputVal.length>1){
            getSuggestions(inputVal);
        }else{
            setSuggestions([]);
        }

    },[inputVal])
  return (
    <div className="container">
        <input
        type="text"
        value={inputVal}
        placeholder={palceholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleInputChange}
        // eslint-disable-next-line react/no-unknown-property
        fetchSuggestion={fetchSuggestion}
        />

        {(suggestions.length>0 || loading || error)&&(
             <ul>
             {error && <div>{error}</div>}
             {loading && <div>{customLoader}</div>}
             <Suggestion/>
             </ul>
        )}
       
        
    </div>
  )
}

export default AutoComplete