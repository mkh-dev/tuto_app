import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import './App.css';
import Hello from './Components/Hello';
import Admin from './Components/Admin';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path ="/" element={<LoginForm/>}/>
    <Route path ="/usertest" element={<Hello/>}/>
    <Route path ="/admintest" element={<Admin/>}/>

    
    
    </Routes>

    </div>
  );
}

export default App;
