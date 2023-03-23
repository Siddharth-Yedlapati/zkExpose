import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route}
	from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Formpage from './components/Formpage';
import Viewpage from './components/Viewpage';

function App() {
return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="Home" element={<Home/>}/>
          <Route path="About" element={<About />} />
          <Route path="Formpage" element={<Formpage />} />
          <Route path="Viewpage" element={<Viewpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  {/* <div className="cardbox">
    <Card/>
  </div>
  <div className="cardbox">
    <Card/>
  </div> */}
  </>
);
}
export default App;



