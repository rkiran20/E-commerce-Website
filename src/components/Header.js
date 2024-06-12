import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const cartLength = useSelector((data)=>data.cart.items.length)
  return (
    <div className="App">
      <div className='mainImgDiv'>
         <Link to="/"> <img className='webImg' src='https://i.pinimg.com/474x/15/96/e3/1596e3b738d6e32dbd700844ed062488.jpg' alt='website-logo' ></img></Link>
      </div>
      <div className='ulDiv'>
        <ul className='ul' >CATEGORIES</ul>
        <ul className='ul'>PRODUCT PAGE</ul>
      <Link to="/cart"><ul><img className='cartImg' src='https://freepngimg.com/thumb/categories/1325.png' alt='cartLogo'></img></ul></Link>
      <div className='cartLength'>{cartLength}</div>
      </div>
    </div>
  )
}

export default Header