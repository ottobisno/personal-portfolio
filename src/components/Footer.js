import React from 'react';
import '../styles/Footer.css';
import twitterIcon from '../images/twitter-icon.png';
import githubIcon from '../images/git-icon.png';

export default function Footer() {
    return (
        <footer className="bg-darker-tp text-center text-light mt-auto">
            <div className="container p-4">
                <div className="mb-2">
                    <a href="https://github.com/ottobisno" className="soc-med-icon">
                        <img src={githubIcon} width="35" height="35" className="me-2" />
                    </a>
                    <a href="https://twitter.com/SilentWolf444" className="soc-med-icon">
                        <img src={twitterIcon} width="35" height="35" className="ms-2" />
                    </a>
                </div>
            </div>
        </footer>
    );
};