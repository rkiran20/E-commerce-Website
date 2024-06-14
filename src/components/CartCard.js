import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItems, changeSelectedCartItems, changeTotalItems, deletedItem, isSelectedItem, notSelectedItem, removeItems, selectItem } from '../redux/cartSlice';

const CartCard = ({data,totalCost,setTotalCost}) => {
    const [number,setNumber] = useState(data.totalNumber);
    const [isSelected,setIsSelected] = useState(false)
    const dispatch = useDispatch();
    const handleDeleteInCart = (id)=>{
        dispatch(removeItems(id));
    }
    const handleChange =(event)=>{
        setNumber(event.target.value)
        const newData = {...data, totalNumber: event.target.value}
        dispatch(changeSelectedCartItems(newData))
        dispatch(changeTotalItems(newData))
        
        //setTotalNumber(totalNumber);
    }
    const handleCheckBox =()=>{
        const value =!isSelected 
        setIsSelected(value);
        if(value === true) {
            dispatch(selectItem(data.totalNumber))
            dispatch(isSelectedItem(data))
        }
        else{
            dispatch(deletedItem(data.totalNumber))
            dispatch(notSelectedItem(data))
        }
    }
  return (
    <div style={{display:'flex',}}>
        <div style={{marginTop:'80px'}}>
            <input type='checkbox' id='check-to-buy' value={isSelected} onChange={handleCheckBox}></input>
        </div>
        <div >
            <div style={{display:'flex', width:'90%' , border:'2px solid black', borderRadius:'5px', margin:'10px', backgroundColor:'rgb(196, 187, 187)'}}> 
                <div>
                    <img src={data.image} style={{width:'100px', height:'150px' , margin:'10px' , borderRadius:'5px'}}></img>
                </div>
                <div>
                    <div style={{display:'flex'}}>
                        <p style={{fontSize:'1.1rem'}} >{data.description}</p>
                        <h2 style={{padding:'10px'}}>$ {data.price} </h2>
                    </div>
                    <div style={{display:'flex', paddingBottom:'10px', marginBottom:'10px'}}>
                    <select id='number' value={number} onChange={(event)=>handleChange(event)} style={{  marginLeft:'30px',cursor:'pointer', width:'80px', height:'30px', borderRadius:'10px', textAlign:'center', backgroundColor:'rgb(195, 94, 228)', fontSize:'1.3rem'   }} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className='deleteCartBtn' onClick={()=>handleDeleteInCart(data.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard