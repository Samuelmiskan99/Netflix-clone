import React from 'react';

const Navbar = () => {
   return (
      <div className='p-4 flex justify-between items-center z-[100] w-full absolute'>
         <h1 className='text-4xl font-bold cursor-pointer text-red-600'>NETFLIX</h1>
         <div>
            <button className='mr-4 '>Sign In</button>
            <button className='rounded-lg bg-red-500 px-4 py-2'>Sign Up</button>
         </div>
      </div>
   );
};

export default Navbar;
