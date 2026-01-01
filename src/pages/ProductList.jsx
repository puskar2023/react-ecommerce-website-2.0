import React, { useContext } from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { cartcontext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
const ProductList = () => {
  const products = useContext(cartcontext);
  console.log(products);
  const renderproduct = products.map((product,idx) => {
    return <ProductCard key={idx} product={product} />
  })
  return (
    <>
      <SearchFilter />
      <CategoryFilter />
      <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-2 pt-4">Featured Gear ({products.length} Items)</h2>
      <div className="mt-5 gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">{renderproduct}</div>

    </>
  );
};

export default ProductList;
