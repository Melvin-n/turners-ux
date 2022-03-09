import React from 'react'
import {faUser,  faHouse, faList, faTh} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/cars.css'

export default function Cars() {
  return (
    <div>
        <header id='cars-header'>
            <nav id='cars-top-nav'>
                <ul id='top-cars-nav-list'>
                    <li class='top-nav-item'> <FontAwesomeIcon className='cars-top-nav-icon' icon={faUser} /></li>
                    <li class='top-nav-item'> <FontAwesomeIcon className='cars-top-nav-icon' icon={faHouse} /></li>
                </ul>
                <img id='cars-turners-small-logo' src='./public_images/t-logo.jpeg' alt='logo' />
            </nav>
        </header>
        <div id='cars-hero'>
            <p className='hero-text'> Cars</p>
        </div>
        <section>
            <ul id='cars-options-list'>
                <li id='buy-now-list-item' className='cars-options-item'>Buy now</li>
                <li id='buy-online-list-item' className='cars-options-item'>Buy online</li>
                <li id='auctions-list-item' className='cars-options-item'>Auctions</li>
                <li id='locations-list-item' className='cars-options-item'>Locations</li>
                <li id='test-drive-list-item' className='cars-options-item'>Book test drive</li>
                <li id='view-list-item' className='cars-options-item'>View now</li>
            </ul>
        </section>

        <section id='search-form'>
            <div id='form-view-selection'>
                <div id='form-selection-left'>
                    <p>View</p>
                    <FontAwesomeIcon icon={faList} />
                    <FontAwesomeIcon icon={faTh} />
                </div>
                <div id='form-selection-right'>
                    <select name="filter" id="filter-select">
                        <option value="none" selected disabled hidden>Filter</option>
                        <option value="toyota">Toyota</option>
                        <option value="mazda">Mazda</option>
                        <option value="holden">Holden</option>
                        <option value="honda">Honda</option>
                    </select>
                    <select name="sort-by" id="sort-by-select">
                        <option value="none" selected disabled hidden>Sort by</option>
                        <option value="lowest price">Lowest price</option>
                        <option value="highest price">Highest price</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
        </section>
    </div>
  )
}
