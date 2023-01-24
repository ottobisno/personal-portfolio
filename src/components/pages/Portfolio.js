import React from "react";
import testImg from '../../images/note-taker.jpg';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className='container project-container'>
                <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <div className='card bg-darker'>
                            <img src={testImg} className='img-fluid'></img>
                            <div className='card-body d-flex flex-column text-center align-items-center'>
                                <h4>Note Taker Application</h4>
                                <button className='btn btn-dark btn-top'>Deployed Application</button>
                                <button className='btn btn-dark'>GitHub Repository</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};