import './App.css';
import React from 'react';
import Header from './components/headers/Header';
import { BrowserRouter , Route } from "react-router-dom";
import Home from './pages/home/home';
import about from './components/about';
import contact from './pages/contact/contact';


function App() {
  return (
    <div>

      <Header />
      
      <BrowserRouter>
      
        <div>
        
          <Route exact strict path="/" component={Home} />
          <Route exact strict path="/about" component={about} />
          <Route exact path="/contact" component={contact} />
          </div>
        
      </BrowserRouter>
    </div>



    /** <div className="App">
      
      <Header />
      <Slider />
      <header className="App-header">
        
        <div style={{backgroundColor: "darkgrey", paddingLeft: "100px", paddingRight: "100px", paddingBottom: "50px", paddingTop:"50px", borderRadius:"10px"}}>
        <h1>Hi, This is my first app!</h1>
        <h5>Developed by Shehan Somaweera</h5>
        
        </div>

        
        {/** <div>
          <Emailtemp />
        </div>
        */

        /** 
      </header>
      <footer>
      <div style={{ width: "100%"}}>
        <Footer />
        </div>
      </footer>
    </div> */
  );
}

export default App;
