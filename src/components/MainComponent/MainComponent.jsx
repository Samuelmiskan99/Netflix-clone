import { useEffect, useState } from 'react';
import Request from '../../Request/Request';
import axios from 'axios';

import { FaPlay } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const MainComponent = () => {
   const [movies, setMovies] = useState([]);

   // Select a random movie from the list
   const movie = movies[Math.floor(Math.random() * movies.length)];

   useEffect(() => {
      async function fetchMovies() {
         const { data } = await axios.get(Request.requestNowPlaying);
         setMovies(data.results);
      }

      fetchMovies();
   }, []);

   // Function to truncate a string if it exceeds a specific length
   const truncateString = (str, num) => {
      if (str?.length > num) {
         return str.slice(0, num) + '...';
      } else {
         return str;
      }
   };

   return (
      <div className='w-full h-[600px] relative'>
         <div className='absolute w-full h-full bg-gradient-to-r from-black/80 via-transparent to-black/40' />
         <div className='absolute w-full h-full bg-gradient-to-t from-black/90 to-transparent' />
         {movie ? (
            <>
               <img
                  className='w-full h-full object-cover'
                  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  alt={movie?.title}
               />
               <div className='absolute top-[20%] w-full p-4 md:p-8 text-white'>
                  <h1 className='text-3xl md:text-5xl font-bold py-5'>{movie?.title}</h1>
                  <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                  <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                     {truncateString(movie?.overview, 200)}
                  </p>
                  <div className='my-10 flex items-center space-x-4'>
                     <button className='flex items-center border bg-gray-200 py-2 px-5 text-black font-semibold text-lg hover:bg-gray-300'>
                        <FaPlay className='mr-2' size={17} />
                        Play
                     </button>
                     <button className='flex items-center border border-white py-2 px-5 text-white font-semibold text-lg hover:bg-white hover:text-black transition-colors'>
                        <IoIosInformationCircleOutline className='mr-2' size={25} />
                        Watch Later
                     </button>
                  </div>
               </div>
            </>
         ) : (
            <div className='flex items-center justify-center w-full h-full text-white'>
               <p>Loading...</p>
            </div>
         )}
      </div>
   );
};

export default MainComponent;
