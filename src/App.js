import {useEffect, useState} from 'react';
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=2f016ff9';

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
            <div className="movie">
                <div>
                    <p>
                        {movie.Year}
                    </p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder/400'} alt={movie.Title}/>
                </div>
            </div>
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