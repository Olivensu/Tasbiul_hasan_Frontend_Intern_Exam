import React from 'react';
import './footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer items-center p-4 bg-sky-200 ">
  <aside className="items-center grid-flow-col">
    <p>Copyright &copy; {currentYear} - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    </nav>
</footer>
    );
};

export default Footer;