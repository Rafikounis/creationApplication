import React, { Component } from 'react';
import "./nosRealisation.css";
import Photo from "../../../img/Clic1 Plat.png"

class NosRealisations extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Réalisation</h1>
                <div className="photoDeBackGroundRealisation container "> </div>
                <div className="textBloc text-center"> 
                    <p> 
                        Nos réalisations sont en cours de rédaction, visitez notre site régulièrement afin de voir tous nos projets réalisés !

                        De la création de sites web en passant par les applications web, les applications mobiles et les dispositifs de digitalisation, notre objectif est de donner vie à vos idées et à votre créativité.</p>
                </div>
                <div className="card clic1Plat  mx-auto mt-0">
                    <img src={Photo} className="card-img-top rounded" alt="creation application"/>
                    <div className="card-body">
                        <h5 className="card-title">Clic1 Plat</h5>
                        <p className="card-text">Une application mobile IOS & ANDROID qui permet de faire des recherches par le nom du plat</p>
                        <a href="https://clic1plat.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-5 ">Visiter le site</a>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default NosRealisations;