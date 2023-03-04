import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./componentes/home/Home"
import Movies from "./componentes/movies/Movies"
import TVShows from "./componentes/TVShows/TVShows"
import Coming from "./componentes/Coming/Coming"
import Premiadas from "./componentes/Premiadas/Premiadas"
import Best from "./componentes/best/Best"
import Navbar from './componentes/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/TV Shows' element={<TVShows/>} />
          <Route path='/coming soon' element={<Coming/>} />
          <Route path='/premiadas' element={<Premiadas/>} />
          <Route path='/best movies' element={<Best/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
