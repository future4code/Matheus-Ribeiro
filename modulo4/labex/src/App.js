import React from 'react'
import { GlobalStyles } from './GlobalStyles';
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage';

const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <HomePage/>
      <ListTripsPage/>
    </div>
  )
}

export default App;
