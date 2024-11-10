import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/Others/Navbar.jsx';
import { AuthContextProvider } from './Context/AuthContext.jsx';

function App() {
   return (
      <>
         <AuthContextProvider>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
            </Routes>
         </AuthContextProvider>
      </>
   );
}

export default App;
