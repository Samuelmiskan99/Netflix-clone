import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/Others/Navbar.jsx';
import { AuthContextProvider } from './Context/AuthContext.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/SignUp/Signup.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountMain from './pages/Account/AccountMain.jsx';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';

function App() {
   return (
      <>
         <AuthContextProvider>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/login' element={<Login />} />
               <Route path='/signup' element={<Signup />} />
               <Route
                  path='/account'
                  element={
                     <ProtectedRoutes>
                        <AccountMain />
                     </ProtectedRoutes>
                  }
               />
            </Routes>
            <ToastContainer />
         </AuthContextProvider>
      </>
   );
}

export default App;
