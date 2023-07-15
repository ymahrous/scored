import './App.css';
import 'semantic-ui-css/semantic.min.css';
import About from '../components/About/About';
import Getscore from '../components/Home/Home';
import Navigation from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
export default function App() {
  return (
    <Router>
      // <Navigation />
      <Switch>
        <Route exact path='/'>
          <Getscore />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
