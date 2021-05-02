import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

import { capitalizeFirstLetter } from './utils/helpers';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    { name: "commercial", description: "Photos of grocery stores, food trucks and other commercial projects" },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    { name: "landscape", description: "Fields, farmhouse, waterfalls, and the beauty of nature" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >
      </Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
