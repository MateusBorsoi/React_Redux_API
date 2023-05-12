import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import NovoProjeto from './components/pages/NovoProjeto'
import Projetos from './components/pages/Projetos'
import Projeto from './components/pages/Projeto'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/projetos' element={<Projetos />}>
          </Route>
          <Route path='/empresa' element={<Empresa />}>
          </Route>
          <Route path='/contato' element={<Contato />}>
          </Route>
          <Route path='/novoprojeto' element={<NovoProjeto />}>
          </Route>
          <Route path='/projeto/:id' element={<Projeto />}>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>

  )
}

export default App;
