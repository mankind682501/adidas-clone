// import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5
        }
      }
    ]
  };
  
  return (
    <>
   <div className="container-fluid " style={{}}>
    <div id='imgdiv' className="d-flex justify-content-flex-start align-items-center" style={{width:'100%',height:'500px',backgroundImage:"url('https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/Microsoft_Teams_image_dd7017fd8e_5222cf7fda.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover',position:'relative'}}>
        <div className="w-50  justify-content-center align-items-center" style={{height:'300px', width:'400px',position:'absolute'}}>
           <div className="w-100 ms-5 mt-3">
           <h1 className="text-light ms-5">END OF SEASON SALE</h1>
            <p className="text-light ms-5 " style={{display:"block"}}>FLAT 50% OFF <br />
            EXTRA 15% OFF ON ORDERS ABOVE INR 4499</p>
           </div>
           <div className="button-div d-flex justify-content-around mt-3 w-100 ms-5">
            <button className="btn btn-light me-2">SHOP MEN →</button>
            <button className="btn btn-light me-2">SHOP MEN →</button>
            <button className="btn btn-light me-2">SHOP MEN →</button>

           </div>
        </div>
       
    </div>
    
    </div>

{/* next-------------------------------------------------------------------------------------- */}

    <div className='container' style={{width:'100%'}}>
    <h1 className='mt-5'>EXCLUSIVE ESSOS DEALS</h1>
    
      <div className="row mt-5">
        <div className="col-md-3">
        <Card className='me-3' style={{ width: '100%',height:'70vh',border:'none'}}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_eoss_tshirts_deal_hp_crd_d_6a02272987.jpg" />
      <Card.Body>
        
        <Card.Text style={{fontSize:'15px',fontWeight:'500'}}>
          T-shrit starting from INR 699
          
        </Card.Text>
        <Button style={{background:'none',border:'none',color:'black',textDecoration:'underline',fontSize:'17px',fontWeight:'500'}}>Shop now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3">
        <Card className='me-3' style={{ width: '100%',height:'70vh',border:'none' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_eoss_shoes_deal_hp_crd_d_50f7fd1521.jpg" />
      <Card.Body>
        
        <Card.Text style={{fontSize:'15px',fontWeight:'500'}}>
          Shoes under INR 2499
          
        </Card.Text>
        <Button style={{background:'none',border:'none',color:'black',textDecoration:'underline',fontSize:'17px',fontWeight:'500'}}>Shop now</Button>
      </Card.Body>
    </Card>

        </div>
        <div className="col-md-3">
        <Card className='me-3' style={{ width: '100%',height:'70vh',border:'none' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_eoss_slides_deal_hp_crd_d_16952325ab.jpg" />
      <Card.Body>
        
        <Card.Text style={{fontSize:'15px',fontWeight:'500'}}>
          Slides & Sandals starting from INR 399
          
        </Card.Text>
        <Button style={{background:'none',border:'none',color:'black',textDecoration:'underline',fontSize:'17px',fontWeight:'500'}}>Shop now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3">
        <Card style={{ width: '100%',height:'70vh',border:'none' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_eoss_pants_deal_hp_crd_d_e0edcc0c3f.jpg" />
      <Card.Body>
        
        <Card.Text style={{fontSize:'15px',fontWeight:'500'}}>
          Pants starting from INR 699
          
        </Card.Text>
        <Button style={{background:'none',border:'none',color:'black',textDecoration:'underline',fontSize:'17px',fontWeight:'500'}}>Shop now</Button>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>


    {/* ----------------------------------------------------------------------------------------------------------------- */}
    <div className='container' style={{height:'70px'}}>
      <div className='container' style={{width:'100%'}}>
        <button className='me-2 p-2' style={{width:'90px',height:'50px',background:'none',color:'black'}}><a style={{color:'black'}} href="">EOSS🔥</a></button>
        <button className='me-2 p-2' style={{width:'70px',height:'50px',background:'none',color:'black'}}><a style={{color:'black'}} href="">MEN</a></button>
        <button className='me-2 p-1' style={{width:'75px',height:'50px',background:'none',color:'black'}}><a style={{color:'black'}} href="">WOMEN</a></button>
        <button className='me-2 p-2' style={{width:'70px',height:'50px',background:'none',color:'black'}}><a style={{color:'black'}} href="">KIDS</a></button>
        <button id='but' className='px-2' style={{width:'210px',height:'50px',background:'black',color:'white'}}><a style={{color:'white'}} href="">Last Sizes- MINIMUM 60%</a></button>
      </div>

    </div>


    <div id='slider-container' className='mt-5 w-100'>
    <Slider {...settings}>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7260f1cd5fdf4d758f3da361030428d9_9366/Racer_TR23_Shoes_Green_IF0038_01_standard.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Racer TR23 Shoes

Sportswear</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/cd815e97e0e6475188aeaf1a006d9522_9366/SLEETWALK_SHOES_Blue_GB2463_01_standard.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>SLEETWALK SHOES

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/734eda9220a044e5a2e445efbe43b08d_9366/Arsenal_23-24_Home_Jersey_Red_HR6929_HM1.jpg"height={'300px'}width={'300px'} />
      <Card.Body>
        <Card.Title>Arsenal 23/24 Home Jersey

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a9c900a074884a548d877693bd3a032b_9366/HIIT_GRAPHICS_TEE_White_IT0237_21_model.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>
HIIT GRAPHICS TEE

Performance</Card.Title>
        <Card.Text>
        



          
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b84fd861632c452eab8e30e8f32e46cb_9366/ALL_SEASONS_PANTS_Multicolor_IS4108_21_model.jpg"height={'300px'}width={'300px'} />
      <Card.Body>
        <Card.Title>ALL SEASONS TZ PANTS

Sportswear</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/ee0885cbbb744dbf9205afcc009883a1_9366/DESIGN_2_MOVE_POLO_TEE_Multicolor_IC0772_21_model.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>DESIGN 2 MOVE POLO TEE

Performance</Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.Body>
    </Card>  
      <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/95b50350102b4b15a4c8adba0101e650_9366/RUNNING_ADIGLIDE_SHOES_Grey_EY3062_01_standard.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>RUNNING ADIGLIDE SHOES

Performance</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f9bd80cf60b248858f42afcc00962982_9366/DESIGN_2_MOVE_POLO_TEE_White_IC0771_21_model.jpg"height={'300px'}width={'300px'} />
      <Card.Body>
        <Card.Title>DESIGN 2 MOVE POLO TEE

Performance
</Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/990d67713a3945618f28ec949304c209_9366/TRAIN_ESSENTIALS_FEELREADY_TRAINING_SLEEVELESS_TEE_Blue_IJ6593_21_model.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>TRAIN ESSENTIALS FEELREADY  SLEEVELESS</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2e7357e39e2c4473a8caafb000e58f11_9366/FREELIFT_TEE_Pink_HZ8981_21_model.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>FREELIFT TEE

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/990d67713a3945618f28ec949304c209_9366/TRAIN_ESSENTIALS_FEELREADY_TRAINING_SLEEVELESS_TEE_Blue_IJ6593_21_model.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>TRAIN ESSENTIALS FEELREADY  SLEEVELESS </Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2e7357e39e2c4473a8caafb000e58f11_9366/FREELIFT_TEE_Pink_HZ8981_21_model.jpg" height={'300px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>FREELIFT TEE

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c4a2e62168cb49379d4fafa40d154121_9366/ALL_SEASONS_TZ_PANTS_Multicolor_IT5570_21_model.jpg"height={'300px'}width={'300px'} />
      <Card.Body>
        <Card.Title>ALL SEASONS TZ PANTS

Sportswear
</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem',height:'500px' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/865690adb1bf49f0a2fb63db01806958_9366/QUESTERON_SHOES_Blue_IQ9831_01_standard.jpg"height={'300px'}width={'300px'} />
      <Card.Body>
        <Card.Title>QUESTERON SHOES

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>




    </Slider>
      </div>



      {/* next-div---------------------------------------------------------------------------------------------------------------- */}






      <div id='videod' style={{height:'100vh',position:'relative'}} className='w-100 mt-5 mb-5'>
      <video style={{backgroundSize:'contain'}} width="100%" height={'100%'} controls>
                    <source src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/running_fw24_ub5_global_launch_hp_banner_hero_d_5215834bbd.mp4" type="video/mp4" width={'100%'}/>
                    
                </video>

      </div>
     

{/* next div---------------------------------------------------------------------------------------------------------------- */}

      <div className=' container mt-5' style={{height:'50px'}}>
      <div style={{width:'100%'}}>
        <button className='me-2 p-2' style={{width:'90px',height:'50px',background:'none',color:'black', border:'black solid 2px'}}><a style={{color:'black'}} href="">All T-Toe</a></button>
        <button className='me-2 p-2' style={{width:'70px',height:'50px',background:'none',color:'black' , border:'black solid 2px'}}><a style={{color:'black'}} href="">Samba</a></button>
        <button className='me-2 p-2' style={{width:'70px',height:'50px',background:'none',color:'black', border:'black solid 2px'}}><a style={{color:'black'}} href="">Gazelle</a></button>
        <button className='me-2 p-2' style={{width:'70px',height:'50px',background:'none',color:'black', border:'black solid 2px'}}><a style={{color:'black'}} href="">Spezial</a></button>
       
      </div>

      </div>



      {/* next div------------------------------------------------------------------------------------------------------------- */}
    <div id='slider-container' className='mt-5 w-100'>
    <Slider {...settings}>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e745acb29cd248e8994a6820a4ac6a29_9366/GAZELLE_BOLD_SHOES_Yellow_IF5937_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>GAZELLE BOLD SHOES

Originals</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e1ba91a12aef486680e5dbf046ac978f_9366/Samba_OG_Shoes_White_IF3814_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Samba OG Shoes

Originals</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5fe74e35f2c4107bdffad200179a37d_9366/Gazelle_Shoes_Pink_H01512_01_standard.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>Gazelle Shoes

Originals
</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/011744ef273d4a66b9cc880b980340a2_9366/Samba_OG_Shoes_White_ID0478_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>
        Samba OG Shoes

Originals</Card.Title>
        <Card.Text>
        



          
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0faba7ce543d4efbad3695157ef23b55_9366/GAZELLE_BOLD_SHOES_Blue_IE0430_01_standard.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>GAZELLE BOLD SHOES
          Originals
        </Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/d62884026e05447ea7e08a9b9fb602b7_9366/Gazelle_Indoor_Shoes_Red_IE2946_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Gazelle indoor shoes originals</Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.Body>
    </Card>  
      <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Gazelle shoes originals</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>Samba OG shoes originals
</Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Samba OG shoes</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Gazelle shoes originals
</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Gazelle shoes originals</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/97f86eede1374615a058a81700a27444_9366/Gazelle_Shoes_Black_CQ2809_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Gazelle shoes originals</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>



    
         
      

    </Slider>
      </div>



      {/* next div------------------------------------------------------------------------------------------------ */}




      

{/* next div----------------------------------------------------------------------------------------------------------------------- */}

     <div className='container mt-5' style={{width:'100%',height:'50vh'}}>
      <h1>Popular right now</h1>
      <div className="row mt-5">
       
        <div className="col-md-4">
          <div id='hov2' className='w-100'>
            <h1 style={{fontWeight:'700'}} className='fs-1'>Samba</h1>
            <div id='exp1'></div>

          </div>
          <div id='hov2' className='w-100 mt-5'>
            <h1 style={{fontWeight:'700'}} className='fs-1'>Gazelle</h1>
            <div id='exp1'></div>

          </div>




        </div>
        <div className="col-md-4">
        <div id='hov2' className='w-100'>
            <h1 style={{fontWeight:'700'}} className='fs-1'>Running shoes men</h1>
            <div id='exp1' ></div>

          </div>
          <div id='hov2' className='w-100 mt-5'>
            <h1 style={{fontWeight:'700'}} className='fs-1'>track pants</h1>
            <div id='exp1' ></div>

          </div>
        </div>
        <div className="col-md-4">
        <div id='hov2' className='w-100'>
            <h1 style={{fontWeight:'700'}} className='fs-1'>spezial</h1>
            <div id='exp1' ></div>

          </div>
          <div id='hov2' className='w-100 mt-5'>
            <h1 style={{fontWeight:'700'}} className='fs-1'>men sandals</h1>
            <div id='exp1' ></div>

          </div>
        </div>
        
      </div>

      </div>





      <div className='container mt-5' style={{width:'100%',height:'50px'}}>

     
  
     <button style={{border:'solid black 1px',fontWeight:'500',background:'white'}} className='btn  rounded-0 fs-5'>new arrivals</button>
      <button style={{border:'solid black 1px',fontWeight:'500',background:'white',width:'200px',height:'50px'}} className='btn  rounded-0 fs-5 ms-2 p-1'>everyday essentials</button>
   

    </div>




{/* next div------------------------------------------------------------------------------------------------------------- */}


    <div id='slider-container' className='mt-5 w-90 m-auto'>
    <Slider {...settings}>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b5211c4000754585ae41b603b5357936_9366/QuestIt_Low_M_Grey_JJ5964_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>QuestIt Low M

TERREX</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7e6dcfdc0a1b4fb08ba4bc057d465459_9366/Ultraboost_5x_Shoes_Black_JI1334_HM1.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Ultraboost 5x Shoes

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7e6dcfdc0a1b4fb08ba4bc057d465459_9366/Ultraboost_5x_Shoes_Black_JI1334_HM1.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>Ultraboost 5x Shoes

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0c5a14d5100f4d629cefdfc27362bc9e_9366/Trekerstar_AXNU_M_Blue_IV5011_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>
        Trekerstar AXNU M

TERREX</Card.Title>
        <Card.Text>
        



          
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0a65bf99f3a84d93b28ed55f3dbabe99_9366/CriNU_23_M_White_IV4907_01_standard.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>CriNU 23 M

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2f162bf70b9447e5b9d40cbefe5ce4e6_9366/CriNU_23_M_White_IV4906_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>CriNU 23 M

Performance</Card.Title>
        <Card.Text>
          
        </Card.Text>
       
      </Card.Body>
    </Card>  
      <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c4cfe4acd95e4d46acde9b8f19f65a59_9366/Cricup_23_M_White_IV4899_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Cricup 23 M

Performance</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/cb6060fc516b4aa5b215fe5c6af7ac30_9366/Cricup_23_M_White_IV4898_01_standard.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>Cricup 23 M

Performance
</Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/77410d0208f845bcb26089b2a97da004_9366/Samba_OG_Shoes_White_ID1479_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Samba OG Shoes

Originals</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3c7b8ce5b49943f295dcd8cba0acf3b0_9366/Samba_OG_Shoes_White_ID1480_01_standard.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Samba OG Shoes

Originals</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f45e60afcb594f21b8c09a3617ae7069_9366/Adizero_Sl2_Running_Shoes_White_IF6745_HM1.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Adizero Sl2 Running Shoes

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/73f271fa2fb24c4cbd2ce0063da51a5a_9366/Ultraboost_5_Shoes_Black_ID8812_HM1.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Ultraboost 5 Shoes

Performance</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    
    </Slider>
      </div>


{/* next card slider-------------------------------------------------------------------- */}




<div id='slider-container' className='mt-5 w-90 m-auto'>
  <h1 style={{fontWeight:'700'}} className='ms-5'>WHAT'S HOT?</h1>
    <Slider className='mt-3'{...settings}>
   
    <Card  style={{ width: '20rem',height:'800px' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/running_fw24_ub5_global_launch_hp_teaser_carousel_d_c3427f9847.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>Ultra energy. Ultraboost 5
        Harness your running energy with the new Ultraboost 5.</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <button id='btn2' className='btn fs-4 mt-5' style={{textDecoration:'underline',fontWeight:'500'}}>shop now</button>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '20rem',height:'800px' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/em_in_Jude_Bellingham_Signature_Pack_t_cb54ef660f.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>JUDE BELLINGHAM SIGNATURE PACK
        Check-out the pack</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <button id='btn2' className='btn fs-4 mt-5' style={{textDecoration:'underline',fontWeight:'500'}}>shop now</button>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '20rem',height:'800px' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/em_in_ae_bb_fw24_hp_crd_t_60be3ec53f.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>
        The 2024 Collection: Chapter 03
        Elevate your game with clothing and footwear born on the hardwood.</Card.Title>
        <Card.Text>
        



          
        </Card.Text>
        <button  id='btn2' className='btn fs-4 mt-5' style={{textDecoration:'underline',fontWeight:'500'}}>shop now</button>
       
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '20rem',height:'800px' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/em_in_anthony_edwards_basketball_fw24_hp_crd_t_1c8c1daf05.jpg"height={'400px'}width={'300px'} />
      <Card.Body>
        <Card.Title>AE 1 – Ascent
        Anthony Edwards' ascent to the top is only just beginning. Because when you live up to the person you see inside yourself, the possibilities are endless.</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <button  id='btn2' className='btn fs-4' style={{textDecoration:'underline',fontWeight:'500'}}>shop now</button>
        
      </Card.Body>
    </Card>
    <Card id='cardi' style={{ width: '20rem',height:'800px' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/ss24_archive_sale_launch_member_access_catlp_tc_t_cdb8ac0cfd.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>ADIDAS COLLABORATIONS ARCHIVE
        Access to the adidas Collaborations Archive is now open. Exclusively for you.</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <button  id='btn2' className='btn fs-4 mt-4' style={{textDecoration:'underline',fontWeight:'500'}}>shop now</button>
       
      </Card.Body>
    </Card>  
      <Card id='cardi' style={{ width: '20rem',height:'800px' }}>
      <Card.Img variant="top" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/em_in_samba_ranveer_hp_crd_t_11795740a3.jpg" height={'400px'}width={'300px'}/>
      <Card.Body>
        <Card.Title>


SAMBA
For any and every look</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <button  id='btn2' className='btn fs-4 mt-5' style={{textDecoration:'underline',fontWeight:'500'}}>shop now</button>
        
      </Card.Body>
    </Card>
    
    </Slider>
      </div>





      {/* next div para-------------------------------------------------------------------------- */}
      <div className=' mt-5' style={{background:'whitesmoke'}}>
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h1 style={{fontWeight:'700'}} className='fs-3 mt-5'>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</h1>
            <p style={{fontWeight:'450'}} className=''>Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB. adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to support creators. Improve their game. Their lives. And change the world.</p>
            <p style={{fontWeight:'450'}}>
            adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</p>





          </div>
          <div className="col-md-5">
            <h1 style={{fontWeight:'700'}} className='fs-3 mt-5'>WORKOUT CLOTHES, FOR ANY SPORT</h1>
            <p style={{fontWeight:'450'}}>adidas designs for and with athletes of all kinds. Creators, who love to change the game. Challenge conventions. Break the rules and define new ones. Then break them again. We supply teams and individuals with athletic clothing pre-match. To stay focussed. We design sports apparel that get you to the finish line. To win the match. We support women, with bras and tights made for purpose. From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool. Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits. Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages.</p>
            <p style={{fontWeight:'450'}}>
            Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sportswear too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.</p>




          </div>
          <div className="col-md-1"></div>
        </div>





      </div>





    
  


    
   
    


    

  
   
    
   






  
    </>
  )
}

export default Home