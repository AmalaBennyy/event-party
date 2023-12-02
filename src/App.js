import { Route, Routes } from 'react-router-dom';
import './App.css';
import Event from './Pages/Event';
import Home from './Pages/Home';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>     
        <Route path='/event' element={<Event />}/>    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
