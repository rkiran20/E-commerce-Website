import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom'
import { addItems } from '../redux/cartSlice';

const Productcard = () => {
    const [newData,setNewData] = useState([]);
    const [number,setNumber] = useState(1);
    const location = useLocation();
    console.log(location)
    const {resId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        gettingData();
    },[]);
    const gettingData = async ()=>{
        const responce = await fetch("https://fakestoreapi.com/products");
        const jsonData = await responce.json();
        setNewData(jsonData)
    }
    const newLength = Math.floor(location.pathname.length) - Math.floor(resId.length) 
    const newPathName = location.pathname.substring(0,newLength-1)
    const handleDelete = ()=>{
        if(number === 1) return;
        setNumber(number-1);
    }
    const handleAddCart = (data)=>{
        const obj = {...data,totalNumber : number}
        dispatch(addItems(obj))
    }
  return (
    <div className='productMainDiv'>
        {newData.length>0 && <div>
            <Link to={newPathName}><button className='productPagebtn'>←  Back</button></Link>
            <Link to="/"><button className='productPagebtn' style={{paddingLeft:'50px'}}>Home</button></Link>
        <h2 className='productCardTitle' >{newData[resId-1].title}</h2>
        <div className='specificCardDiv'>
            <img src={newData[resId-1].image} alt='logo' className='productCardImg'></img>
            <div className='productCardDetailsDiv'>
                <p className='productCardDetailsDes'>{newData[resId-1].description}</p>
                <div style={{display:'flex'}} > 
                    <h3 style={{fontSize:'1.5rem'}}>Quantity</h3>
                    <div style={{display:'flex', margin:'10px 30px'}} >
                        <button onClick={()=>{setNumber(number+1)}} className='btn'  >+</button>
                        <p className='number'>{number}</p>
                        <button onClick={handleDelete} className='btn'>-</button>
                    </div>
                     { number>=1 ? <h1 >$ {newData[resId-1].price * number}</h1> : <h1>$ {newData[resId-1].price}</h1>}
                </div>
                <div>
                    <button onClick={()=>{handleAddCart(newData[resId-1])}} className='addBtn' > ADD TO CART</button>
                    <button className='buyBtn'>BUY NOW</button>
                </div>
            </div>
        </div>
        <div className='horizontalLine'></div>
        <div style={{display:'flex', textAlign:'center', margin:'auto', width:'70%' }}>
            <div style={{width:'350px', padding:'10px', backgroundColor:'rgb(214, 208, 208)', borderRadius:'5px',margin:'15px'}}>
                <h3 style={{}}>Category</h3>
                <p style={{fontSize:'1.2rem'}}>{newData[resId-1].category}</p>
            </div>
            <div style={{width:'350px', padding:'10px', backgroundColor:'rgb(214, 208, 208)', borderRadius:'5px',margin:'15px'}}>
                <h3 style={{}}>Rating</h3>
                <p style={{fontSize:'1.2rem'}}>{newData[resId-1].rating.rate}</p>
            </div>
            <div style={{width:'350px', padding:'10px', backgroundColor:'rgb(214, 208, 208)', borderRadius:'5px',margin:'15px'}}>
                <h3 style={{}}>Count</h3>
                <p style={{fontSize:'1.2rem'}}>{newData[resId-1].rating.count}</p>
            </div>
        </div>
        </div>  }
    </div>
  )
}

export default Productcard