
import './App.css'
import AutoComplete from './components/AutoComplete'

function App() {


  const fetchSuggestion  = async(query)=>{

    const response = await fetch(`
      https://dummyjson.com/recipes/search?q=${query}
    `)
    if(!response.ok){
      throw new Error(response.statusText)
    }

    const results = response.json();
    return results;

  }

  return (
    <div>
        <h1>Auto Complete / TypeHead component </h1>
        <AutoComplete placeholder={"Enter a search term"}
        fetchSuggestion={fetchSuggestion}
        datakey={"name"}       
        customLoader={<>Loading....</>}
        onSelect={(res)=>console.log(res)}
        onChange={()=>{}}
        onBlur={()=>{}}
        onFocus={()=>{}}
        />
    </div>
  )
}

export default App
