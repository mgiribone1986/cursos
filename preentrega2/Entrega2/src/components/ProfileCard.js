import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileCard(props) {
  const [count, setCount] = useState(0);
  const { titulo, arroba, img, children } = props;

  function handleClickSuma() {
    setCount(count + 1);
  }

  function handleClickResta() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="card">
      <Link to="/galeria">Volver a la Galería</Link>
      <div className="card-img">
        <figure className="image is-1by1">
          <img src={img} alt="logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{titulo}</p>
          <p className="subtitle is-6">{arroba}</p>
          {children}
        </div>
        <div className="columns">
          <div className="column is-4">
            <button onClick={handleClickSuma} className="button is-danger is-fullwidth">+</button>
          </div>
          <div className="column is-4">
            <span>Likes: {count}</span>
          </div>
          <div className="column is-4">
            <button onClick={handleClickResta} className="button is-primary is-fullwidth">-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*Agregar un boton que diga agregar al carrito  Mirar ultimas 5 diapositivas de las ultimas 5 clases */

export default ProfileCard;