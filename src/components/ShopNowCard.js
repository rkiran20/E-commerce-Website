import React from 'react'
import { Link } from 'react-router-dom'

const ShopNowCard = ({text,heading,image}) => {
  return (
    <div className='bodyClothingDiv'>
        <div className='bodyClothingDivLeft' >
          <h2 style={{fontSize:'1.7rem',paddingLeft:'30px',marginTop:'30px', paddingTop:'30px'}}>{heading}</h2>
          <p style={{ fontSize:'1.5rem',paddingLeft:'30px',paddingBottom:'20px'}}>{text}</p>
          <Link to="/clothing" ><button className='bodyClothingBtn'>Shop Now  →</button></Link>
        </div>
        <img style={{width:'220px'}} src={image} alt='logo'></img>
    </div>
  )
}

export default ShopNowCard