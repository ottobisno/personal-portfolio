import profilePicture from '../../images/other/profile-pic.jpg'

export default function About() {
  return (
    <div className="row">
      <h1 className="col-12 my-4 d-flex justify-content-center">About Me</h1>
      <div className="col-12 col-lg-3 d-flex justify-content-center">
        <img src={profilePicture} className='img-fluid profile-pic'></img>
      </div>
      <div className="col-12 col-lg-9 text-light d-flex align-items-center">
        <p className="p-3 content-box">
          Hey there, I'm Otto! My most recent work experience is in Program Management, but I'm currently seeking out new opportunities in the world of Web Development/Software Engineering! I've always wanted a profession that requires a high degree of technical expertise, as much of my life has been rooted in competitive gaming. I revel in seeing improvement after practicing my technical skills and learning new techniques along the way and I would love to be able to apply that style of learning to my own profession.
        </p>
      </div>
    </div>
  );
};
