import { useEffect,useState } from "react"
import countryService from "../services/countryService"

const Country  = ({name,handleClick}) => {
    return (
        <ul>{name} <button  onClick={() => handleClick(name)}>show</button></ul>
    )
}

const CountryDetail = ({country,showCountry,handleEffectChange, isShowCountry}) => {

    const [isLoading,setIsLoading] = useState(true)

    useEffect(() =>{
        setIsLoading(true)
       countryService.get(country).then(response => {
         const  countryDetail = response
         console.log(countryDetail);
         handleEffectChange(response)  
         setIsLoading(false)      
       })
    },[country])

    console.log(showCountry);

    if(isLoading){
        return (
            <p>Loading...</p>
        )
    }
    
    return(
        <>
         {isShowCountry ? 
         <>
         <h1>{showCountry.name.common}</h1>
         <div>
           <p>capital {showCountry.capital}</p>
           <p>area {showCountry.area}</p>
         </div>
         <h2>Languages :</h2> 
         <ul>
            {Object.keys(showCountry.languages).map((lang) => <li key = {lang}>{showCountry.languages[lang]}</li>)}
         </ul>
         <div>
            <img src = {showCountry.flags.png}  alt = "country"/>
         </div>
         </>
         : null}
        </>
    )

   
     
}

const CountryList = ({countries,showCountry,isShowCountry,handleEffectChange,handleClick}) => {

    const showCountries = countries.map(country => <Country handleClick = {handleClick} key = {country.name.common} name = {country.name.common} />)


    if(showCountries.length == 1){
        return (
            <>
             <CountryDetail country = {showCountries[0].key} showCountry = {showCountry} handleEffectChange = {handleEffectChange} isShowCountry = {isShowCountry}/>
            </>
        )
    }

   
    return (
        <>
        <ul>
           {showCountries.length > 10 ? (<>Too many Matches, specify another filter</>): showCountries } 
        </ul>
        </>
    )

}

export default CountryList;