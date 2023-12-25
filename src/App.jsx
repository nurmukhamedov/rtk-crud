import './App.css'
import Country from './components/Country';
import SingleCountry from './components//SingleCountry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/country/:name" element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
