import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoadingGlobal } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
      setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productsSlice.actions;

export const getAllproducts = () => (dispatch) => {
  dispatch(setIsLoadingGlobal(true))
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
  return axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
    .finally(() => dispatch(setIsLoadingGlobal(false)))
}

export const getFilterProducts = headline => (dispatch) => {
  dispatch(setIsLoadingGlobal(true))
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${headline}`
  return axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
    .finally(() => dispatch(setIsLoadingGlobal(false)))
}

export const filterCategoriesThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoadingGlobal(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`)
      .then(res => dispatch(setProductsGlobal(res.data.data.products)))
      .catch(err => console.log(err))
      .finally(() => dispatch(setIsLoadingGlobal(false)))
  }
}

export default productsSlice.reducer;
