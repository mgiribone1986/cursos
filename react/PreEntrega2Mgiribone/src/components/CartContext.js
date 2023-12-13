// En CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

// Definir las acciones
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

// Definir el reducer y el estado inicial
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const initialState = {
  items: [], // Lista de items en el carrito
};

// Crear el contexto
const CartContext = createContext();

// Exportar el proveedor del contexto
export function CartProvider({ children }) {
  // Utilizar useReducer con el reducer y el estado inicial
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Acciones para el contexto
  const addItem = (item) => dispatch({ type: ADD_ITEM, payload: item });
  const removeItem = (itemId) => dispatch({ type: REMOVE_ITEM, payload: itemId });
  const clearCart = () => dispatch({ type: CLEAR_CART });

  // Proporcionar el estado y las acciones como valor del contexto
  const contextValue = {
    cartState,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

// Exportar un hook personalizado para acceder al contexto fácilmente
export function useCart() {
  return useContext(CartContext);
}
