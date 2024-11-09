import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/Others/Navbar.jsx';

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
      </>
   );
}

export default App;
