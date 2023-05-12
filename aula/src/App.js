
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Empresa from './Pages/Empresa'
import Sobre from './Pages/Sobre'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'


function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/empresa" element={<Empresa />}>
        </Route>
        <Route path="/contato" element={<Contato />}>
        </Route>
        <Route path="/sobre" element={<Sobre/>}>
        </Route>
      </Routes>
      <Footer />
    </Router >


  )
}

export default App;
