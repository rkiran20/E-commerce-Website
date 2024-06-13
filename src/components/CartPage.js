import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItems } from '../redux/cartSlice'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const [totalNumber,setTotalNumber] = useState(0);
    const [isEmi,setIsEmi] = useState(false);
    const [totalCost,setTotalCost] = useState(0);
    const cartData = useSelector((store)=> store.cart.items)
    console.log(cartData)
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
  return (
    <div>
        <div style={{display:'flex'}}>
            <h2  style={{textAlign:'right', width:'50%'}}> Cart Page</h2>
            {cartData.length!==0 && <div style={{width:'50%', textAlign:'right', paddingRight:'30px' , marginTop:'20px'}}>
                <button onClick={handleClearCart}  className='buyBtn' >CLEAR CART</button>
            </div>}
        </div>   
        <div style={{display:'flex', width:'100%'}}>
            <div style={{marginLeft:'30px', paddingLeft:'30px'}}>
                {cartData.map((data,index)=>{
                    return <CartCard key={index} data={data} setTotalNumber={setTotalNumber} totalNumber={totalNumber} totalCost={totalCost} setTotalCost={setTotalCost} />
                })}
            </div>
            {cartData.length!==0 ? <div style={{width:'30%', textAlign:'left' , padding:'10px',backgroundColor:'rgb(196, 187, 187)', marginRight:'15px',marginTop:'10px', display:'inline-block',height:'fitContent'}}>
                <div style={{ margin:'10px 0px'}}>SubTotal ({totalNumber} items) :  $ {totalCost}</div>
                <input type='checkbox'></input>
                <label style={{fontSize:'1.1rem' }}>This order countains a gift</label>
                <button style={{width:'150px',padding:'7px', backgroundColor:'rgb(2, 69, 8)',borderRadius:'10px',color:'white', margin:'10px 0px'}}>Proceed To Buy</button>
                <div >
                    <div onClick={()=>{setIsEmi(!isEmi)}} style={{width:'70%',display:'flex', justifyContent:'space-between' ,border:'solid 2px black', padding:'7px',cursor:'pointer'}}>
                        <p>EMI Available</p>
                        <p>⬇️</p>
                    </div>
                    {isEmi && 
                        <p style={{width:'70%' ,padding:'7px', border:'black solid 2px',margin:'0px'}}>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).</p>
                    }
                </div>
                </div> : <div style={{height:'400px', display:'flex',justifyContent:'space-between'}}>
                    <p style={{fontSize:'2rem'}}> Your Cart is Empty Please shop</p>
                    <Link to={"/"}  className='linkCart'>  <button className='cartHome'>Click here to Browse</button></Link>
                </div>}
        </div> 
    </div>
  )
}

export default CartPage