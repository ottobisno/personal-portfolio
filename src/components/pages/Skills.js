import languageData from "../../data/languageData";
import toolsData from '../../data/toolsData';

export default function Skills() {
  return (
    <div className="row justify-content-center align-items-center">
      <h1 className="col-12 my-4 d-flex justify-content-center">Skills</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6">  
          <div className="container content-box py-2">
            <h2 className="text-light text-center">Programming Skills</h2>
            <div className="row justify-content-center">
              {languageData.map((language) => {
                return <div key={language.id} className="col-4 col-sm-3 col-xl-2 d-flex flex-column align-items-center py-2">
                  <img src={language.icon} height="50" width="50" />
                  <p className="text-light text-center mb-0">{language.name}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
          <div className="container content-box py-2 my-4">
            <h2 className="text-light text-center">My Toolbox</h2>
            <div className="row justify-content-center">
              {toolsData.map((tool) => {
                return <div key={tool.id} className="col-4 col-sm-3 d-flex flex-column align-items-center py-2">
                  <img src={tool.icon} height="50" width="50" />
                  <p className="text-light text-center mb-0">{tool.name}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
