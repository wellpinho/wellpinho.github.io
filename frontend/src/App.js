import About from './pages/About'
import { Route, useLocation } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function App() {
  const location = useLocation()
  library.add(fab, fas, faDatabase)

  return (
    <div className="container-home">
      { location.pathname !== '/admin' && <Navbar />}
      <Route exact path="/" component={About} />
      <Route path={['/portfolio/:id', '/portfolio']} component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
    </div>
  );
}

export default App;
