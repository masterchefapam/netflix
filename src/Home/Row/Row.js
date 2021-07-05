import React,{useState,useEffect} from 'react';
import './row.css';
import axios from '../../axios';


const Row = ({title,fetchUrl,isLargeRow = false}) => {
    const [movies,setMovies] = useState([]);

    const base_url = 'https://images.tmdb.org/t/p/original/';

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
        }
        fetchData();
    },[fetchUrl])
      
       console.log(movies);
    return (
        <div className="row">
           <h2>{title} </h2>
           <div>
              <div className="row__posters">
                {movies.map(movie=>(
                    <img 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}/>
                ))}
            </div>
              </div>
              
        </div>
    );
}

export default Row;
