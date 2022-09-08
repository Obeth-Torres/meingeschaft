import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";

type ProductProps = {
    id: number
    name: string
    image: string
    price: number
    description: string
    quantity: number
}

export interface ShopState {
    prod: ProductProps[]
    cart: ProductProps[]  
    currentItem?: ProductProps  
}
const initialState: ShopState = {
    prod: [{
        id: 0,
        name: 'fake',
        image: '../../../public/notebook.png',
        price: 1.12,
        description: 'fake desc',
        quantity: 1
    }],
    cart: [],
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(c => c.id !== action.payload.id)
        },
        adjustQuantity: (state, action) => {
            state.cart = state.cart.filter(c => 
                c.id === action.payload.id ? ( c.quantity = action.payload.quantity ) : c.quantity)
        },
        loadCurrentProduct: (state, action) => {
            state.currentItem = action.payload
        }
    }
})

export const { addToCart, removeFromCart, adjustQuantity, loadCurrentProduct } = shopSlice.actions
export const selectShop = (state: RootState) => state.shop
export default shopSlice.reducer;