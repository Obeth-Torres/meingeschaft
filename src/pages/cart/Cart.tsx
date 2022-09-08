import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { adjustQuantity, removeFromCart, selectShop } from '../../features/shop/shopSlice'
import './cart.css'

const Cart = () => {
  const cartState = useAppSelector(selectShop)
  const dispach = useAppDispatch()
  const [total, setTotal] = useState(0)
  const [totalproducts, setTotalproducts] = useState(0)

  const chageQuantity = (id: number, quantity: number) => {
    dispach(adjustQuantity ({
      id,
      quantity
    }))
  }

  useEffect(() => {
    setTotal(
     cartState.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0) 
    )    
    setTotalproducts(
      cartState.cart.reduce((acc, curr) => acc + Number(curr.quantity), 0)
    )
  }, [cartState])
   
  const currencyFormat = (dato: number) => {
    return (
      new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(dato)
    )    
  }

  return (
    <div className='cart'> 
      <h3>This is your Cart</h3>      
      <div className="total">
       <h4>Products in count: {totalproducts}</h4>  
       <p>Total in count: </p> {currencyFormat(total)}       
      </div>
      {
        cartState.cart.length >0? (
          cartState.cart.map(i => (
            <div className='cartProductBox' key={i.id} > 
              <div className="cartProduct">
                {i.name}                  
                <img src={i.image} alt="" />
              </div> 
              <div className="productPrice">
                <p>{currencyFormat(i.price * i.quantity)}</p>
                <div className='changeQuantity'>                                
                  <button onClick={() => chageQuantity(i.id, i.quantity -1)} >-</button>
                  <p> quantity  {i.quantity} </p>
                  <button onClick={() => chageQuantity(i.id, i.quantity + 1)} >+</button>
                </div>
              </div>                               
            </div>
          ))
        ): <p>cart empty</p>
      }
      
    </div>
  )
}

export default Cart