import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Courses } from './components/Courses';
import { Header } from './components/Header';

import { UahToValute } from './components/uahToValute';

import { getUahToEurCourseSelector, getUahToPlnCourseSelector, getuahToUsdCourseSelector } from './store/selectors';


const App: React.FC = () => {

  const inUsd = useSelector(getuahToUsdCourseSelector);

  const inEur = useSelector(getUahToEurCourseSelector);

  const inPln = useSelector(getUahToPlnCourseSelector);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/home' element={<Courses />} />
        <Route path='/uah-usd' element={<UahToValute textToShow='Uah To Usd' inValute={inUsd}/>} />
        <Route path='/uah-pln' element={<UahToValute textToShow='Uah To Pln' inValute={inPln}/>} />
        <Route path='/uah-eur' element={<UahToValute textToShow='Uah To Eur' inValute={inEur}/>} />
        <Route path='/' element={<Navigate to='/home' replace={true} />} />
      </Routes>

    </div>
  );
}

export default App;
