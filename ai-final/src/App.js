import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/dashboard';
import LandingPage from './pages/landingPage';
import FairnessCourse from './pages/fairnessCourse';

function App() {
  return (
    <Routes>
      <Route path ='/' element={<LandingPage/>}></Route>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/courses/fairness" element={<FairnessCourse />} />
    </Routes>
  );
}
export default App;
