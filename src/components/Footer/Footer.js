import React from 'react';
import './footer.css';

export default function footer(){
    return (
      <div class="footer-dark" style={{width: "100%"}}>
      <footer>
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 col-md-3 item">
                      <h3>Pages</h3>
                      <ul>
                          <li><a href="/">Home Page</a></li>
                          <li><a href="/about">About Us</a></li>
                          <li><a href="/contact">Contact Us</a></li>
                      </ul>
                  </div>
                  <div class="col-sm-6 col-md-3 item">
                      <h3>About</h3>
                      <ul>
                          <li><a href="#">Company</a></li>
                          <li><a href="#">Team</a></li>
                          <li><a href="#">Careers</a></li>
                      </ul>
                  </div>
                  <div class="col-md-6 item text">
                      <h3>About the app</h3>
                      <p style={{fontSize: "14px"}}>This is done by me to learn to code the React platform and for the development purposes.</p>
                  </div>
                  <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
              </div>
              <p class="copyright">Shehan © 2021</p>
          </div>
      </footer>
  </div>
    
        
    );
}