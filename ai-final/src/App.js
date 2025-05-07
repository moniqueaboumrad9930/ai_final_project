import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/dashboard';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <Routes>
      <Route path ='/' element={<LandingPage/>}></Route>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
  );
}
export default App;
