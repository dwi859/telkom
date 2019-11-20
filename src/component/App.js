import React,{Component} from 'react';

import Home from '../Home/Home';
import { BrowserRouter as Router,Link } from "react-router-dom";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render(){
    return(
      <Router>
      <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light warna">
            <Link className="navbar-brand" to=""><img className="logo" src={require('../logo/logo.png')}/></Link>
            {/* <button className="navbar-toogler toogler" type="button" data-toogle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toogle navigation">
              <span className="navbar-toogler-icon"></span>
            </button> */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PROMO
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="">PROMO</Link>
                    <Link class="dropdown-item" to="">Partnership</Link>

                  </div>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PAKET & ADD-ON
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="">Action</Link>
                    <Link class="dropdown-item" to="">Another action</Link>
                    <div className="dropdown-divider"></div>
                    <Link class="dropdown-item" to="">Something else here</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link className="nav-link text-white">PUSAT BANTUAN</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      
        <div className="">
          <Home/>
        </div>
       
      </div>
      </Router>

    )
  }


}

export default App;
