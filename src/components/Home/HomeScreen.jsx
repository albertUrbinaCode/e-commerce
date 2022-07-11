import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import FilterCategory from '../FilterCategory/FilterCategory'
import './style/homeScreen.css'
import { useState } from 'react'

const HomeScreen = () => {
  
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const products = useSelector(state => state.products)

  return (
    <div className='home'>
      <InputSearch/>
      <div className='filterPather'>
        <button className='filter-btn' onClick={() => setIsOpenCategory(!isOpenCategory)}>
              <i className="fa-solid fa-filter"></i>
              <span> Filter</span>
        </button>
      </div>
      <FilterCategory
        isOpenCategory={isOpenCategory}
        setIsOpenCategory={setIsOpenCategory}
      />
      <div className='products-container'>
        {
          products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen