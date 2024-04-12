import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Pool from './components/pool/pool';
import Settings from './components/settings/settings';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <style>
          {'body {background-color: #e9e9e9;}'}
        </style>

        <Header />
        <Nav />

        <div className='app-wrapper-content'>
          <Routes> {}
            <Route path="/pool" element={<Pool />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
