/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faLinkedinIn, faDeviantart, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn, faDeviantart, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footerLinks from '../json/footerLinks.json';

library.add(faLinkedinIn, faDeviantart, faInstagram, faTwitter, faGithub, faEnvelope)

/* Let's create the footer template */
const Footer = () => {
    return(
        <>
            <footer>
                <nav className="footer__social">
                    <ul>
                        {
                            footerLinks.map((value, index) => {
                                const iconFamily:any = value.iconFamily; 
                                const iconName:any = value.iconName;
                                return <li key={`fkey-${index}`}><a href={value.href}><FontAwesomeIcon icon={[iconFamily, iconName]} /></a></li>
                            })
                        }
                    </ul>
                </nav>
                <div>
                    <p>Copyright &copy; {`${new Date().getFullYear()}`}</p>
                    <p>Hey y'all, if'n you want to use anything here in a project just ask and, presuming it's not for a commercial venture, I'm most likely going to say hell yes.  Unless you're a Nazi or something because if so, go pound sand you douchebag.  I will say this: there is a concrete reason I have the copyright notice on all my images.  One of the things I hate slightly less than hate mongers are people who poach the work of others and pass it off as theirs.  Bigots are still way worse, though.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;