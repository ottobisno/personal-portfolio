import profilePicture from '../../images/profile-pic.jpg'

export default function About() {
  return (
    <div className="row">
      <h1 className="col-12 mb-4 d-flex justify-content-center">About Me</h1>
      <div className="col-12 col-lg-3 d-flex justify-content-center">
        <img src={profilePicture} className='img-fluid profile-pic'></img>
      </div>
      <div className="col-12 col-lg-9 text-light d-flex align-items-center">
        <p className="p-3 text-box">
          Hey there, I'm Otto! My most recent work experience is in Program Management but I'm currently seeking out new opportunities in the world of Web Development/Software Engineering! I've always wanted a profession that requires a high degree of technical expertise, as much of my life has been rooted in competitive gaming. I've always enjoyed seeing improvement after practicing my technical skills and learning how to make the right observations along the way. I would love to have the opportunity to apply that style of learning to my own profession as well and programming is something that offers me just that.
        </p>
      </div>
    </div>
  );
};
