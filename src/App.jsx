import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/Others/Navbar.jsx';
import { AuthContextProvider } from './Context/AuthContext.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/SignUp/Signup.jsx';

function App() {
   return (
      <>
         <AuthContextProvider>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/login' element={<Login />} />
               <Route path='/signup' element={<Signup />} />
            </Routes>
         </AuthContextProvider>
      </>
   );
}

export default App;
