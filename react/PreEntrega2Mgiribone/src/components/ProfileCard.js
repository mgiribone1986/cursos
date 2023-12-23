// ProfileCard.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageShow from './ImageShow';
import { useCart } from './CartContext';  // Ajusta la ruta correcta

function ProfileCard() {
  const { state } = useLocation();
  const [count, setCount] = useState(0);

  // Obtén los detalles del producto desde el estado de la ubicación
  const product = state && state.product;

  const { addItem } = useCart();  // Usa useCart directamente

  useEffect(() => {
    // Puedes realizar acciones adicionales cuando cambia el producto
    // por ejemplo, puedes hacer una llamada para obtener más detalles del producto.
  }, [product]);

  function handleClickSuma() {
    setCount(count + 1);
  }

  function handleClickResta() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleAddToCart() {
    // Agregar el producto al carrito utilizando el contexto
    addItem({ id: product.id, title: product.title, price: product.price, quantity: count });
    // Puedes ajustar la estructura del objeto según tus necesidades
    // Por ejemplo, podrías incluir más detalles del producto.
  }

  return (
    <div className="card">
      <Link to="/galeria">Volver a la Galería</Link>
      <ImageShow product={product} />
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{product.title}</p>
          <p className="subtitle is-6">${product.price}</p>
          <div className="content">{product.description}</div>
          <button onClick={handleAddToCart} className="button is-primary">Agregar a Carrito</button>
        </div>
        <div className="columns">
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
