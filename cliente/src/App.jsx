import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { Pokemones } from './pages/Pokemones';
import { Formulario } from './pages/Formulario';
import { Navigation } from './components/Navigation';
import { Toaster } from "react-hot-toast";

function App() {
  return(
    <BrowserRouter>
    <Navigation/>

      <Routes>
        <Route path='/' element={<Navigate to='/Pokemones'/>} />
        <Route path="/Pokemones" element={<Pokemones/>} />
        <Route path="/Pokemones-create" element={<Formulario/>} />
        <Route path="/Pokemones/:id" element={<Formulario/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App