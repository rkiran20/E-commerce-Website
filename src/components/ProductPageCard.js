import React from 'react'
import { Link } from 'react-router-dom';

const ProductPageCard = ({data}) => {
    var title = data.title;
    var trimmedTitle = title?.substring(0,22);

  return (
      <div>
        <div className='productCardDiv'>
            <img src={data.image} alt='image' className='productImg'></img>
            <p className='productPageCardTitle' >{trimmedTitle}...</p>
            <p className='productPageCardPrice'>$ {data.price}</p>
        </div>
      </div>

  )
}

export default ProductPageCard