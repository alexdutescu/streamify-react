import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';


async function FetchMovies(searchTerm) {
    const API_KEY = "8ec8f45d";

    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    //console.log(`Filter value: ${response.data.Search}`);
    if (response.data.Response === "True") {
        return response.data.Search;
    } else {
        throw Error(response.data.Error);
    }
};

export default function SearchFilter() {
    const [filterValue, setFilterValue] = useState('');
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log(`Filter value: ${filterValue}`);
        
        const fetchMovies = async() => {
            dispatch({type: "LOADING_REQUEST"});
            
            setTimeout(async() => {
                try {
                    const response = await FetchMovies(filterValue);
                    dispatch({type: "QUERY_MOVIES", payload: response});
                } catch(error) {
                    console.log(error.message);
                    dispatch({type: "SET_ERROR", payload: error.message});
                }
            }, 1000); //=> this is for loading indicator to last 2s
            
        };
        if (filterValue.length > 2) { 
            fetchMovies(); 
        } else {
            dispatch({type: "EMPTY_MOVIES"});
        }
            
    }, [filterValue]);

    return (
        <div>
            <label>
                Search movie: <input name="filterInput" value={filterValue} placeholder="ex: Titanic" onChange={(e) => {e.preventDefault(); setFilterValue(e.target.value);}} />
            </label> <br/>
            {filterValue.length < 3 && <label style={{fontSize: 12, color:"red"}}>*Type at least 3 characters to start searching</label>}
        </div>
    );
}