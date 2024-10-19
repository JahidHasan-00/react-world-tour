import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country =>{
        console.log('add to your visited country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }
    
    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length} </h5>
                <ul style={{width: '30%', margin: '0 auto'}}>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <br />
            <div className="flags-container">
                {
                    visitedFlags.map(flag => <div key={flag} style={{marginBottom: '15px'}}><img  src={flag}></img></div>)
                }
            </div>
            <br />
            <div className="countries">
                {
                    countries.map(country => <Country
                     key={country.cca3} country={country}
                     handleVisitedCountry = {handleVisitedCountry}
                     handleVisitedFlags = {handleVisitedFlags}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;