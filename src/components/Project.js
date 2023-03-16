export default function Project({ projectData }) {
  return (
    <div className='row'>
      {projectData.map((project) => (
        <div className='col-12 col-sm-6'>
          <div className='card bg-darker'>
            <img src={project.img} className='img-fluid'></img>
            <div className='card-body d-flex flex-column text-center align-items-center'>
              <h4>{project.title}</h4>
              <a className='btn btn-dark btn-top' href={project.app}>Deployed Application</a>
              <a className='btn btn-dark' href={project.repo}>GitHub Repository</a>
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
};
