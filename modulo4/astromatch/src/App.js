import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStorage } from './GlobalContext';
import AppMenu from './components/AppMenu/AppMenu';
import Header from './components/Header/Header';
import ContainerApp from './containers/ContainerApp';
import Like from './pages/Like/Like';
import Profiles from './pages/Profiles/Profiles';


function App() {
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
