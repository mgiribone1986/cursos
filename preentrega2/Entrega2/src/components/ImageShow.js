import React from 'react';

function ImageShow({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ImageShow;