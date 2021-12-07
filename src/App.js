import './App.css'
import Home from './Container/Home/Home'
import Infos from './Container/Infos/Infos'
import Evolution from './Container/Evolution/Evolution'
import BtnAccueil from './Component/BtnAccueil/BtnAccueil'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BtnAccueil />
      <Routes>
        <Route path="/-Pokedex-en-REACT" element={<Home />} />
        <Route path="/-Pokedex-en-REACT/Infos/:slug" element={<Infos />} />
        <Route path="/-Pokedex-en-REACT/Evolution/:slug" element={<Evolution />} />
      </Routes>
    </div>
  );
}

export default App;
