import React from 'react'
import { Link } from 'react-router-dom'
import { bodyImg } from '../Data'



const Body = () => {

  return (
    
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
  )
}

export default Body