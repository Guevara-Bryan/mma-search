import "../styles/effects.css"
import { useState } from "react";
import axios from "axios";

const Search = ({data, dataModifiers}) => {
    const endpoint = "http://159.203.11.232:8080/query";

    function checkQueryInput(){
        if(data.searchQuery.length > 0){
            return true;
        }
        return false;
    }
    function checkCountInput(){
        if(data.searchCount > 0){
            return true;
        }
        return false;
    }
    
    
    function queryPostRequest(){
        if(!(checkQueryInput() && checkCountInput())){
            return;
        }

        axios.post(endpoint, {
            query: data.searchQuery,
            count: data.searchCount
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
        dataModifiers.setSearchQuery(e.target.value);
    }

    function updateCount(e){
        dataModifiers.setSearchCount(parseInt(e.target.value));
    }

    return (
        <div className="search">
            <input className="page-search-query" type="text" defaultValue={data.searchQuery} placeholder="Query" onChange={ updateQuery } />
            <input className="page-search-count" type="text" defaultValue={data.searchCount} placeholder="Count" onChange={ updateCount }/>
            <button className="button-effect" onClick={ queryPostRequest }>Search</button>
        </div>
    );
}


export default Search;