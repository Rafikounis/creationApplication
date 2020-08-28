import React, { Component } from 'react';
import Footer from "../../footer/Footer"
import './Accueil.css';

class Accueil extends Component {
    render() {
        return (
         
            <div className="photoDeBackGround">
                <h1 className="creationApplicationText"> Création d'application sur mesure. </h1>
                <h2 className="validationDesEtapesText"> Vous validerez avec nos experts toutes les étapes </h2>
                <Footer className="footer" />
            </div>
         
        );
    }
}

export default Accueil;