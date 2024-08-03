import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearItem } from '../utils/cartSlice';

const Cart = () => {
  
  const cartItems = useSelector((store) => store?.cart?.item);

  const dispatch = useDispatch()

  const hanldeClear = () => {
    dispatch(clearItem())
  }
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        {cartItems.length > 0 ? (
          <>
            <button
              className=" p-2 m-2 bg-black text-white rounded-lg"
              onClick={hanldeClear}
            >
              Clear Cart
            </button>
            <ItemList items={cartItems} />
          </>
        ) : (
          <h1 className="text-xl font-bold pt-3">Cart is empty. Add the item</h1>
        )}
      </div>
    </div>
  );
}

export default Cart