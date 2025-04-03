import React from 'react';
import './App.css';
import Appbar from './components/AppBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Slideshow from './components/Slideshow';
import Heritage from './components/Heritage'
import HomeAppbar from './components/HomeAppbar';
import AdminAppbar from './components/AdminAppbar';
import CultureModule from './components/CultureModule';
import Contactus from './components/Contactus';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery';
import Dances from './components/dance';
import Arts from './components/arts';
import Temples from './components/temple';
import Food from './components/food';
import Festivals from './components/festivals';
import Tribals from './components/tribals';
import Monuments from './components/monuments';
import Feedback from './components/Feedback';
import ProfilePage from './components/profile';
import AddBlog from './components/addblog';
import ViewBlogs from './components/retriveblogs';

function App({ store }) {
  const headerStyle = {
    backgroundImage: `url('https://media.istockphoto.com/id/621577320/vector/hand-drawn-india-skyline-vector-illustration.jpg?s=612x612&w=0&k=20&c=24KmWdqzLU8jMTmHNoZrNm-LcQfmQFwLGC40jMZsLoc=')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const exploreButtonStyle = {
    padding: '15px 30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: '#4CAF50', // Attractive green background
    color: 'white',
    border: 'none',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.3s',
    marginTop: '20px',
  };

  const imageCardStyle = {
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '40px',
    textAlign: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    width: '300px',
  };

  const imageStyle = {
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
    maxWidth: '100%',
  };

  const images = [
    {
      src: 'https://i.pinimg.com/474x/1f/58/13/1f5813e7bdf082029590c08e10378e16.jpg',
      caption: 'Diverse India.',
    },
    {
      src: 'https://static.vecteezy.com/system/resources/previews/024/318/074/non_2x/landscape-nature-background-with-beautiful-flowers-mountain-and-sunrise-created-with-generative-ai-technology-free-photo.jpg',
      caption: 'Natures Canvas.',
    },
    {
      src: 'https://nearme.com.sg/wp-content/uploads/2024/07/Best-Indian-Food-Pasir-Ris.jpg',
      caption: 'Tasty Traditions.',
    },
  ];

  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#F8EDE3', minHeight: '100vh' }}> {/* Set background color */}
        <header style={headerStyle}>
          <h1>India Insight</h1>
        </header>
        <div className='App-body'>
          <Routes>
            <Route path="/signin" element={<><Appbar store={store} /><SignIn /></>} />
            <Route path="/signup" element={<><Appbar store={store} /><SignUp /></>} />
            <Route path="/explore" element={<><Appbar store={store} /><Slideshow /></>} />
            <Route path="/explore2" element={<><Appbar store={store} /><Slideshow slideshowId={2} /></>} />
            <Route path="/user" element={<><HomeAppbar /></>} />
        <Route path="/admin" element={<><AdminAppbar /><></></>} />
        <Route path="/user/culture" element={<><HomeAppbar store={store}/><CultureModule /></>} />
        <Route path="/user/heritage" element={<><HomeAppbar store={store}/><Heritage /></>} />
        <Route path="/user/gallery" element={<><HomeAppbar store={store}/><Gallery /></>} />
        <Route path="/user/feedback" element={<><HomeAppbar store={store}/><Feedback /></>} />
        <Route path="/user/profile" element={<><HomeAppbar store={store}/><ProfilePage /></>} />
        
        <Route path="/user/gallery/dances" element={<><HomeAppbar store={store}/><Dances /></>} />
        <Route path="/user/gallery/arts" element={<><HomeAppbar store={store}/><Arts /></>} />
        <Route path="/user/gallery/food" element={<><HomeAppbar store={store}/><Food /></>} />
        <Route path="/user/gallery/festivals" element={<><HomeAppbar store={store}/><Festivals /></>} />
        <Route path="/user/gallery/temples" element={<><HomeAppbar store={store}/><Temples /></>} />
        <Route path="/user/gallery/monuments" element={<><HomeAppbar store={store}/><Monuments /></>} />
        <Route path="/user/gallery/tribal" element={<><HomeAppbar store={store}/><Tribals /></>} />
        <Route path="/user/contact" element={<><HomeAppbar store={store}/>< Contactus/></>} />
        <Route path="/user/addblog" element={<><HomeAppbar store={store}/>< AddBlog/></>} />
        <Route path="/user/allblog" element={<><HomeAppbar store={store}/>< ViewBlogs/></>} />

        <Route
              path="/"
              element={
                <>
                  <Appbar store={store} />
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h2>Welcome to India Insight</h2>
                    <p>Your gateway to explore the richness and diversity of India.</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                      {images.map((image, index) => (
                        <div key={index} style={imageCardStyle}>
                          <img
                            src={image.src}
                            alt={`Card ${index + 1}`}
                            style={imageStyle}
                            width="300"
                            height="200"
                          />
                          <p>{image.caption}</p>
                        </div>
                      ))}
                    </div>

                    <button style={exploreButtonStyle}>
                      <Link to="/explore" style={{ textDecoration: 'none', color: 'white' }}>
                        Explore
                      </Link>
                    </button>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;