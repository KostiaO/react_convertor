import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { UahToEur } from './components/uahToEur';
import { UahToPln } from './components/UahToPln';
import { UahToUsd } from './components/uahToUsd';


const App: React.FC = () => {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/home' element={<Courses />} />
        <Route path='/uah-usd' element={<UahToUsd />} />
        <Route path='/uah-pln' element={<UahToPln />} />
        <Route path='/uah-eur' element={<UahToEur />} />
        <Route path='/' element={<Navigate to='/home' replace={true} />} />
      </Routes>

    </div>
  );
}

export default App;
