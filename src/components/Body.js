import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { bodyImg } from '../Data'
import ProductPageCard from './ProductPageCard';




const Body = () => {
  const [proudData,setProudData] = useState([]);
  const [trendingData,setTrendingData] = useState([]);
      const handleData= async()=>{
        const responce = await fetch("https://fakestoreapi.com/products");
        const jsonData = await responce.json();
      // console.log(jsonData)
        const filteredData = jsonData.filter((data)=>{
            return(
                data.rating.rate>= 3.8
            )
        })
        const anotherData = jsonData.filter((data)=>{
          return(
            data.rating.count>400
          )
        })
        setProudData(filteredData)
        setTrendingData(anotherData)
     //console.log(anotherData)
    }
    useEffect(()=>{
        handleData();
    },[]);
  return (
    <div>
      <div className='bodyPicturesDiv' >
          {
              bodyImg.map((data,index)=>{
                  return (
                      <Link key={data.id} to={"/"+ data.name } state={{from: data.name}} className='linkTag' >
                        <div>
                        <img src={data.image} className='mainImages'></img>
                        <p className='picsCategory'> {data.name.toLocaleUpperCase()} </p>
                        </div>
                      </Link>
                  )
              })
          }
      </div>
      <div>
        <h2 style={{fontWeight:'bold',paddingTop:'50px'}}>Products we are proud of</h2>
        <div >
       {/*{!proudData ? <div>shimmer Ui</div>:
          <div className='productDiv'>
            {proudData.map((data,index)=>{
              return (
                <ProudCard data = {data} />
              )
            })}
          </div>
        }*/}</div>
       {
         !proudData ? <div>shimmer UI</div> :
         <Link  className='linkTag'>
           <div className='productDiv'>
            {proudData.map((data)=>{
              return <ProductPageCard data={data} key={data.id}/>
            })}
           </div>
          </Link>
       }
      </div>
      <div className='bodyClothingDiv'>
        <div className='bodyClothingDivLeft' >
          <p style={{marginTop:'30px', paddingTop:'30px', fontSize:'1.5rem',paddingLeft:'30px'}}>50% OFF Summer Super Sale</p>
          <h2 style={{fontSize:'1.7rem',paddingLeft:'30px'}}>Unleash Your Street Style with Our New Collection</h2>
          <Link to="/" ><button className='bodyClothingBtn'>Shop Now  →</button></Link>
        </div>
        <img style={{width:'220px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJvh7I8OtrMXzTCbdHydwrZxipkM4wr0y1A&s' alt='logo'></img>
      </div>
      <div>
      <h2 style={{fontWeight:'bold',paddingTop:'20px'}}>Trending Products</h2>
      <div>
        {
         !trendingData ? <div>shimmer UI</div> :
         <Link  className='linkTag'>
           <div className='productDiv'>
            {trendingData.map((data)=>{
              return <ProductPageCard data={data} key={data.id}/>
            })}
           </div>
          </Link>
       }
        </div>
      </div>
      <div className='bodyClothingDiv' style={{marginBottom:'10px'}}>
        <div className='bodyClothingDivLeft' >
          <h2 style={{fontSize:'4rem',paddingLeft:'30px',marginTop:'30px', paddingTop:'30px'}}>Freshen collection</h2>
          <p style={{ fontSize:'1.5rem',paddingLeft:'30px',paddingBottom:'20px'}}>Authentic vintage collection <Link>start from $50</Link></p>
          <Link to="/" ><button className='bodyClothingBtn'>Shop Now  →</button></Link>
        </div>
        <img style={{width:'220px'}} src='data:image/jpeg;base64,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' alt='logo'></img>
    
      </div>
    </div>
  )
}

export default Body