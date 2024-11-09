import { useEffect, useState } from 'react';
import Request from '../../Request/Request';
import axios from 'axios';
const MainComponent = () => {
   const [movies, setMovies] = useState([]);

   const movie = movies[Math.floor(Math.random() * movies.length)];

   useEffect(() => {
      async function fetchMovies() {
         const { data } = await axios.get(Request.requestPopular);
         setMovies(data.results);
      }
      console.log(movie);

      fetchMovies();
   }, []);
   return (
      <div className='w-full h-[550px]'>
         <div className='w-full h-full'>
            <img
               className='w-full h-full object-cover'
               src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
               alt={movie?.title}
            />
         </div>
      </div>
   );
};

export default MainComponent;
