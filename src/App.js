import {useEffect, useState} from 'react';
import './App.css'
import SearchIcon from './search.svg'
import Movie from './Movie'

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=2f016ff9';

const App = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const result = await response.json();
    
            console.log(data)
            setData(result.Search);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            
            searchMovies(searchTerm)
        }
    }

    // useEffect(() => {
    //     searchMovies('Superman')

    //   }, []);

    return (
       <div className="app">
        <h1>Movie Search</h1>
        <div className='search'>
            <input placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <img src={SearchIcon}
                alt="Search"
                onClick={() => searchMovies(searchTerm)} 
            />
                
        </div>

        {loading  ? 
            (
                <p>Loading data ...</p>
            ) : 
            (
                <div>

                    {(typeof data === 'undefined') && 
                        <div className="empty">
                            <h1>There are no movies.</h1> 
                        </div>
                    }

                    {data?.length > 0 && 
                          <div className="container">
                          {data.map((movie, index) => {
                              return <Movie key={index} movie={movie} />
                          })}
                    </div>}
                
                </div>
            )
        }

       </div>
    );
}

export default App;