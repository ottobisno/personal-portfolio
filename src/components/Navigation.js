import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-darker'>
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
                        href='#portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a
                        href='#contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a
                        href='#resume'
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                    >
                        Portfolio
                    </a>
                </li>
            </ul>
        </nav>
    );
};