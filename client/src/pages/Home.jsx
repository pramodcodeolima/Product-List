import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/NavBarHome';
import Banner from '../images/banner.jpg';
import './style.css';

export default function Home() {
  return (
    <div className='fullcontainer'>
      <>
        <NavBar />
        <div className='banner'>
          <img src={Banner} alt='banner'></img>
        </div>
        <div className='item-container'>
          <div className='sub-item-container'>
            <div className='items-custom1'></div>
            <div className='items-custom2'></div>
            <div className='items-custom3'></div>
            <div className='items-custom4'></div>
          </div>
          <div className='sub-item-container1'>
            <div className='items-custom2'></div>
            <div className='items-custom3'></div>
            <div className='items-custom4'></div>
            <div className='items-custom1'></div>
          </div>
          <div className='sub-item-container1'>
            <div className='items-custom4'></div>
            <div className='items-custom2'></div>
            <div className='items-custom1'></div>
            <div className='items-custom3'></div>
          </div>
          <div className='sub-item-container1'>
            <div className='items-custom1'></div>
            <div className='items-custom2'></div>
            <div className='items-custom3'></div>
            <div className='items-custom4'></div>
          </div>
        </div>
        <div className='see'>
          <div className='more'>
            <p>More</p>
          </div>
        </div>
      </>   
    </div>
  )
}
