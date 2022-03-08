import '../css/App.css';
import Homepage from './Homepage';
import Cars from './Cars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cars' element={<Cars />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
