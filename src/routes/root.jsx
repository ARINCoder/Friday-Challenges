import React from 'react'
import { useState, useEffect } from 'react'
import '../routes/root.css'

const Root = () => {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchMovies = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d3adc528937c14b4044f9ee3bf46f522'
            const response = await fetch(url)
            const moviedata = await response.json()
            setMovie(moviedata.results)
        };

        fetchMovies();

    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const searchMovie = async () => {
        if (!search)
            return;
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d3adc528937c14b4044f9ee3bf46f522'
        const response = await fetch(url)
        const moviedata = await response.json()
        setMovie(moviedata.results)
    }

    return (

        <>
            <div id="sidebar">
                <h1>Enter Whatever You Want To Search </h1>
                <input
                    placeholder='Enter Here!'
                    onChange={handleSearch}
                    value={search}
                    type="text" />
                <button onClick={searchMovie}>
                    Search Here
                </button>
            </div>

        </>
    )
}

export default Root