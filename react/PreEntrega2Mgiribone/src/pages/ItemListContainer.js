import React, { useEffect } from 'react';
import listaProductos from '../data/data.json';
import ImageList from '../components/ImageList';

function ItemListContainer() {
  console.log('ItemListContainer rendered'); 

  useEffect(() => {
    try {
      console.log('Data read successfully:', listaProductos);
    } catch (error) {
      console.error('Error reading data:', error);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="title">Productos</h1>
      <ImageList products={listaProductos} />
    </div>
  );
}

export default ItemListContainer;

/* Crear un boton detalle de producto, que me redirija a ProfileCard*/
