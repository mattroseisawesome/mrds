import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


/* Let's define the header as a toggle function */
// const Toggle = ({id}) => {
//     const [open, setOpen] = useState(false);
//     return(
//         <header>
//             <h1>
//                 <a href="/">mattrosedrawsstuff</a>
//                 <i id="hamburger-trigger" aria-label={open ? "Hide Navigation Menu" : "Show Navigation Menu"} aria-expanded={open ? "true" : "false"} className={open ? 'fa fa-bars hamburger-menu open' : 'fa fa-bars hamburger-menu'} onClick={() => setOpen(!open)}></i>
//             </h1>
//             <nav id="header-nav" className={open ? "show" : ""} aria-hidden={open ? "false" : "true"} role="menu">
//                 <ul role="navigation" aria-label="Main Navigation">
//                     <li><NavLink activeClassName="active" to="/gallery/penandink"
//                     onKeyDown={(e) => {
//                         if (e.keyCode === 32) {
//                             e.preventDefault();
//                         }
//                     }}><span>Pen &amp; Ink</span> <i aria-hidden="true" className="fa fa-asterisk"></i></NavLink></li>
//                     <li><NavLink to="/gallery/painting"><span>Painting</span> <i aria-hidden="true" className="fa fa-asterisk"></i></NavLink></li>
//                     <li><NavLink to="/gallery/printmaking"><span>Printmaking</span> <i aria-hidden="true" className="fa fa-asterisk"></i></NavLink></li>
//                     <li><NavLink to="/gallery/drawing"><span>Drawing</span> <i aria-hidden="true" className="fa fa-asterisk"></i></NavLink></li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
 
/* Now let's call that toggle function */
// const HeaderNavigation = () =>{
//     return(
//         <>
//             <Toggle />
//         </>
//     );
// }

// export default HeaderNavigation;

