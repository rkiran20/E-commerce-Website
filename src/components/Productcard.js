import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { addItems } from '../redux/cartSlice';

const Productcard = () => {
    const [number,setNumber] = useState(1);
    const location = useLocation();
    const {data} = location.state;
    const dispatch = useDispatch();
    //console.log(from)
    //console.log(data)
    const handleDelete = ()=>{
        if(number === 1) return;
        setNumber(number-1);
    }
    const handleAddCart = (data)=>{
        const obj = {...data,totalNumber : number}
        //console.log(obj)
        dispatch(addItems(obj))
    }
  return (
    <div className='productMainDiv'>
        <h2 className='productCardTitle' >{data.title}</h2>
        <div className='specificCardDiv'>
            <img src={data.image} className='productCardImg'></img>
            <div className='productCardDetailsDiv'>
                <p className='productCardDetailsDes'>{data.description}</p>
                <div style={{display:'flex'}} > 
                    <h3 style={{fontSize:'1.5rem'}}>Quantity</h3>
                    <div style={{display:'flex', margin:'10px 30px'}} >
                        <button onClick={()=>{setNumber(number+1)}} className='btn'  >+</button>
                        <p className='number'>{number}</p>
                        <button onClick={handleDelete} className='btn'>-</button>
                    </div>
                     { number>=1 ? <h1 >$ {data.price * number}</h1> : <h1>$ {data.price}</h1>}
                </div>
                <div>
                    <button onClick={()=>{handleAddCart(data)}} className='addBtn' > ADD TO CART</button>
                    <button className='buyBtn'>BUY NOW</button>
                </div>
            </div>
        </div>
        <div className='horizontalLine'></div>
        <div style={{display:'flex', textAlign:'center', margin:'auto', width:'70%' }}>
            <div style={{width:'350px', padding:'10px', backgroundColor:'rgb(214, 208, 208)', borderRadius:'5px',margin:'15px'}}>
                <h3 style={{}}>Category</h3>
                <p style={{fontSize:'1.2rem'}}>{data.category}</p>
            </div>
            <div style={{width:'350px', padding:'10px', backgroundColor:'rgb(214, 208, 208)', borderRadius:'5px',margin:'15px'}}>
                <h3 style={{}}>Rating</h3>
                <p style={{fontSize:'1.2rem'}}>{data.rating.rate}</p>
            </div>
            <div style={{width:'350px', padding:'10px', backgroundColor:'rgb(214, 208, 208)', borderRadius:'5px',margin:'15px'}}>
                <h3 style={{}}>Count</h3>
                <p style={{fontSize:'1.2rem'}}>{data.rating.count}</p>
            </div>
        </div>
    </div>
  )
}

export default Productcard