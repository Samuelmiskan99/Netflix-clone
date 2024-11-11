import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const ProtectedRoutes = ({ children }) => {
   const { user, loading } = UserAuth();

   if (loading) {
      return <div>Loading...</div>; // Tampilkan loading spinner atau teks loading
   }

   if (!user) {
      return <Navigate to='/login' />;
   } else {
      return children;
   }
};

export default ProtectedRoutes;
