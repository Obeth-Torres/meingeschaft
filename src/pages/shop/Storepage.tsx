import React from 'react'
import products from '../../data/fakedata.json'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addToCart, loadCurrentProduct, removeFromCart, selectShop } from '../../features/shop/shopSlice'
import './storepage.css'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/currencyFormat'

const Storepage = () => {
  const dispach = useAppDispatch() 
  const selector = useAppSelector(selectShop)
  return (
    <div className='storepage'>
        <h2>Products in stoke for now</h2>
        <p>Escoge tus suvenirs antes de que se agoten!!!</p>
        <div className="storeBox">
          {
            products.map(i => (
              <div  key={i.id}>
                <div className="product" onClick={() => dispach(loadCurrentProduct({...i}))}>
                  <Link to='product'>
                    <h3>{i.name} </h3>
                    <img src={i.image}  />                    
                  </Link>
                  <div className='productPriceAndButton'>
                    {formatCurrency(i.price)}
                    {selector.cart.some(prod => prod.id === i.id) ? 
                      <button className='btnRemove' onClick={() => 
                        dispach(removeFromCart({id: i.id}))}>
                          Remove
                      </button> : 
                      <button className='btnAdd' onClick={() => 
                        dispach(addToCart({
                          id: i.id,
                          name: i.name,
                          image: i.image,
                          price: i.price,
                          description: i.description,
                          quantity: i.quantity 
                        }))}>
                        add to cart
                      </button>
                    } 
                  </div>                                   
                </div>                              
              </div>                          
            ))
          }
        </div>
    </div>
  )
}

export default Storepage