import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import anime from 'animejs';
import './Home-page.css';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class HomePage extends Component{
    render(){
        const animation = anime({
            targets: '.box',
            translateX: 250
          });
        return(
            <div className="Hero-section">
                <NavBar />
                <div className="hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <motion.div animate={{x: 0,
                                        y: 200,
                                        scale: 4,
                                        rotate: 160,}}>
                                <div className="col-md-4">
                                    <div className="box">
                                    </div>
                                </div>
                            </motion.div>
                            <div className="col-md-4">
                            <Button variant="contained" color="primary">
                                    Primary
                                    </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;