import { useState } from "react";
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function ProjectContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            default:
                return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* <Header/> */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="mx-3 main-color">
                {renderPage()}
            </main>
            {/* <Footer/> */}
        </div>
    );
}