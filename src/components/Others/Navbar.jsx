import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
const Navbar = () => {
   const { user, logOut } = UserAuth();

   const navigate = useNavigate();

   const handleLogout = async () => {
      try {
         await logOut();
         toast.success('Logout Berhasil');
         navigate('/');
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className='p-4 flex justify-between items-center z-[100] w-full absolute'>
         <Link to='/'>
            <h1 className='text-4xl font-bold cursor-pointer text-red-600'>NETFLIX</h1>
         </Link>

         {user?.email ? (
            <div>
               <Link to='/login'>
                  <button className='mr-4 '>Account</button>
               </Link>
               <button onClick={handleLogout} className='rounded-lg bg-red-500 px-4 py-2'>
                  Logout
               </button>
            </div>
         ) : (
            <div>
               <Link to='/login'>
                  <button className='mr-4 '>Sign In</button>
               </Link>
               <Link to='/signup'>
                  <button className='rounded-lg bg-red-500 px-4 py-2'>Sign Up</button>
               </Link>
            </div>
         )}
      </div>
   );
};

export default Navbar;
