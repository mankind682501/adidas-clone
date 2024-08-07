import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import React from 'react'


function Downbar() {
  return (
    <>
     <div className="d-flex justify-content-center align-items-center p-5" style={{width:'100%',height:'150px',backgroundColor:'yellow'}}>
        <h5>JOIN ADIDAS AND GET 50% OFF</h5>
        <button className="btn ms-5">
          <span className="btn-text">SINGN UP FOR FREE</span>
          <span className="outline"></span>
        </button>

</div>



<div className=" container w-100 mt-5">


<div className="row">
  
  
  <div className="col-md-2">
  <h4 className="text-center">Products</h4>
  <div className="text-center">
    <p>Footwear</p>
    <p>Clothing</p>
    <p>Accessories</p>
    <p>Outlet-Sale</p>
    <p>New Arrivals</p>
    <p>Flat 50% Off</p>
  </div>
  </div>

    
  
  <div className="col-md-2">
    <h4 className="text-center">Sports</h4>

    <div className="text-center">
      <p>Cricket</p>
      <p>Running</p>
      <p>Football</p>
      <p>Gym/Training</p>
      <p>Tennis</p>
      <p>Outdoor</p>
      <p>Basketball</p>
      <p>Swimming</p>
      <p>Basketball</p>
    </div>
  </div>
  <div className="col-md-2">
    <h4 className="text-center">Collections</h4>
    <div className="text-center">
      <p>Ultraboost</p>
      <p>Superstar</p>
      <p>NMD</p>
      <p>Stan smith</p>
      <p>Sustainability</p>
      <p>Predator</p>
      <p>Parley</p>
      <p>Adicolor</p>
    </div>
  </div>
  <div className="col-md-2">
 <h4 className="text-center"> SUPPORT</h4>
 <div className="text-center">
  <p>Help</p>
  <p>Customer Services</p>
  <p>Returns & Exchanges</p>
  <p>Shipping</p>
  <p>Order Tracker</p>
  <p>Store Finder</p>
  <p>adiClub</p>
  <p>adiclub Terms and conditions</p>

 </div>
  </div>
  <div className="col-md-2">
  <h4 className="text-center">COMPANY INFO</h4>
  <div className="text-center">
<p>About Us</p>
<p>adidas stories</p>
<p>adidas Apps</p>
<p>Entity Details</p>
<p>Press</p>
<p>Careers</p>
  </div>
  </div>
  <div className="col-md-2">
    <h4 className="text-center">FOLLOW US</h4>
    <div className="w-100 d-flex justify-content-around mt-3">
    <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
    <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
    <FontAwesomeIcon icon={faFacebook} className="fa-2x" />

    </div>
    
  </div>

  </div>
 
  

</div>    

    
    </>
  )
}

export default Downbar