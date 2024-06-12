import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItems } from '../redux/cartSlice'

const CartPage = () => {
    const [number,setNumber] = useState(1)
    const cartData = useSelector((store)=> store.cart.items)
    //console.log(cartData)
    const handleDelete =()=>{
        if(number===1) return;
        setNumber(number-1);
    }
    const dispatch = useDispatch();
    const handleDeleteInCart = (id)=>{
        dispatch(removeItems(id));
    }
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
  return (
    <div>
        <h2 style={{textAlign:'center'}}> Cart Page</h2>
        <button onClick={handleClearCart}>CLEAR CART</button>
        {cartData.length!==0 && 
            <div>
                {cartData.map((data,index)=>{
                    return(
                        <div key={index} style={{display:'flex', width:'800px', height:'200px', border:'black solid 2px', padding:'10px', borderRadius:'5px',width:'50%', margin:'auto' , marginBottom:'20px'}}>
            <img src={data.image} className='productCardImg'></img>
            <div>
                <p>{data.description}</p>
                <div style={{display:'flex'}} > 
                    <h3>Quantity</h3>
                    <div style={{display:'flex'}}>
                        <button onClick={()=>{setNumber(number+1)}}>+</button>
                        <p>{data.totalNumber}</p>
                        <button onClick={handleDelete}>-</button>
                    </div>
                   { number>=1 ? <p>$ {data.price * number}</p> : <p>$ {data.price}</p>}
                </div>
                <div>
                    <button>BUY NOW</button>
                    <button onClick={()=>{handleDeleteInCart(data.id)}}>Delete</button>
                </div>
            </div>
        </div>
                    )
                })}
            </div>
        }
    </div>
  )
}

export default CartPage