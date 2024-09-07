const SearchCountries = ({country,handleChange}) =>{
    
    return(
     <>
      find countries <input value={country} onChange={handleChange} />
     </>
    )
 
}

export default SearchCountries;