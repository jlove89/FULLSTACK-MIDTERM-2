// Import dependencies
import './App.css';
import logo from './images/Electronic_Music_Set.jpeg'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

// import bootstrap comps
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

// import components 
import LandingPage from './components/LandingPage';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="App fill-page">
      <Router>
        <Container className='pb-3 footer-fill'>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<LandingPage logo={logo} />} />
              <Route path='/category/:category' element={<Artists Link={Link} />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </ScrollToTop>
        </Container>
      </Router>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <h1>Asheville Electronic Music Database</h1>

    //   </header>
    //   <img src={logo} alt='music hardware' />
    // </div>
  );
}

export default App;
