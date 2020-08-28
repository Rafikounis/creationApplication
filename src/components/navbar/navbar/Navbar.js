import React, { Component } from 'react';
import "./Navbar.css";


class NavBar extends Component {
  
  
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-dark">
                <a className="navbar-brand text-white" href="/">Accueil</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-white ml-auto " href="/nosServices">Nos services <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ml-auto " href="/nosRealiasations">Nos réalisations</a>
                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link text-white ml-auto " href="/nousContacter"  >Nous contacter</a>
                        </li>
                    </ul>
                
            </div>
        </nav>
        );
    }
}

export default NavBar;