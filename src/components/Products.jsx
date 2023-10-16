import React from 'react'
import "./Products.css"
const Products = () => {
    return (
        <main className='product container'>
            <div className='product-description '>
                <h1>YOUR FEET DESERVE THE BEST</h1>

                <p>YOUR FEET DESERVE THE BEST AND WE,RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE,ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='sec-button'>
                    <button className='btn1'>Shop Now</button>
                    <button className='btn2'>Catogries</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>

            </div>
            <div className='product-logo'>
              <img src="./images/shoe_image.png" alt="shoe logo" />
            </div>

        </main>
    )
}

export default Products
