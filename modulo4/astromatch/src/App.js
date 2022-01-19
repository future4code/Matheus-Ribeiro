import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStorage } from './GlobalContext/GlobalContext';
import ContainerApp from './containers/ContainerApp';
import Header from './components/Header/Header';
import Profiles from './pages/Profiles/Profiles';
import Like from './pages/Like/Like';
import AppMenu from './components/AppMenu/AppMenu';

const App = () => {
  
  return (
    <BrowserRouter>
      <GlobalStorage>
        <ContainerApp>
          <Header />
          <Routes>
            <Route path="/" element={<Profiles />} />
            <Route path="like" element={<Like />} />
          </Routes>
          <AppMenu />
        </ContainerApp>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
