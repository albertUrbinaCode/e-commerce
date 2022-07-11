import axios from 'axios';
import './style/inputStyle.css'
import { useDispatch} from 'react-redux'
import { getFilterProducts } from '../../store/slices/products.slice'
import React, { useEffect, useState } from 'react'


const InputSearch = () => {
 
  const dispatch = useDispatch()

  const [filterProducts, setFilterProducts] = useState()

  const searchProductSubmit = (e) => {
    e.preventDefault();
    dispatch(getFilterProducts(filterProducts))
  };

  return (
          <form className="search-box" onSubmit={searchProductSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Product"
              value={filterProducts}
              onChange={(e) => setFilterProducts(e.target.value)}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
  )
}

export default InputSearch