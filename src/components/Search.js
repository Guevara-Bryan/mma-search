import "../styles/effects.css"
import { useState } from "react";
import axios from "axios";

const Search = ({data, dataModifiers}) => {
    const endpoint = "http://159.203.11.232:8080/query";

    const [query, setQuery] = useState("");
    const [count, setCount] = useState(5);

    function checkQueryInput(){
        if(query.length > 0){
            return true;
        }
        return false;
    }
    function checkCountInput(){
        if(count > 0){
            return true;
        }
        return false;
    }
    
    
    function queryPostRequest(){
        if(!(checkQueryInput() && checkCountInput())){
            return;
        }

        axios.post(endpoint, {
            query: query,
            count: count
        })
        .then(res => {
            console.log(res.data);
            dataModifiers.setSearchResults(res.data);
            dataModifiers.setHasResults(true);
        })
        .catch(err => {
            console.log(err);
        });
    }

    
    function updateQuery(e){
        setQuery(e.target.value);
    }

    function updateCount(e){
        setCount(parseInt(e.target.value));
    }

    return (
        <div className="search">
            <input className="page-search-query" type="text" placeholder="Query" onChange={ updateQuery } />
            <input className="page-search-count" type="text" placeholder="Count" onChange={ updateCount }/>
            <button className="button-effect" onClick={ queryPostRequest }>Search</button>
        </div>
    );
}


export default Search;