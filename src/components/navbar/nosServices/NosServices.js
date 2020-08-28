import React, { Component } from 'react';
import Img from "../../../img/application 1.jpg"
import Img2 from "../../../img/creation application ios.jpg";
import Img3 from "../../../img/creation site web.jpg";
import "./NosService.css";
// import { Navbar, Nav} from "react-bootstrap";
class NosServices extends Component {
    render() {
        return (
            <div>
                <div class="row m-5">
                    <div class="col-2 mx-auto">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Application Android</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Application IOS</a>
                            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Site internet</a>
                        </div>
                    </div>
                    <div class="col-9 ml-2">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><img className="img-responsive" src={Img} alt="application mobile ios et android" /> 
                                <h2> Application Android sur mesure </h2>
                                <br/> 
                                <p className="justify-content-center">Nos équipes réalisent des applications mobiles qui sortent du lot pour séduire un maximum d’utilisateurs :<br/>  développement d’application sportive, m-commerce, gestion de chantier, jeu, sondages, street marketing, tutos…
                                <br/>
                                <br/>
                                <strong>Plateformes :</strong>  Androïd, iOS, Windows Phone
                                <br/>
                                <strong>Technologies :</strong> Androïd & iOS natif, Ionic, AngularJS, NodeJS
                                <br/>
                                <strong>Fonctionnalités :</strong> géolocalisation, achat in-app, QR code, notifications Push, calendrier, caméra …
                                </p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <img className="img-responsive" src={Img2} alt="application mobile ios" />
                            <h2> Application IOS sur mesure </h2>
                                <br/> 
                                <p className="justify-content-center">Nos équipes réalisent des applications mobiles hybrides qui sortent du lot pour séduire un maximum d’utilisateurs :<br/>  développement d’application sportive, m-commerce, gestion de chantier, jeu, sondages, street marketing, tutos…
                                <br/>
                                <br/>
                                <strong>Plateformes :</strong>  Androïd, iOS, Windows Phone
                                <br/>
                                <strong>Technologies :</strong> Androïd & iOS natif, Ionic, AngularJS, NodeJS
                                <br/>
                                <strong>Fonctionnalités :</strong> géolocalisation, achat in-app, QR code, notifications Push, calendrier, caméra …
                                </p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <img className="img-responsive" src={Img3} alt="application mobile ios" />
                            <h2> Création site internet sur mesure </h2>
                                <br/> 
                                <p className="justify-content-center">Élargissez votre offre et votre communication sur le web grâce aux sites internet : e-commerce, site vitrine et/ou institutionnel, blog…
                                <br/>
                                <br/>
                                <strong>Plateformes :</strong> Chrome, Firefox, Safari, IE
                                <br/>
                                <strong>Technologies :</strong> HTML5 / CSS3, Javascript, jQuery, AngularJS
                                <br/>
                                <strong>Fonctionnalités :</strong> paiement, liaison CRM, caméra, audio, téléchargements …
                                
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default NosServices;