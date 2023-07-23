import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Pour aller a la prochaine image toutes les 3 secondes, vous pouvez ajouter une option qui arrete la slide une fois la derniere image afficher par exemple.
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <button onClick={prevSlide}>&lt;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

// Exemple url d'images:
const imagesList = [
  'url_de_l_image_1.jpg',
  'url_de_l_image_2.jpg',
  'url_de_l_image_3.jpg',
  // Ajoutez autant d'URL d'images que nécessaire
];

const App = () => {
  return (
    <div>
      <h1>Diaporama d'Images</h1>
      <Slideshow images={imagesList} />
    </div>
  );
};

export default App;
