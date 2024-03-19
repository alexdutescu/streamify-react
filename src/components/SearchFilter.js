import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';


async function FetchMovies(searchTerm) {
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(false);
    var errorresp;
    const API_KEY = "";

    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
        console.log(`Filter value: ${response.data.Search}`);
        if (response.data.Response === "True") {
            return response.data.Search;
        } else {
            errorresp = response.data.Error;
        }
    } catch (error) {
        errorresp = error;
    } finally {
        //setLoading(false);
    }
    return errorresp;
};

export default function SearchFilter() {
    const [filterValue, setFilterValue] = useState('');

    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log(`Filter value: ${filterValue}`);
        
        const fetchMovies = async() => {
            const response = await FetchMovies(filterValue);
            // console.log(`Filter value effect: ${response}`);
            dispatch({type: "QUERY_MOVIES", payload: response});
        };
        if (filterValue.length > 2) { 
            fetchMovies(); 
        } else {
            dispatch({type: "EMPTY_MOVIES"});
        }
            
    }, [filterValue]);

    return (
        <label>
            Search movie: <input name="filterInput" value={filterValue} placeholder="ex: Titanic" onChange={(e) => setFilterValue(e.target.value)} />
        </label>
    );
}