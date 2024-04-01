
import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry);

    return (
        
            <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
                <h4 style={{color: visited ? 'purple' : ''}}>Name: {name?.common} </h4>
                <img src={flags?.png} alt="" />
                <p>CountryPopulation: {population} </p>
                <p>CountryArea: {area} </p>
                <p><small>Code: {cca3} </small> </p>
                <div className='btn-container'>
                    <button style={{marginBottom: '5px'}} onClick={() => handleVisitedCountry(country)}><small>Mark Visited</small></button>
                    <button onClick={() => handleVisitedFlags(country?.flags?.png)}>AddFlags</button>
                    <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
                </div>
                <span>{ visited ? 'I have to visited this country' : 'I want to visit'}</span>
            </div>
    );
};

export default Country;