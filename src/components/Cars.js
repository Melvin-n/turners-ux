import React from 'react'
import {faUser,  faHouse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Cars() {
  return (
    <div>
        <header id='cars-header'>
            <nav id='cars-top-nav'>
                <ul id='top-cars-nav-list'>
                    <li class='top-nav-item'> <FontAwesomeIcon className='cars-top=nav-icon' icon={faHouse} /></li>
                    <li class='top-nav-item'> <FontAwesomeIcon className='cars-top=nav-icon' icon={faUser} /></li>
                </ul>
                <img src='./public_images/t-logo.jpeg' alt='logo' />
            </nav>
        </header>
    </div>
  )
}
