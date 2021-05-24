import React from 'react';
import './App.css'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <h1>
          Learning Videos
    </h1> */}
        <Home />

        {/* <Login /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;