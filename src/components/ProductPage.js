import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ProductPageCard from './ProductPageCard';

const ProductPage = () => {
    const [data,setData] = useState(null);
    const [filteredData,setFilteredData] = useState(null);
    const location = useLocation();
    const pathName = location.pathname;
    const from = pathName.substring(1,pathName.length);
    const handleData= async()=>{
        const responce = await fetch("https://fakestoreapi.com/products");
        const jsonData = await responce.json();
        const filteredData = jsonData.filter((data)=>{
            return(
                data.category.includes(from)
            )
        })
        setData(filteredData)
        setFilteredData(filteredData)
    }
    useEffect(()=>{
        handleData();
    },[]);
    const filterCategory = (category)=>{
        const newArray = data.filter((data)=> data.category===category)
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
            <button className='productPagebtn pagebtn' onClick={()=>{filterCategory("men's clothing")}}>Men's Clothing</button>
            <button className='productPagebtn pagebtn' onClick={()=>{filterCategory("women's clothing")}}>Women's Clothing</button>
            <button className='productPagebtn pagebtn' onClick={filterAll}>All</button>
        </div>}
        </div>
        <div className='productDiv'>
            {filteredData.map((data,index)=>{
                return(
                <Link  to={`${pathName}/${data.id}`} key={index} className='linkTag' >   
                    <ProductPageCard data={data} />
                </Link>
                )
            })}
        </div>
    </div>
  )
}

export default ProductPage