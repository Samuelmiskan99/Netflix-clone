import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../../Context/AuthContext';
import { db } from '../../firebase/FirebaseConfig.';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Movies = ({ item, index }) => {
   const [isMovieLiked, setIsMovieLiked] = useState(false);
   const { user } = UserAuth();

   const [savedMovies, setSavedMovies] = useState(false);

   const movieID = doc(db, 'users', `${user?.email}`);
   const saveMovie = async () => {
      if (user?.email) {
         setIsMovieLiked(true);
         setSavedMovies(true);
         await updateDoc(movieID, {
            savedShows: arrayUnion({
               id: item.id,
               title: item.title,
               img: item.backdrop_path,
            }),
         });
      } else {
         toast.warning('Please log in to save a movie');
      }
   };
   return (
      <>
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
               <p className='absolute top-4 left-4 text-gray-300 ' onClick={saveMovie}>
                  {isMovieLiked ? <FaHeart /> : <FaRegHeart />}
               </p>
            </div>
         </div>
      </>
   );
};

export default Movies;
