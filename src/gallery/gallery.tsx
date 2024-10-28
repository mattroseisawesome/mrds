import React from 'react';
import { Link } from 'react-router-dom';
import mainJSON from '../json/main.json';

export default function Gallery(params:any) {
  
  const dataID = params["data-id"];
  const dataPrettyText = params["data-pretty"];
  const imageArray = mainJSON[dataID].items;

  return(
    <>
      <main>
        <section className="gallery">
          <nav className="contextual-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>{ dataPrettyText }</li>
            </ul>
          </nav>
          <h2>{ dataPrettyText }</h2>
          <ul className="gallery__thumbnails">
            {
              imageArray.map( (image, index) => {
                return(
                  <li className="gallery__thumbnail" key={`gkey-${index}`}>
                    <Link className="gallery__thumbnail-link" to={image.thumbURL} state={{
                        desc: image.desc,
                        misc: image.misc,
                        category: mainJSON[dataID].category,
                        folder: mainJSON[dataID].folder
                      }}>
                      <picture>
                        <source media="min-width: 320px" srcSet={`${image.thumbSrc}-th.jpg`} />
                        <img alt={image.desc} className="gallery__thumbnail-image" src={`${image.thumbSrc}-th.jpg`} />
                      </picture>
                      <strong className="gallery__thumbnail-description">{image.desc}</strong>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </section>
      </main>
    </>
  );
}