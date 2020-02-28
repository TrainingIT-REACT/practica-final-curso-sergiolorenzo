import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import ErrorBoundary from './ErrorBoundary';

import UserContext from './contexts/user';

// Css
import './App.css';

import Menu from './Menu'
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Player from './Player';
import NotFound from './NotFound';

// Estado inicial
const initialState = {
  loading: true,
  signedIn: false,
  updateUser: null,
  albums: []
};

const Albums = React.lazy(() => import('./Albums'));
const Album = React.lazy(() => import('./Album'));
const History = React.lazy(() => import('./History'));

class App extends Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      loading: true,
      signedIn: false,
      updateUser: this.updateUser,
      albums: []
    };
  }

  async componentDidMount() {
    // try {
    //   const res = await fetch('/albums');
    //   const json = await res.json();
    //   this.setState((prevState) => ({
    //     ...prevState,
    //     loading: false,
    //     albums: json
    //   }));
    // } catch(err) {
    //   console.error("Error accediendo al servidor", err);
    // }
  }

  // Vuelve el estado al array inicial
  onReset() {
    this.setState(initialState);
  }
   
  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (
      <Router>
        <UserContext.Provider value={this.state}>
          <div className="App">
            <h1>Reactify</h1>
            <Menu />
            <React.Suspense fallback="La aplicación se está cargando">
              <ErrorBoundary onReset={this.onReset} message="Ops! Algo ha salido mal">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/albums" component={Albums} />
                  <Route exact path="/album/:id([0-9]+)" component={Album} />
                  <Route exact path="/player/:id([0-9]+)" component={Player} />
                  <Route path="/History" component={History} />
                  <PrivateRoute path="/profile" component={Profile} />  
                  <Route component={NotFound} />
                </Switch>
              </ErrorBoundary>
              </React.Suspense>
          </div>
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
