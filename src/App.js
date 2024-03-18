import {useEffect, useState} from 'react';
import './App.css'
import SearchIcon from './search.svg'
import Movie from './Movie'

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=2f016ff9';

const movie = {
    Poster: 
"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
Title
: 
"Batman v Superman: Dawn of Justice",
Type
: 
"movie",
Year
: 
"2016",
imdbID
: 
"tt2975590"
}

const App = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(0)

    useEffect(() => {
            const searchMovies = async (title) => {
            try {
                const response = await fetch(`${API_URL}&s=${title}`);
                const result = await response.json();
                setData(result.Search);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        searchMovies('Superman')

      }, []);

      console.log(data);


    return (
       <div className="app">
        <h1>Movie Search</h1>
        <div className='search'>
            <input placeholder='Search for movies'
                value="Superman"
                onChange={() => {}}
            />
            <img src={SearchIcon}
                alt="Search"
                onClick={() => {}} 
            />
                
        </div>
        <div className="container">
            <Movie props={movie} />
        </div>
        {/* {loading ? 
            (
                <p>Loading data ...</p>
            ) : 
            (
                <p>Data : {JSON.stringify(data)}</p>
            )
        } */}
       </div>
    );
}

export default App;