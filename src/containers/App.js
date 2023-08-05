import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Getscore from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Getscore />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
