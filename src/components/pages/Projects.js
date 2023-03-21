import Project from '../Project';
import projectData from '../../data/projectData';

export default function Portfolio() {
  return (
    <><div className="row">
      <h1 className="col-12 my-4 d-flex justify-content-center">Projects</h1>
      <div className="container project-container margin-neg">
        <Project projectData={projectData} />
      </div>
    </div>
    <div className="row justify-content-center">
    <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6">
      <div className="container content-box mb-4 py-2 margin-neg">
        <h2 className="text-light text-center">Currently Working On:</h2>
        <ul>
          <li className="text-light">Building full-stack web applications to improve my skills with the MERN stack</li>
          <li className="text-light">Studying data structures and algorithms to help solidify my CS fundamentals</li>
        </ul>
      </div>
    </div>
  </div></>
  );
};