import { Link } from 'react-router-dom';
const Navbar = () => {
   return (
      <div className='p-4 flex justify-between items-center z-[100] w-full absolute'>
         <h1 className='text-4xl font-bold cursor-pointer text-red-600'>NETFLIX</h1>
         <div>
            <Link to='/login'>
               <button className='mr-4 '>Sign In</button>
            </Link>
            <Link to='/signup'>
               <button className='rounded-lg bg-red-500 px-4 py-2'>Sign Up</button>
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
