import React from 'react';
import FooterPg from './components/FooterPg';
import HeaderPg from './components/HeaderPg';
import Rotas from './routes';


const App: React.FC = (()=>{
  return (
    <div className="app">
      <HeaderPg />
      <Rotas />
      <FooterPg />
    </div>
  )
})

export default App;
