import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProductPageCard from './ProductPageCard';

const ProductPage = () => {
    const [data,setData] = useState(null);
    const [filteredData,setFilteredData] = useState(null);
    const location = useLocation();
    //console.log(location.state)
    const {from} = location.state;
    const handleData= async()=>{
        const responce = await fetch("https://fakestoreapi.com/products");
        const jsonData = await responce.json();
       // console.log(jsonData)
        const filteredData = jsonData.filter((data)=>{
            return(
                data.category.includes(from)
            )
        })
        setData(filteredData)
        setFilteredData(filteredData)
       // console.log(filteredData)
    }
    useEffect(()=>{
        handleData();
    },[]);
    const filterMens=()=>{
        const newArray = data.filter((data)=> data.category==="men's clothing")
        setFilteredData(newArray)
    }
    const filterWomens =()=>{
        const newArray = data.filter((data)=>data.category === "women's clothing")
        setFilteredData(newArray)
    }
    const filterAll=()=>{
        setFilteredData(data)
    }
    if(filteredData === null) return;
  return (
    <div>
        <div className='productsBtnDiv'>
            <Link to="/"><button className='productPagebtn'>←  Home</button></Link>
            {from ==="clothing" && <div className='productPageBtnDiv' >
            <button className='productPagebtn pageBtn' onClick={filterMens}>Men's Clothing</button>
            <button className='productPagebtn pageBtn' onClick={filterWomens}>Women's Clothing</button>
            <button className='productPagebtn pageBtn' onClick={filterAll}>All</button>
        </div>}
        </div>
        <div className='productDiv'>
            {filteredData.map((data,index)=>{
                return(
                <Link state={{data , from:from}}  to="/clothing/123" key={index} className='linkTag' >   
                    <ProductPageCard data={data} />
                </Link>
                )
            })}
        </div>
    </div>
  )
}

export default ProductPage