import axios from 'axios';
import { useEffect, useState } from 'react';

import Movies from '../Api Map/Movies';
import TvShows from '../Api Map/TvShows';

const MovieCard = ({ title, fetchUrl, tvShowUrl }) => {
   const [isLiked, setIsLiked] = useState(false);
   const [allMovies, setAllMovies] = useState([]);
   const [tvShows, setTvShows] = useState([]);

   // Catch all movies from TMDB API
   useEffect(() => {
      async function fetchAllMovies() {
         if (!fetchUrl) return; // Check if fetchUrl is defined
         try {
            const { data } = await axios.get(fetchUrl);
            setAllMovies(data.results);
         } catch (error) {
            console.error('Error fetching movies:', error);
         }
      }
      fetchAllMovies();
   }, [fetchUrl]);

   // Catch all TV shows from TMDB API
   useEffect(() => {
      async function fetchTvShows() {
         if (!tvShowUrl) return; // Check if tvShowUrl is defined
         try {
            const { data } = await axios.get(tvShowUrl);
            setTvShows(data.results);
         } catch (error) {
            console.error('Error fetching TV shows:', error);
         }
      }
      fetchTvShows();
   }, [tvShowUrl]);

   return (
      <>
         <h2 className='font-bold md:text-xl  p-4'>{title}</h2>
         <div className='relative flex items-center group'>
            <div id={'slider'}>
               {/* Maping all movies from API's through Movies Component */}
               {allMovies.map((item, index) => (
                  <Movies key={index} item={item} isLiked={isLiked} />
               ))}
            </div>
            {/* Maping Trending Tv Shows Through tvShows Component*/}
            <div id={'slider'}>
               {tvShows.map((tv, id) => (
                  <TvShows key={id} tv={tv} isLiked={isLiked} />
               ))}
            </div>
         </div>
      </>
   );
};

export default MovieCard;
