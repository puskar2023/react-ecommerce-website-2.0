import React from "react";
import { Search } from "lucide-react";

const SearchFilter = () => {
  return (
    <>
      <div className="mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-orange-600/50">
          <Search className="w-5 h-5 text-gray-500 ml-4 mr-4" />  
          <input
            type="text"
            placeholder="Search high-performance product by name or feature..."
            className="w-full font-medium p-4 outline-none text-white bg-gray-800 placeholder-gray-500 text-white"
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
