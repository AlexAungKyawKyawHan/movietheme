import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Layout from './components/Layout'
import MovieDetails from './pages/MovieDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Container} from '@material-ui/core'


function App() {
  const title = 'welcome to the newworld'
  return (
    // <Container>
    <Router>
      {/* <Layout> */}
      <Navbar />
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/movies/:id">
          <MovieDetails />
          </Route>
        </Switch>
      {/* </Layout> */}
    </Router>
    // </Container>
  );
}

export default App;
