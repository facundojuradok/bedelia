import React, { useState, useEffect } from 'react';
import './Noticias.css';

// Esta es la URL de la imagen de respaldo que se usará si una noticia no tiene imagen
const fallbackImageURL = 'URL_DE_TU_IMAGEN_DE_RESPALDO';

function Noticias() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${"basket"}&sortBy=publishedAt&apiKey=3b286d5d11534b2b85a7a4906b4a5f6c&language=es`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const noticias = data ? data.articles.slice(0, 6) : [];


  return (
    <div className='container'>
      <h1>Noticias sobre basket</h1>
      <div className="news-container">
        {noticias.map((article, index) => (
          <div className="news-item" key={index}>
            <div className="news-image">
              {article.urlToImage ? (
                <img src={article.urlToImage} alt={article.title} />
              ) : (
                <img src={fallbackImageURL} alt="Imagen de respaldo" />
              )}
            </div>
            <h2>{article.title}</h2>
            <p className="news-description">{article.description}</p>
            <a className='blog__enlace-blog' href={article.url} target="_blank" rel="noopener noreferrer">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;


