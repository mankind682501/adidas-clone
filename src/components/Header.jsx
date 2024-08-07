import { faHeart, faMagnifyingGlass, faSuitcaseRolling, faUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="bg-light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <h5 className='text-warning fs-2'>
            <img src="https://companieslogo.com/img/orig/ADS.DE-f8ebdd97.png?t=1635011710" alt="" width={'100px'} height={'60px'} />
          </h5>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          className="me-2"
        />
        
        <Navbar.Collapse id="navbar-nav">
          <div className=' mt-5  ms-5 d-flex flex-column flex-lg-row align-items-lg-center w-100'>
            <ul className='navbar-nav me-auto mt-5 mt-lg-0 d-flex flex-wrap'>
              <li className='nav-item me-3'><a className='nav-link' href="">MEN</a></li>
              <li className='nav-item me-3'><a className='nav-link' href="">WOMEN</a></li>
              <li className='nav-item me-3'><a className='nav-link' href="">KIDS</a></li>
              <li className='nav-item me-3'><a className='nav-link' href="">SPORTS</a></li>
              <li className='nav-item me-3'><a className='nav-link' href="">LIFESTYLE</a></li>
              <li className='nav-item me-3'><a className='nav-link' href="">OUTLET</a></li>
              <li className='nav-item me-3'><a className='nav-link text-danger' href="">END OF SEASON SALE</a></li>
            </ul>
            </div>

      
            <div>
              
                 <div className='me-auto mt-3'>
                    <ul  className='mt-lg-0 d-flex flex-row flex-wrap'>
                      <li className='nav-item me-3'><a className='nav-link' href="">help</a></li>
                      <li className='nav-item me-3'><a className='nav-link' href="">orders and returns</a></li>
                      <li className='nav-item me-3'><a className='nav-link' href="">sign up</a></li>
                      <li className='nav-item me-3'><a className='nav-link' href="">log in</a></li>
                    </ul>
                 </div>
                 <div className='d-flex'>
      
      <div className='mt-lg-0 align-items-center ms-lg-3'>
        <div className='me-3'>
          <div className='navhide p-1' style={{ border: 'solid 1px', display: 'flex' }}>
            <input type="text" placeholder='Search' style={{ border: 'none', outline: 'none', height: '30px' }} />
            <a className='mt-1'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
          </div>
        </div>
      
      </div>
      <div className='d-flex'>
          <p className='me-4 mt-2'>
            <button style={{ border: 'none', background: 'white', fontSize: '20px' }}>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </p>
          <p className='me-4 mt-2'>
            <button style={{ border: 'none', background: 'white', fontSize: '20px' }}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </p>
          <p className='me-4 mt-2'>
            <button style={{ border: 'none', background: 'white', fontSize: '20px' }}>
              <FontAwesomeIcon icon={faSuitcaseRolling} />
            </button>
          </p>
       </div>
       </div>
  
            </div>

            
              
  
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header;
