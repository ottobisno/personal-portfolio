export default function Contact() {
  return (
    <div className="d-flex flex-column align-items-center text-light">
      <h1>Contact</h1>
      <div className="content-box p-3">
        <div className="d-flex">
          <h5 className="me-2 mb-2">Email:</h5>
          <a className="text-light p-contact" href="mailto:ottobisno444@gmail.com">ottobisno444@gmail.com</a>
        </div>
        <div className="d-flex">
          <h5 className="me-2 mb-0">Phone Number:</h5>
          <p className="mb-0 p-contact">(206)-434-8509</p>
        </div>
      </div>
    </div>
  );
};
