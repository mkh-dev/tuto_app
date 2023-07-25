import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import './App.css';
import Hello from './Components/Hello';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path ="/" element={<LoginForm/>}/>
    <Route path ="/hello" element={<Hello/>}/>

    
    
    </Routes>

    </div>
  );
}

export default App;
