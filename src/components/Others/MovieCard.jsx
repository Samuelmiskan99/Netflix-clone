import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ title, fetchUrl, tvShowUrl }) => {
   const [allMovies, setAllMovies] = useState([]);
   const [tvShows, setTvShows] = useState([]);
   const [isLiked, setIsLiked] = useState(false);

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
               {/* Maping all movies from API's */}
               {allMovies.map((item, index) => (
                  <div
                     key={index}
                     className='w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                     <img
                        className='w-full h-auto object-contain block'
                        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                        alt={item?.title}
                     />
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full whitespace-normal'>
                           {item?.title}
                        </p>
                        <p className='absolute top-4 left-4 text-gray-300'>
                           {isLiked ? <FaHeart /> : <FaRegHeart />}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            {/* Maping Trending Tv Shows */}
            <div id={'slider'}>
               {tvShows.map((tv, id) => (
                  <div
                     key={id}
                     className='w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                     <img
                        className='w-full h-auto object-contain block'
                        src={`https://image.tmdb.org/t/p/w500/${tv?.backdrop_path}`}
                        alt={tv?.original_name}
                     />
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full whitespace-normal'>
                           {tv?.original_name}
                        </p>
                        <p className='absolute top-4 left-4 text-gray-300'>
                           {isLiked ? <FaHeart /> : <FaRegHeart />}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default MovieCard;
