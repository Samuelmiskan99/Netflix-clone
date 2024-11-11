import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Movies from '../Api Map/Movies';
import TvShows from '../Api Map/TvShows';

const MovieCard = ({ title, fetchUrl, tvShowUrl, scrollID }) => {
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

   // Handle slide left and right
   const slideLeft = () => {
      const slider = document.querySelector('.slider' + scrollID);
      slider.scrollLeft = slider.scrollLeft - 500;
   };
   const slideRight = () => {
      const slider = document.querySelector('.slider' + scrollID);
      slider.scrollLeft = slider.scrollLeft + 500;
   };

   return (
      <>
         <h2 className='font-bold md:text-xl  p-4'>{title}</h2>
         <div className='relative flex items-center group'>
            <MdChevronLeft
               onClick={slideLeft}
               size={40}
               className='bg-transparent left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-white'
            />
            <div
               className={`w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative slider${scrollID}`}>
               {allMovies.map((item, index) => (
                  <Movies key={index} item={item} />
               ))}
               {/* Maping all movies from API's through tvShows Component */}
               {tvShows.map((tv, id) => (
                  <TvShows key={id} tv={tv} />
               ))}
            </div>
            <MdChevronRight
               onClick={slideRight}
               size={40}
               className='bg-transparent right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-white  '
            />
         </div>
      </>
   );
};

export default MovieCard;
