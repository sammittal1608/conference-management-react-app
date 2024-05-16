import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth/Auth'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp'; 
import Dashboard from './Components/Dashboard/Dashboard';
import exp from './Components/experiement/exp'
import MeetingCard from './Components/MeetingCard/MeetingCard';


function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Auth />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </Router>
  );
}

export default App;
