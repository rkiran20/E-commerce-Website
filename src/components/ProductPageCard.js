import React from 'react'

const ProductPageCard = ({data}) => {
    //console.log(data)
    var title = data.title;
    var trimmedTitle = title.substring(0,22);

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