import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS) {
    // we use the spread operator to copy the values of products 
    // othewise it wont work once we filter the products ( we couldn´t go back to the default products)
    // because javascript would have made a copy in memory

    // we find out what the max price is for the filter
    let maxPrice = action.payload.map((prod) => prod.price)
    // we make an array of prices and find the highest
    maxPrice = Math.max(...maxPrice)
  
    return {...state, 
      all_products: [...action.payload], 
      filtered_products: [...action.payload],
      filters: {...state.filters, max_price: maxPrice, price: maxPrice}}
  }

  if(action.type === SET_GRIDVIEW) {
    return {...state, grid_view: true}
  }

  if(action.type === SET_LISTVIEW) {
    return {...state, grid_view: false}
  }
  if(action.type === UPDATE_SORT) {
    return {...state, sort: action.payload }
  }
  if(action.type === SORT_PRODUCTS) {
    const { sort, filtered_products} = state
    let tempProducts = [...filtered_products]
    if(sort === 'price-lowest'){
      tempProducts = tempProducts.sort((a,b) => a.price - b.price)
    }
    if(sort === 'price-highest'){
      tempProducts = tempProducts.sort((a,b) => b.price - a.price)
    }
    if(sort === 'name-a'){
      tempProducts = tempProducts.sort((a,b) => {
        // check localeCompare in google to find more
        return a.name.localeCompare(b.name)
      })
    }
    if(sort === 'name-z'){
      tempProducts = tempProducts.sort((a,b) => {
        // check localeCompare in google to find more
        return b.name.localeCompare(a.name)
      })

    }

    return {...state, filtered_products: tempProducts}
  }
  
  if(action.type === UPDATE_FILTERS) {
    const {name, value} = action.payload
    return { ...state, filters: {...state.filters, [name]: value}}
  }
  if(action.type === FILTER_PRODUCTS) {
    const {all_products} = state
    const {text, category, company, color, price, shipping}= state.filters

    let tempProducts = [...all_products]
    // we filter the products
    if(text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }
    // because category is an array
    if(color !== 'All') {
      tempProducts = tempProducts.filter((product) =>
      {
        return product.colors.find(col => col === color)
      })
    }

    if(company !== 'All') {
      tempProducts = tempProducts.filter(product => product.company === company)
    }

    if(category !== 'All') {
      tempProducts = tempProducts.filter((product) =>
      {
        return product.category.find(cat => cat === category)
      })
    }

    if(shipping) {
      tempProducts = tempProducts.filter(product => product.shipping === true)
    }

   //price
    tempProducts = tempProducts.filter((product) =>  {
      return product.price <= price
    })

    return { ...state, filtered_products: tempProducts}
  }
  if(action.type === CLEAR_FILTERS) {
    return { ...state, filters: {
      text: '',
      company: 'All',
      category: 'All',
      color: 'All',
      price: state.filters.max_price,
      shipping: false,  
      } 
    }
  }

  return state
}

export default filter_reducer
