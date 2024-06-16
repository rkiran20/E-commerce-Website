import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { bodyImg } from '../Data'
import ProductPageCard from './ProductPageCard';
import { findingPath } from '../utils/functions';
import ShopNowCard from './ShopNowCard';

const Body = () => {
  const [proudData,setProudData] = useState([]);     // a state variable for Proud Products data
  const [trendingData,setTrendingData] = useState([]); // a state variable for Trending data
  const handleData= async()=>{                          // this is the logic for fetching the data from api
    const responce = await fetch("https://fakestoreapi.com/products");
    const jsonData = await responce.json();
    const filteredData = jsonData.filter((data)=>{
      return(
        data.rating.rate>= 3.8         // criteria for Proud Products
      )
    })
    const anotherData = jsonData.filter((data)=>{
      return(
        data.rating.count>400              // criteria for trending Products
      )
    })
    setProudData(filteredData)            // updated our state variable with this function
    setTrendingData(anotherData)          
    }
    useEffect(()=>{                       // In this process this requests the api and get the data from the desired api
        handleData();
    },[]);
  return (
    <div>
      <div className='bodyPicturesDiv' >
          {                                              // mapping through the category images and linking this desired products page
              bodyImg.map((data,index)=>{
                  return (
                      <Link key={data.id} to={"/"+ data.name }  className='linkTag' >
                        <div>
                        <img src={data.image} alt='logo' className='mainImages'></img>
                        <p className='picsCategory'> {data.name.toLocaleUpperCase()} </p>
                        </div>
                      </Link>
                  )
              })
          }
      </div>
      <div>
        <h2 style={{fontWeight:'bold',paddingTop:'50px'}}>Products we are proud of</h2>
       {                                          // this is for proud products
         !proudData ? <div>shimmer UI</div> :
           <div className='productDiv'>
            {proudData.map((data)=>{
              return  <Link className='linkTag' key={data.id} to={`${findingPath(data.category)}/${data.id}`} > <ProductPageCard data={data}/></Link>
            })}
           </div>
       }
      </div>
      <div>
        <ShopNowCard heading="Unleash Your Street Style with Our New Collection" text="50% OFF Summer Super Sale" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJvh7I8OtrMXzTCbdHydwrZxipkM4wr0y1A&s" />
      </div>
      <div>
      <h2 style={{fontWeight:'bold',paddingTop:'20px'}}>Trending Products</h2>
      <div>
        {                                           // this is for trending products
         !trendingData ? <div>shimmer UI</div> :
           <div className='productDiv'>
            {trendingData.map((data)=>{
              return <Link key={data.id} className='linkTag' to={`${findingPath(data.category)}/${data.id}`}><ProductPageCard data={data} /> </Link>
            })}
           </div>
       }
        </div>
      </div>
      <div style={{paddingBottom:'20px'}}>
        <ShopNowCard heading="Freshen collection" text="Authentic vintage collection start from $50" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkPThyZgudyvyENPDgYSqol6AlrZZjKIeZw&s" />
      </div>
    </div>
  )
}

export default Body