import './App.css'
import Home from './Container/Home/Home'
import Infos from './Container/Infos/Infos'
import BtnAccueil from './Component/BtnAccueil/BtnAccueil'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BtnAccueil />
      <Routes>
        <Route path="/-Pokedex-en-REACT" element={<Home />} />
        <Route path="/-Pokedex-en-REACT/Infos/:id" element={<Infos />} />
      </Routes>
    </div>
  );
}

export default App;
