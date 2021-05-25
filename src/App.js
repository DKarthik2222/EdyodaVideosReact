import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import UploadVideo from './Components/UploadVideo/UploadVideo';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Register />
            </Route><Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/upload">
            <UploadVideo />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;