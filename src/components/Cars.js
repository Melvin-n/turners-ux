import React, { useState, useEffect } from 'react'
import {faUser,  faHouse, faList, faTh} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/cars.css'


export default function Cars() {
    const [search, setSearch] = useState('')
    const [model, setModel] = useState('')
    const [make, setMake] = useState('')
    const [yearFrom, setYearFrom] = useState(0)
    const [yearTo, setYearTo] = useState(2100)
    const [kmsFrom, setkmsFrom] = useState(0)
    const [kmsTo, setkmsTo] = useState(500000)
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(1000000)
    const [queryResults, setQueryResults] = useState([])

    //build the query object based on which inputs have a value filled in
    const buildQuery = () => {
        let query = {}
        
        make === '' ? void(0) : query.make = make
        model === '' ? void(0) : query.model = model
        // yearFrom === '' ? void(0) : query.yearFrom = yearFrom
        // yearTo === '' ? void(0) : query.yearTo = yearTo
        kmsFrom === '' ? void(0) : query.odometer = {$gt:parseInt(kmsFrom), $lt:parseInt(kmsTo)}
        kmsTo === '' ? void(0) : query.odometer = {$gt:parseInt(kmsFrom), $lt:parseInt(kmsTo)}
        priceFrom === '' ? void(0) : query.price = {$gt:parseInt(priceFrom), $lt:parseInt(priceTo) }

        priceTo === '' ? void(0) : query.price = {$gt:parseInt(priceFrom), $lt:parseInt(priceTo) }

        return query

    }

    //query database for search results
    const querySearch = (e) => {
        e.preventDefault()
        fetch(`http://turners.eba-tn9xpaqh.us-east-2.elasticbeanstalk.com/api/query`, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                query: buildQuery()
            })
        })
        .then(res => res.json())
        .then(data => setQueryResults(data))
    }

    //initial results on load
    useEffect(() => {
        fetch(`http://turners.eba-tn9xpaqh.us-east-2.elasticbeanstalk.com/api/onload`, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                query: buildQuery()
            })
        })
        .then(res => res.json())
        .then(data => setQueryResults(data))
    }, [])

    

  return (
    <div>
        <header id='cars-header'>
            <nav id='cars-top-nav'>
                <ul id='top-cars-nav-list'>
                    <li className='top-nav-item'> <FontAwesomeIcon className='cars-top-nav-icon' icon={faUser} /></li>
                    <li className='top-nav-item'> <FontAwesomeIcon className='cars-top-nav-icon' icon={faHouse} /></li>
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

        <section id='search-section-view'>
            <div id='form-view-selection'>
                <div id='form-selection-left'>
                    <p>View</p>
                    <FontAwesomeIcon className='form-selection-icon' icon={faList} />
                    <FontAwesomeIcon className='form-selection-icon' icon={faTh} />
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

        <section>
            <span id='car-amount'><h4 id='car-amount-number'>1000 </h4>  <h4 id='car-amount-text'>   used cars</h4></span>
        </section>

        <section id='search-form-results'>
            <form id='search-form'>
                <input type='text' className='search-form-input' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
                <input type='text' className='search-form-input' value={make} onChange={(e) => setMake(e.target.value)} placeholder='Make' />
                <input type='text' className='search-form-input' value={model} onChange={(e) => setModel(e.target.value)} placeholder='Model' />
                <input type='number' className='search-form-input half-search-input' value={yearFrom} onChange={(e) => setYearFrom(e.target.value)} placeholder='Year' />
                <input type='number' className='search-form-input half-search-input' value={yearTo} onChange={(e) => setYearTo(e.target.value)} placeholder='Year' />
                <input type='number' className='search-form-input half-search-input' value={kmsFrom} onChange={(e) => setkmsFrom(e.target.value)} placeholder='Kms' />
                <input type='number' className='search-form-input half-search-input' value={kmsTo} onChange={(e) => setkmsTo(e.target.value)} placeholder='Kms' />
                <input type='number' className='search-form-input half-search-input' value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} placeholder='Price' />
                <input type='number' className='search-form-input half-search-input' value={priceTo} onChange={(e) => setPriceTo(e.target.value)} placeholder='Price' />
                <input type='submit' className='search-form-input' value='Apply Filter' onClick={querySearch} />
            </form>

            <div id='results-section'>
                <ul id='results-list'>
                    {queryResults.map(res => (
                        <li className='query-result-card'>
                            <img src={`./public_images/${res.image}.jpg`} alt={res.image}/>
                            <h4>{res.title}</h4>
                            <h5>{res.subtitle}</h5>
                            <p>Location: {res.location}</p>
                            <p>Odometer: {res.odometer}</p>
                            <h3>${res.price}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </div>
  )
}
