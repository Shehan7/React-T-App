import React from 'react';
import Header from '../../components/headers/Header';
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer'

const home = () => {
    return (
        <div>
            <div className="App">
      
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
            */}
        </header>
        <footer>
        <div style={{ width: "100%"}}>
            <Footer />
            </div>
        </footer>
        </div>
        </div>
    )
}

export default home;