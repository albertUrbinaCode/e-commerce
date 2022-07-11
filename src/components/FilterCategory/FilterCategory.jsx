import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { filterCategoriesThunk } from '../../store/slices/products.slice';
import './filterCategory.css'

const FilterCategory = ({isOpenCategory, setIsOpenCategory}) => {
    
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
          .then(res => setCategories(res.data.data.categories))
          .catch(err => console.log(err))
    }, [])
    
    const dispatch = useDispatch()

    const filterPreci = (e) =>{
        e.preventDefault();
    }

    return (
        <aside className={`category-modal ${isOpenCategory ? "category-open" : " "} `}>
            <button
                className='btn-close'
                onClick={()=> setIsOpenCategory(!isOpenCategory)}
            >
               <i className="fa-solid fa-xmark"></i>
            </button>
            <h4>Filters</h4>
           
            <div className='filter-preci'>
                <div className='title-filter-category'>
                    <h5>Price</h5>
                    <button>
                        <i className="fa-solid fa-angle-down"></i>  
                    </button>
                </div>

                <form action="" className='filter-form-input'>
                    <div className="input-conteiner">
                        <label htmlFor="from">From</label>
                        <input 
                            type="number"
                            id='from'
                            name='from' 
                        />
                        
                    </div>
                    <div className="input-conteiner">
                        <label htmlFor="to">To</label>
                        <input 
                            type="number"
                            id='to'
                            name='to' 
                        />
                    </div>
                    <button
                        className='btn-filter-preci'
                        onClick={filterPreci}
                    >
                        Filter Price
                    </button>
                </form>
            </div>
            
            <div className='filter-category'>
                <div className='title-filter-category'>
                    <h5>Category</h5>
                    <button>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                </div>
                <div className='filter-category-items'>
                    {categories &&
                        categories.map(category =>  (
                        <button 
                                key={category?.id}
                                onClick={()=> dispatch(filterCategoriesThunk(category?.id))}
                            >
                            {category?.name}
                        </button>
                        ))
                    }
                </div>
            </div>
        </aside>
    );
};

export default FilterCategory;