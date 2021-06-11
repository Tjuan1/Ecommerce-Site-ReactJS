import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true, 
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'All',
    category: 'All',
    color: 'All',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,  
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  // we need to set up our useEffect to dispatch the action that is going to 
  // load our products. Otherwise it wont work
  const { products } = useProductsContext()
  const [ state, dispatch] = useReducer(reducer, initialState)

  useEffect(( ) => {
    dispatch({type: LOAD_PRODUCTS, payload: products})
  }, [products])

    //this one runs when we sort the products as well as when we filter
  useEffect(() => {
    dispatch({type: FILTER_PRODUCTS })
    dispatch({type: SORT_PRODUCTS })   
  }, [products, state.sort, state.filters])


  const setGridView = () => {
    dispatch({type:SET_GRIDVIEW})
  }
  const setListView = () => {
    dispatch({type:SET_LISTVIEW})
  }

  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value})
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value

    // because the value cannot be accesible with this method if it´s a button, we have to do this workaround
    // to get the value of categories and colors
    // price would be returned as a string, so we convert it into a numer
    if(name === 'category') {
      value = e.target.textContent
    }
    if(name === 'color') {
      value = e.target.dataset.color
    }
    if(name === 'price') {
      value = Number(value)
    }
    if(name === 'shipping') {
      value = e.target.checked
    }
    dispatch({type: UPDATE_FILTERS, payload: { name, value}})
  }

  const clearFilters = () => {
    dispatch({type: CLEAR_FILTERS })
  }

  return (
    <FilterContext.Provider value={{...state, setGridView, 
    setListView, updateSort, updateFilters, clearFilters}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
