import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import { UserAuth } from '../../Context/AuthContext';

import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseConfig.';
import { AiOutlineClose } from 'react-icons/ai';

const SavedShows = () => {
   //all the state that return every function on this savedShows component
   const [allMovies, setAllmovies] = useState([]);
   const { user } = UserAuth();
   const sliderRef = useRef(null); // gunakan useRef untuk slider

   // to make sure everytime the page reload, the data is updated
   useEffect(() => {
      if (user?.email) {
         const unsubscribe = onSnapshot(doc(db, 'users', user.email), (doc) => {
            setAllmovies(doc.data()?.savedShows || []);
         });
         return unsubscribe;
      }
   }, [user?.email]);

   // movieref for deleting movie
   const movieRef = doc(db, 'users', `${user?.email}`);

   // handle for deleting movie
   const deleteFavoriteShow = async (passedID) => {
      try {
         const result = allMovies.filter((item) => item.id !== passedID);
         await updateDoc(movieRef, {
            savedShows: result,
         });
      } catch (error) {
         console.error(error);
      }
   };

   // Handle slide left
   const slideLeft = () => {
      if (sliderRef.current) {
         sliderRef.current.scrollLeft -= 500;
      }
   };

   // Handle slide right
   const slideRight = () => {
      if (sliderRef.current) {
         sliderRef.current.scrollLeft += 500;
      }
   };

   return (
      <div>
         <h2 className='font-bold md:text-xl p-4'>My Favorites Shows</h2>
         <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} size={40} className='bg-transparent left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-white' />
            <div ref={sliderRef} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative slider'>
               {allMovies.map((item, index) => (
                  <div key={index} className='w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                     <img className='w-full h-auto object-contain block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full whitespace-normal'>{item?.title}</p>
                        <p onClick={() => deleteFavoriteShow(item.id)} className='absolute text-gray-300 top-4 right-4'>
                           <AiOutlineClose />
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            <MdChevronRight
               onClick={slideRight}
               size={40}
               className='bg-transparent right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-white'
            />
         </div>
      </div>
   );
};

export default SavedShows;
