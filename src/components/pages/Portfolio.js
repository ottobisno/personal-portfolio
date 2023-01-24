import React from "react";
import Project from '../Project';
import projectData from '../../projectData';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className='container project-container'>
                <Project  projectData={projectData}/>
            </div>
        </div>
    );
};