import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/dashboard';
import LandingPage from './pages/landingPage';
import FairnessCourse from './pages/fairnessCourse';
import FairnessQuiz from './pages/fairnessQuiz';

function App() {
  return (
    <Routes>
      <Route path ='/' element={<LandingPage/>}></Route>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/courses/fairness" element={<FairnessCourse />} />
      <Route path="/quiz/fairness" element={<FairnessQuiz />} />
    </Routes>
  );
}
export default App;
