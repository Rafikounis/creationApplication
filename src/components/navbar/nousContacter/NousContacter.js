import React, { Component } from 'react';
import "./NousContacter.css";
import axios from 'axios';
import emailjs from 'emailjs-com';


class NousContacter extends Component {
    constructor(props){
        super(props);
        this.state ={
            nom: "",
            prenom: "",
            mail: "",
            tel: "",
            message: "",

        }
    }
    handelState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    };
    sendEmail = (e) =>{
        e.preventDefault();
        console.log("bonjour")
        emailjs.sendForm('gmail', 'message_site', e.target, 'user_3VIGzWmzUCS4a90766JGz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          this.setState({
            nom: "",
            prenom: "",
            mail: "",
            tel: "",
            message: "",
        });
      }

    sendData = (e) => {
        e.preventDefault();
        this.setState({
                nom: "",
                prenom: "",
                mail: "",
                tel: "",
                message: "",
            });
        axios.post("http://localhost:9000/contact", this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            alert(`Merci ${this.state.prenom}\nLe formulaire a été bien envoyé`)
            //****ENOYER MAIL */
            
    }
    
    render() {
        return (
            <form className="m-5 shadow-lg rounded" method="POST" action="/contact" onSubmit={this.sendEmail}  id="myform">
                <h1 className="text-center"> Demande de devis</h1>
                <hr/>
                <div class="row mt-5">
                    <div className="col">
                        <input 
                        onChange={this.handelState}
                        name="nom" 
                        type="text" 
                        class="form-control" 
                        value={this.state.nom}
                        placeholder="Votre nom"
                        required
                        />
                    </div>
                    <div className="col">
                        <input 
                        onChange={this.handelState}
                        name="prenom"
                        value={this.state.prenom}
                        type="text" 
                        class="form-control" 
                        placeholder="Votre prénom"
                        required
                        />
                    </div>
                </div>
                <div class="row m-5">
                    <div className="col">
                        <input
                        onChange={this.handelState}
                        name="mail" 
                        value={this.state.mail}
                        type="mail" 
                        class="form-control" 
                        placeholder="Adresse mail"
                        required
                        />
                    </div>
                    <div className="col">
                        <input 
                        onChange={this.handelState}
                        name="tel" 
                        value={this.state.tel}
                        type="number" 
                        class="form-control" 
                        placeholder="Numéro de tel"
                        required
                        />
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Message</span>
                    </div>
                    <textarea 
                        onChange={this.handelState}
                        name="message" 
                        value={this.state.message}
                        class="form-control" 
                        aria-label="With textarea"
                    />
                </div>
                <button type="submit" class="btn btn-dark mt-5 shadow" value="submit" id="valider" >Envoyer</button>
                <button type="button" class="btn btn-dark mt-5 ml-5 shadow"> <a href="mailto:ounisrafik18@gmail.com">Nous contacter</a> </button>
                
            </form>
        );
    }
}

export default NousContacter;