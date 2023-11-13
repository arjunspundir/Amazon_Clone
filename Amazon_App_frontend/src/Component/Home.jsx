import React from 'react'
import './ComponentStyle/Home.css'
import Products from './Products'
import './ComponentStyle/ProductsStyle.css'
import campus2 from './Images/Products/campus2.jpg'
import slipper1 from './Images/Products/slipper1.jpg'
import slipper2 from './Images/Products/slipper2.jpg'
import slipper3 from './Images/Products/slipper3.jpg'
import mackbook from './Images/Products/mackbook.jpg'
import campus3 from './Images/Products/campus3.jpg'
import canvas from './Images/Products/canvas.jpg'
import samsung from './Images/Products/samsung.webp'
import iphone from './Images/Products/iphone.jpg'
import home from './Images/Home_Page.jpg'
function Home() {
  return (
   <>
    <div className='Home_Page'>
        <img src={home} alt="home page" />
    </div>
    <div className="home">
    <div className="ProductsItem">
        <Products price={20} statement={'Centrino Mens 6712-2 Sneakers'} cls=  {'small'} image={canvas}/>
        <Products price={15} statement={' Mens Rodeo ProRunning Shoe'} cls={'small'} image={campus2}/>
        <Products price={25} statement={`Men's Tyson PRO Running Shoes
`} cls={'small'} image={campus3}/>
    </div>
    <div className="ProductsItem">
         <Products price={12} statement={`DRUNKEN Slipper For Men's and Women's Flip Flops Winter Slides Home Open Toe Non Slip`} cls={'small'} image={slipper1}/>
        <Products price={10} statement={`Doctor Walk Extra Soft Slippers Flip Flop for Men's (Wdw-702-black)`} cls={'small'} image={slipper2}/>
        <Products price={11} statement={`Amazon Brand - Symbol Mens Flip-Flops`} cls={'small'} image={slipper3}/>
    </div>
    <div className="ProductsItem">
        <Products price={500} statement={'Samsung Galaxy M34 5G (Waterfall Blue,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|12GB RAM with RAM+|Android 13|Without Charger'} cls={'mid'} image={samsung}/>
        <Products price={2000} statement={'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium'} cls={'mid'} image={iphone}/>
    </div> 
     <div className="PrductsItem">
        <Products price={2500} statement={'Apple 2023 MacBook Air laptop with M2 chip: 38.91cm (15.3 inch) Liquid Retina display, 8GB RAM 512GB SSD storage, backlit keyboard, 1080p FaceTime HD camera,Touch ID Works with iPhone/iPad; Space Gray'} cls={'large'} image={mackbook}/>
    </div>
    </div>
   </>
  )
}

export default Home
