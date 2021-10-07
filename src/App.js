import './App.css';
import Navbar from './components/UI/NavBar/index'
import Home from '../src/pages/Home'
import MoviePopular from './pages/MoviePopular'
import MovieDetails from './pages/MovieDetails';
import MoiveTopRated from './pages/MovieTopRated'
import UpComingMovie from './pages/UpComingMovie/index';
import PopularTVShows from './pages/PopularTVShows/index';
import TopRatedTVShows from './pages/TopRatedTVShows/index';
import OnAirTVShows from './pages/OnAirTVShows/index';
import TVShowsDetail from './pages/TVShowsDetail/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <Container>
    
    <Router>
      {/* <Layout> */}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/popularmovies">
          <MoviePopular />
        </Route>
        <Route path="/topratedmoives">
          <MoiveTopRated />
        </Route>
        <Route path="/upcomingmoives">
          <UpComingMovie />
        </Route>
        <Route path="/populartvshows">
          <PopularTVShows />
        </Route>
        <Route path="/topratedtvshows">
          <TopRatedTVShows />
        </Route>
        <Route path="/onairtvshows">
          <OnAirTVShows />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="/tvshow/:id">
          <TVShowsDetail />
        </Route>
      </Switch>
      {/* </Layout> */}
    </Router>
    // </Container>
  );
}

export default App;

