import '../styles/Navigation.css'

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-darker'>
      <a className="navbar-brand">
          Otto Bisno
      </a>
      <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="toggleMobileMenu">
        <ul className='navbar-nav text-center ms-auto me-2'>
          <li>
            <a
              href='#about'
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href='#skills'
              onClick={() => handlePageChange('Skills')}
              className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'} 
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#projects'
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} 
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
