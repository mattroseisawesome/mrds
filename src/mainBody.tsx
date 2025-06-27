/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from 'react-router-dom';
import mainBody from './json/mainBody.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faIcons } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight);

/* Let's create the MainBody template which takes the mainBody array and loops through it to create the different sections */
export default function MainBody() {
    return(
        <>
            <main>
                    {
                        mainBody.map( (value, index) => {
                            const iconFamily:any = faIcons;
                            const iconName:any = value.faIcon;
                            const displayExistingLink = () => {
                                if (value.link) {
                                    return <NavLink to={value.link}>{value.linkText} <FontAwesomeIcon icon={[iconFamily, iconName]} /></NavLink>
                                } else {
                                    return false;
                                }
                            }

                            return(
                                <section id={value.category} className={value.category} key={`key-${index}`}>
                                    <div className={`tile ${value.category}`}>
                                        <picture>
                                            <source media="(max-width: 599.98px)" srcSet={`images/home/${value.image}_m.jpg`} />
                                            <source media="(max-width: 949.98px)" srcSet={`images/home/${value.image}_t.jpg`} />
                                            <source media="(min-width: 950px)" srcSet={`images/home/${value.image}_d.jpg`} />
                                            <img src={`images/home/${value.image}_d.jpg`} alt="" />
                                        </picture>
                                        <div>
                                            <h2>{value.header}</h2>
                                            <p>{value.paragraph}</p>
                                                {
                                                    displayExistingLink()
                                                }
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
            </main>
        </>
    );
}