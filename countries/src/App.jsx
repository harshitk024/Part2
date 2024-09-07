
import { useState } from "react";
import SearchCountries from "./components/SearchCountries"

import countryService  from "./services/countryService";
import { useEffect } from "react";

import CountryList from "./components/CountryList";

import "./App.css"




const App = () => {

  const [country,setCountry] = useState("")
  const [allCountries,setAllCountries] = useState([])
  const [filter,setFilter] = useState(false)
  const [showCountry,setShowCountry] = useState({})
  const [isShowCountry,setIsShowCountry] = useState(false)

  const handleClick = (country) => {
     setCountry(country)
  }

  const handleEffectChange = (response) => {
      setShowCountry(response)
      setIsShowCountry(true)
  }


  useEffect(()=>{
   
    countryService.getAll().then((response) => {
        console.log(response);
        setAllCountries(response);
    })
  
  },[])

  const showFilter = filter ? allCountries.filter((c) => c.name.common.toLowerCase().startsWith(country.toLowerCase())) : []

  // if(showFilter.length == 1 && !isShowCountry){
  //   useEffect(() =>{
  //     countryService.get(country).then(response => {
  //       const  countryDetail = response
  //       console.log(countryDetail);
  //       handleEffectChange(response)        
  //     })
  //  },[])
  // }


  const handleChange = (e) => {
     setCountry(e.target.value)
     setFilter(true)  

  }

  return(
    <div>
      <SearchCountries country = {country} handleChange = {handleChange} />
      <CountryList handleClick = {handleClick} countries = {showFilter} showCountry = {showCountry} isShowCountry = {isShowCountry} handleEffectChange={handleEffectChange} />
    </div>
  )
}


export default App;