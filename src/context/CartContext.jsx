import React, {createContext, useContext} from 'react'
import { initialProducts } from '../data/product'

export const cartcontext = createContext(null);

const Cartcontext = (props) => {
  const products = initialProducts;
  return (
    <cartcontext.Provider value={products}>{props.children}</cartcontext.Provider>
  )
}

export default Cartcontext;