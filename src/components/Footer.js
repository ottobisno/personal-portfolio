import React from 'react';
import '../styles.Footer.css';

export default function Footer() {
    return (
        <footer className="bg-darker-tp text-center text-light mt-5">
            <div className="container p-4 pb-0">
                <section className="mb-2">
                    <a href="https://github.com/ottobisno" className="soc-med-icon">
                        <img src="../images/git-icon.png" alt="The GitHub logo" width="35" height="35" className="d-inline-block" />
                    </a>
                    <a href="https://twitter.com/SilentWolf444" className="soc-med-icon">
                        <img src="../images/twitter-icon.png" alt="The Twitter logo" width="35" height="35" className="d-inline-block" />
                    </a>
                </section>
            </div>
        </footer>
    );
};