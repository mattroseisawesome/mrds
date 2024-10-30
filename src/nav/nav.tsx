import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAsterisk, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faAsterisk, faBars);


const Toggle = () => {
    const [open, setOpen] = useState(false);


    return(
        <header className="mrds-header">
            <h1>
                <a href="/">mattrosedrawsstuff</a>
                <FontAwesomeIcon onClick={() => setOpen(!open)} id="hamburger-trigger"  aria-label={open ? "Hide Navigation Menu" : "Show Navigation Menu"} aria-expanded={open ? "true" : "false"} className={open ? 'hamburger-menu open' : 'hamburger-menu'} icon={ faBars } />
            </h1>
            <nav id="header-nav" className={open ? "mrds-header__nav show" : "mrds-header__nav"} aria-hidden={open ? "false" : "true"} role="menu">
                <ul className="mrds-header__ul" role="navigation" aria-label="Main Navigation">
                    <li><NavLink className={({ isActive }) => (isActive ? 'mrds-header__ul-link active' : 'mrds-header__ul-link')} to="/gallery/penandink"><span>Pen &amp; Ink</span> <FontAwesomeIcon aria-hidden="true" icon={faAsterisk} /></NavLink></li>
                    <li><NavLink className="mrds-header__ul-link" to="/gallery/painting"><span>Painting</span> <FontAwesomeIcon aria-hidden="true" icon={faAsterisk} /></NavLink></li>
                    <li><NavLink className="mrds-header__ul-link" to="/gallery/printmaking"><span>Printmaking</span> <FontAwesomeIcon aria-hidden="true" icon={faAsterisk} /></NavLink></li>
                    <li><NavLink className="mrds-header__ul-link" to="/gallery/drawing"><span>Drawing</span> <FontAwesomeIcon aria-hidden="true" icon={faAsterisk} /></NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default function Nav() {
    return(
        <>
            <Toggle />
        </>
    );

}
