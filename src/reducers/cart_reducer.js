import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART) {
    const {id, color, amount, product} = action.payload;
    // we look if that item exists in the cart with the same colour
    const tempItem = state.cart.find((item) => item.id === id + color)
    if(tempItem) {
      // we find where the item is and we increase the amount
      const tempCart = state.cart.map((cartItem) => {
        if(cartItem.id === id  + color){
          let newAmount = cartItem.amount + amount
          // we can´t add more than the stock
            if(newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return {...cartItem, amount: newAmount}

        } else{
          return cartItem
        }

      })
      return {...state,cart: tempCart}
    } else {
      //we add the item to the cart
      const newItem = {
        id: id+color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      }
      return {...state,cart: [...state.cart, newItem]}
    }
  
  }
  if(action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload.id)
    return {...state, cart: tempCart}
  }
  if(action.type === CLEAR_CART) {
    return {...state, cart: []}
  }
  if(action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const {id, value} = action.payload
    const tempCart = state.cart.map((item) => {
      if(item.id === id){
        // increase
        if(value === 'inc') {
          let newAmount = item.amount + 1
          if(newAmount > item.max) {
            newAmount = item.max
          }
          return {...item, amount: newAmount} 
        }

        // decrease
        if(value === 'dec') {
          let newAmount = item.amount - 1
          if(newAmount < 1) {
            newAmount = 1
          }
          return {...item, amount: newAmount} 
        }

      } 
      return item
    })
    return {...state,cart: tempCart}

  }
  if(action.type === COUNT_CART_TOTALS) {
    // we count the items and price
    // El valor devuelto de la función reductora se asigna al acumulador, 
    // cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final
    const {total_items, total_amount} = state.cart.reduce((total, cartItem) => {
        //we check the cartItem in each iteration
        const {amount, price } = cartItem
        //we calculate the items
        total.total_items += amount
        // we calculate the total price
        total.total_amount += price * amount
        return total
    }, {
      total_items: 0, total_amount: 0
    }) 
    return {...state, total_items: total_items, total_amount: total_amount}
  }
  return state
}

export default cart_reducer
