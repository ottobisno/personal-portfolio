import '../styles/Header.css';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className='navbar-container containter-fluid'>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
};
