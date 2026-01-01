import React from 'react'
import {initialProducts} from '../data/product'
import { Tag } from 'lucide-react'


const availableCategory = [
  "All", ...new Set(initialProducts.map((p)=> p.category))
];
const CategoryFilter = () => {
  const isSelected = 'Phone';
  return (
    <div className='flex flex-wrap gap-3 pb-6 border-b border-gray-800'>
      <Tag className='mt-2 mr-2 hidden sm:block' />
      {availableCategory.map((p)=>{
        return <button key={p} className={`px-5 py-2 text-sm font-bold rounded-full shadow-md transition duration-200 ${isSelected === p? 'bg-orange-600 text-white shadow-orange-800/50' :'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700' }`}>{p}</button>
      })}
    </div>
  )
}

export default CategoryFilter