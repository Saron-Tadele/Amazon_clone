import React from 'react'
import './Home.css'
import Product from './Product'
import ImageSlider from './Slider/ImageSlider'
import {SliderData} from './Slider/SliderData'

function Home() {
 return (
  <div className='home'>
     <div className='home_container'>
       <div className='image_container'>
         <ImageSlider slides={SliderData}/>
            </div>

       <div className='home_row'>
         <Product
            id="12321341"
            title="Dell XPS 13 9360 13.3in Full HD Anti-Glare InfinityEdge Display Laptop - Silver"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/619zxIDdlPL._AC_UY218_.jpg"
          />
     <Product
            id="49538094"
            title="Homemory LED Tea Lights with 12 Gold Votive Candles Holders"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/810ns8Wk+7L._AC_UL320_.jpg"
         />
          <Product
            id="49538094"
            title="Ravensburger Horrified: Universal Monsters Strategy Board Game for Ages 10 & Up (60001836)"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/A1142Z++2KL._AC_UL320_.jpg"
         />
          <Product
            id="49538094"
            title="Peppa Pig Family 4-Figure Pack"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/719B3EPoMDL._AC_UL320_.jpg"
          />
 
    </div>
    <div className='home_row'>
  
    <Product
            id="4903850"
            title="Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51QYH9ttqfL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="BLU G9 Pro -6.3” Full HD Smartphone with Triple Main Camera, 128GB+4GB RAM -Nightfall"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81cH+NRSZGL._AC_UY218_.jpg"
         />
         <Product
            id="3254354345"
            title="Rachael Ray Cucina Hard Anodized Nonstick Cookware Pots and Pans Set, 12 Piece, Gray with Red Handles"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81z+T6mBc8L._AC_UL320_.jpg"
          />
    </div>
    <div className='home_row'>
    <Product
            id="90829332"
            title="JMEXSUSS 33ft 100 LED Christmas Lights Indoor Plug in Fairy String Lights Outdoor Waterproof 8 Modes Christmas Tree Lights Warm White for Bedroom Room Wall Wedding"
            price={64.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71xdmlUZQgL._AC_UL320_.jpg" class="s-image"
         />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
    </div>
   </div>
  </div>
 )
}

export default Home;
