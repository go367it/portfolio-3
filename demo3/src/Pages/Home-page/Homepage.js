import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';

class HomePage extends Component{
    render(){
        return(
            <div className="Hero-section">
                <NavBar />
                <div className="hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="left-section">
                                <div className="container">
                                    <div className="col-md-6">
                                        <h1>Welcome to this website</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="right-section">
                                <div className="container">
                                    <div className="col-md-6">
                                        <h1>Welcome to this website</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;