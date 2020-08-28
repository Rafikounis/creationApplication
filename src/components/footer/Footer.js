import React, { Component } from 'react';
import "./Footer.css"


class Footer extends Component {
    render() {
        return (
            <div className="main-footer bg-dark text-white">
                <div className="footer-middle">
                    <div className="container">
                        <div className="footer-bottom">
                            <p className="text-xs-center"> &copy;{new Date().getFullYear() } City Guide App - All Rights</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
