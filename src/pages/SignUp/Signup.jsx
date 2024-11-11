import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BG_NETFLIX from '../../assets/pictures/netflix-bg.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { validateEmail, getInitials } from '../../components/Others/Helper';

const Signup = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const [error, setError] = useState(''); // State for error message
   const [passwordValidation, setPasswordValidation] = useState(false);

   const { user, signUp } = UserAuth();
   const navigate = useNavigate();

   // Function to validate email structure using validateEmail helper
   const validateEmailInput = (email) => {
      if (!validateEmail(email) || email.startsWith('@')) {
         setError('Email harus menyertakan nama sebelum simbol @');
         return false;
      } else {
         setError('');
         return true;
      }
   };

   // Function to validate that the password includes a symbol and an uppercase letter
   const validatePassword = (password) => {
      const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
      const uppercaseRegex = /[A-Z]/;

      if (!symbolRegex.test(password)) {
         setPasswordValidation('Password harus menyertakan setidaknya satu simbol.');
         return false;
      } else if (!uppercaseRegex.test(password)) {
         setPasswordValidation('Password harus menyertakan setidaknya satu huruf kapital.');
         return false;
      } else {
         setPasswordValidation('');
         return true;
      }
   };

   const handleSignup = async (e) => {
      e.preventDefault();
      if (validateEmailInput(email) && validatePassword(password)) {
         // Check both email and password validation
         try {
            await signUp(email, password);
            navigate('/'); // Redirect after successful signup
         } catch (error) {
            console.log(error);
         }
      }
   };

   return (
      <div
         className='relative flex items-center justify-center min-h-screen bg-cover bg-center'
         style={{ backgroundImage: `url(${BG_NETFLIX})` }}>
         {/* Dark overlay on the background only */}
         <div className='absolute inset-0 bg-black opacity-60'></div>

         {/* Form content */}
         <div className='relative z-10 bg-black bg-opacity-70 p-8 rounded-md max-w-sm w-full space-y-6 '>
            <button className='text-3xl font-semibold text-white py-3 '>Daftar</button>
            <form onSubmit={handleSignup} className='space-y-4'>
               <div>
                  <input
                     onChange={(e) => setEmail(e.target.value)}
                     type='text'
                     placeholder='Email atau nomor ponsel'
                     className='w-full p-3 rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
                  />
                  {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}{' '}
                  {/* Display error */}
               </div>

               <div className='mb-4'>
                  <div className='relative'>
                     <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Sandi'
                        className='w-full p-3 pr-10 rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
                     />
                     <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white'
                        style={{ pointerEvents: 'auto' }} // Ensures the button is clickable
                     >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                     </button>
                  </div>
                  {passwordValidation && (
                     <p className='text-red-500 text-sm mt-1'>{passwordValidation}</p>
                  )}
               </div>

               <button
                  type='submit'
                  className='w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-red-500'>
                  Daftar
               </button>
            </form>

            <div className='flex justify-between items-center text-gray-400 text-sm mt-4 py-5'>
               <label className='flex items-center'>
                  <input type='checkbox' className='mr-2' />
                  Ingat saya
               </label>
               <a href='https://www.netflix.com/id/' target='_blank' className='hover:underline'>
                  Butuh bantuan?
               </a>
            </div>

            <div className='text-center text-gray-400 text-sm mt-6'>
               <p>
                  Sudah subscribe?
                  <Link to='/login' className='text-white hover:underline'>
                     Masuk sekarang.
                  </Link>
               </p>
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

export default Signup;
