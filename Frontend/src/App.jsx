
import './App.css'
import CadastroProdutos from './components/cadastroProdutos/cadastroProdutos'
import CadastroUsuario from './components/login/cadastroUsuario/cadastroUsuario'
import TelaLogin from './components/login/loginUsuario/telaLogin'
import Header from './components/headerLogo/header'
import Navbar from './components/navbarMenus/navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <Router>
      {/* Header e Navbar não mudam, pois são sempre visíveis */}
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
        

      </Routes>
    </Router>
  )
}

export default App
