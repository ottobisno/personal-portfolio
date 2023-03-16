import { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../styles/PortfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Skills') {
      return <Skills />
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    } else {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfolio-body'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='container my-4'>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};
