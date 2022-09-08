import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectShop, addToCart, removeFromCart, adjustQuantity } from '../../features/shop/shopSlice'
import './singleProduct.css'

const Product = () => {
  const selector = useAppSelector(selectShop)
  const product = selector.currentItem
  const dispach = useAppDispatch()
  const chageQuantity = (id: number, quantity: number) => {
    dispach(adjustQuantity ({
      id, 
      quantity 
    }))
  }
  return (
    <div className='singleProductPage'>
      <div className='singleProduct'>      
        <div className="productName">
          <h2> {product?.name} </h2>
          <img src={product?.image} alt="" />        
        </div>
        <div className="productPrice">
          {product?.price}
          {selector.cart.some(prod => prod.id === product?.id) ? 
              <button className='btnRemove' onClick={() => 
                  dispach(removeFromCart({id: product?.id}))}
              > Remove</button>              
             : 
            <button className='btnAdd' onClick={() => 
              dispach(addToCart({
                id: product?.id,
                name: product?.name,
                image: product?.image,
                price: product?.price,
                quantity: product?.quantity 
              }))}>
              add to cart
            </button> }          
          </div>      
      </div>
      <div className="description">
        <h4>Description: </h4>
        <p> {product?.description } </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat iure laudantium voluptates. Repellat voluptates, officiis adipisci tempore minus possimus commodi dolor, est reprehenderit, enim amet! Sed deleniti veniam beatae reprehenderit, quis tempora accusamus? Sequi, doloremque mollitia repellat dolore laudantium in harum eligendi eaque aut a illo iusto minima. Dolorum beatae voluptate voluptatum aspernatur sequi esse fugit odit deserunt cumque nam harum commodi earum ipsa voluptatem cupiditate, facere, consectetur eveniet tempore ullam, vel explicabo vitae inventore reprehenderit! Suscipit odit dolorum minus modi vitae dignissimos, consectetur, nam ad, totam omnis deleniti similique. Qui, aliquid repellat. Accusantium vitae repellendus sit fugiat quis.</p>  
      </div>
    </div>
  )
}

export default Product