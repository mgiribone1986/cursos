// ImageList.js
import React from 'react';
import { Link } from 'react-router-dom';

function ImageList({ products }) {
  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <div key={product.id} className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={product.image} alt={product.title} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-5">{product.title}</p>
              <p className="subtitle is-6">${product.price}</p>
              <div className="content">{product.description}</div>
              {/* Pasa todos los datos del producto */}
              <Link to={`/galeria/${product.id}`} state={{ product }}>
                <button className="button is-link">Ver Detalle</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
