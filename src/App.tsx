import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './nav/nav';
import MainBody from './mainBody.tsx';
import Gallery from './gallery/gallery';
import Image from './image/image';
import Footer from './footer/footer';
import mainJSON from './json/main.json';
import './App.scss'

function App() {

  return (
    <>
        <div className="mrds">
        {
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<MainBody />} />
            {
                mainJSON.map((categories) => {
                  return(
                    <Route path={`/gallery/${categories.folder}`} key={`${categories.id}`} element={
                      <Gallery data-category={`${categories.folder}`} data-id={`${categories.id}`} data-pretty={`${categories.category}`} />
                    } />
                  )
                })
              }
              <Route 
                path="/img/:folder/:imgId"
                action={({ params }) => { return params }} 
                element={<Image />} 
              />
          </Routes>
        </BrowserRouter>
      }
      <Footer />

        </div>
    </>
  )
}

export default App
