export default function Project({ projectData }) {
  return (
    <div className="row justify-content-center">
      {projectData.map((project) => (
        <div key={project.id} className="col-12 col-md-9 col-lg-5">
          <div className="card text-light">
            <img src={project.img} className="img-fluid project-img"></img>
            <div className="card-body d-flex flex-column text-center align-items-center">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="col-12 d-flex align-items-center">
                <a className="btn btn-dark btn-outline-warning" href={project.app}>Live Site</a>
                <a className="btn btn-dark btn-outline-warning" href={project.repo}>Source Code</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
};
