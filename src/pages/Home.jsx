import MovieCard from '../components/MovieCard'
import { useEffect, useState } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch(error){
                setError("Falied To Load Movies...")
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])
    const handleSearch = async (e) =>{
        // It stops the browser’s normal behavior for that event.
        // Normally, when you submit a form, the browser reloads the page. You can stop that
        // If you click a link (<a>) normally, it will go to another page. You can stop that
        e.preventDefault();
        // trim just removes all leading and trailing spaces from the string not ones in between the words
        if(!searchQuery.trim()) return
        if(loading) return 
        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }catch(err){
            setError("Falied to search movies...")
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" placeholder='Search for movies...' className='search-input' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className='error-message'>{error}</div>}
            {loading? (<div className='loading'>Loading...</div>
            ):(    
            <div className="movies-grid">
                {movies.map((movie)=>(
                    movie.title.toLowerCase().startsWith(searchQuery)&&(<MovieCard movie={movie} key={movie.id}/>)
                ))}
            </div>
            )}
        </div>
    );
}
export default Home