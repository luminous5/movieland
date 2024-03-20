import {useEffect, useState} from 'react';
import './App.css'
import SearchIcon from './search.svg'
import Movie from './Movie'

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=2f016ff9';

const App = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={SearchIcon}
                alt="Search"
                onClick={() => {}} 
            />
                
        </div>

        {loading ? 
            (
                <p>Loading data ...</p>
            ) : 
            (
                <div>
                    {data?.length > 0 && 
                          <div className="container">
                          {data.map(movie => {
                              return <Movie movie={movie} />
                          })}
                    </div>}
                    {data?.length === 0 && 
                        <div className="empty">
                            <h1>There are no movies.</h1> 
                        </div>
                    }
                </div>
            )
        }

       </div>
    );
}

export default App;