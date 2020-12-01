import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard, Home } from './components';

function App() {

  return (
    <>
    <ToastContainer />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
