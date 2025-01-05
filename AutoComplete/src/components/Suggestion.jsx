/* eslint-disable react/prop-types */


const Suggestion = ({
    suggestions=[],
    hightlight,
    datakey,
    onSuggestionClick
}) => {
  return (
    <>
    {suggestions.map((suggestion,index)=>{
        return (

            <li key={index} onClick={()=>onSuggestionClick(suggestion)}>
                
            </li>
        )

    })}
    </>
  )
}

export default Suggestion