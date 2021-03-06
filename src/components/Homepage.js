import React from 'react'
import '../css/homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser, faPhone, faArrowDown } from '@fortawesome/free-solid-svg-icons'



export default function Homepage() {
  return (
    <div id='homepage-header'>
        <header id='header-image-logo'>
        <div id='header-logo-design'>
            <img id='header-logo' src='./public_images/turnersCar-logo.jpg' alt='logo'/>
            <div className='header-line' id='header-line-1'></div>
            <div className='header-line' id='header-line-2'></div>
            <div className='header-line' id='header-line-3'></div>
        </div>
            <img id='car-logo-image' src='./public_images/home-car.png' alt='carimage' />
        </header>
        <navbar>
            <ul id='homepage-navbar'>
                <li className='navbar-list-item'><FontAwesomeIcon className='navbar-icon' icon={faLocationDot} /></li>
                <li className='navbar-list-item'><FontAwesomeIcon className='navbar-icon' icon={faUser} /></li>
                <li className='navbar-list-item'><FontAwesomeIcon className='navbar-icon' icon={faPhone} /></li>
            </ul>
        </navbar>
        <h2>Welcome to Turners</h2>
        <article id='homepage-details'>
            <p id='homepage-paragraph'>Turners Cars is the largest used car network in New Zealand with 19 car dealer locations
            nationwide. With a huge range of around 3,000 cars for sale (and 1,500 being made ready for sale at any one time) 
            there is truly something for everyone. We’ve been helping Kiwis buy and sell used cars for over 50 years.
            And if you want car finance or car insurance, we can sort that out for you as well.</p>
            <FontAwesomeIcon className='scroll-down-arrow' icon={faArrowDown} />
            <p id='scroll-text'>Scroll down</p>
        </article>

        <ul id='homepage-navigation-options'>
            <li className='homepage-nav-text' id='cars-homepage-nav'> Cars </li>
            <li className='homepage-nav-text' id='insurance-homepage-nav'> Insurance </li>
            <li className='homepage-nav-text' id='finance-homepage-nav'> Finance </li>
            <li className='homepage-nav-text' id='auction-homepage-nav'> Auction </li>
            <li className='homepage-nav-text' id='contact-homepage-nav'> Contact </li>
            <li className='homepage-nav-text' id='terms-homepage-nav'> T & C </li>
        </ul>

        <div id='placeholder'></div>

    </div>
  )
}
