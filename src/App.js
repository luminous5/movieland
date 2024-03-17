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
        {loading ? 
            (
                <p>Loading data ...</p>
            ) : 
            (
                <p>Data : {JSON.stringify(data)}</p>
            )
        }
       </div>
    );
}

export default App;