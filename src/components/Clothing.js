import React, { useEffect, useState } from 'react'

const Colthing = () => {
  const [data,setData] = useState(null)
  const [filterData,setFilterData] = useState(null)
    useEffect (()=>{
        handleData();
    },[]);
    
    const handleData = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        const newArray=json.filter((data)=> {
          return(
            data.category.includes("clothing") 
          )
        })
        setData(newArray);
        console.log(json)
    }
    if(data === null) return;
    const filterMens = ()=>{
      const newArray = data.filter((data)=>{
        return(
          data.category === "men's clothing"
        )
      })
      setData(newArray)
    }
    const filterWomens = ()=>{
      const newArray = data.filter((data)=>{
        return(
          data.category === "women's clothing"
        )
      })
      setData(newArray);
      console.log("i am clicked")
    }
  return (
    <div>
    <div className='clothDiv'>
      <button onClick={filterMens}>Men's</button>
      <button onClick={filterWomens}>Women's</button>
      </div>
    <div className='productCardDiv'>
      {data.map((data)=>{
        return (
          <div key={data.id} className='cardDiv' >
            <img style={{width:'200px', textAlign:'center'}} src={data.image} alt='image'></img>
            <p>{data.title}</p>
            <p>rating:{data.rating.rate}</p>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Colthing