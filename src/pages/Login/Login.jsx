import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BG_NETFLIX from '../../assets/pictures/netflix-bg.jpg';
import { Link } from 'react-router-dom';
const Login = () => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <div
         className='relative flex items-center justify-center min-h-screen bg-cover bg-center'
         style={{ backgroundImage: `url(${BG_NETFLIX})` }}>
         {/* Dark overlay on the background only */}
         <div className='absolute inset-0 bg-black opacity-60'></div>

         {/* Form content */}
         <div className='relative z-10 bg-black bg-opacity-70 p-8 rounded-md max-w-sm w-full space-y-6'>
            <h2 className='text-3xl font-semibold text-white py-3'>Masuk</h2>
            <form className='space-y-4'>
               <div>
                  <input
                     type='text'
                     placeholder='Email atau nomor ponsel'
                     className='w-full p-3 rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
                  />
               </div>

               <div className='relative'>
                  <input
                     type={showPassword ? 'text' : 'password'}
                     placeholder='Sandi'
                     className='w-full p-3 rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
                  />
                  <button
                     type='button'
                     onClick={() => setShowPassword(!showPassword)}
                     className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white'>
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
               </div>

               <button
                  type='submit'
                  className='w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold'>
                  Daftar
               </button>
            </form>

            <div className='flex justify-between items-center text-gray-400 text-sm mt-4 py-5'>
               <label className='flex items-center'>
                  <input type='checkbox' className='mr-2' />
                  Ingat saya
               </label>
               <a href='#' className='hover:underline'>
                  Lupa sandi?
               </a>
            </div>

            <div className='text-center text-gray-400 text-sm mt-6'>
               <Link to='/signup'>
                  Baru di Netflix?{' '}
                  <a href='#' className='text-white hover:underline'>
                     Daftar sekarang.
                  </a>
               </Link>
               <p className='text-xs mt-10'>
                  Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan kamu bukan bot.
                  <a href='#' className='text-blue-400 hover:underline'>
                     Pelajari selengkapnya.
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
