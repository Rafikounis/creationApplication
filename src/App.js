import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import NavBar from "./components/navbar/navbar/Navbar";
import NosServices from "./components/navbar/nosServices/NosServices";
import NosRealisation from "./components/navbar/nosRealisations/NosRealisations";
import Accueil from "./components/navbar/accueil/Accueil"
import NousContacter from './components/navbar/nousContacter/NousContacter';
import Footer from "./components/footer/Footer"

class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <NavBar />

          <Route exact path="/" component={Accueil}/>
          <Route path="/nosServices" component={NosServices}/>
          <Route path="/nosRealiasations" component={NosRealisation}/>
          <Route path="/nousContacter" component={NousContacter}/>
          
          <Footer />
        </BrowserRouter>
      </div>
      
      
    );
  }
 
}

export default App;
