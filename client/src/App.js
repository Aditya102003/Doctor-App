import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import {useSelector } from 'react-redux';
import Spinner from './components/spinner';
import ProtectedRoute from './components/ProtectedRoute';
import publicRoute from './components/publicRoute';

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
   <>
   <BrowserRouter>
   {loading ? (
     <Spinner/>
   ): (
    <Routes>

   <Route path='/'
    element={
    <ProtectedRoute>
<HomePage/>
    </ProtectedRoute>
    }/>
   <Route path='login' 
   element={
    <publicRoute>
<Login/>
    </publicRoute>
   }/>
   <Route path='register' 
   element={
   <publicRoute>
<Register/>
   </publicRoute>
   }/>
  
   
   </Routes>
    

   )}
   
   </BrowserRouter>
  

   </>
  );
}

export default App;
