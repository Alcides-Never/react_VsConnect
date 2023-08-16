import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


// import App from './App'
import './index.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Servicos from './pages/ListaServicos'
import Teste from './pages/Teste'
import ListaDevs from './pages/ListaDevs'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Router Global */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='ListaServicos' element= { <Servicos /> } />
        <Route path='Listadevs' element={ <ListaDevs /> } />
        {/* <Route path='Teste' element={ < Teste /> } /> */}
      </Routes>
      <Footer />
      
    </BrowserRouter>
  </React.StrictMode>,
)
