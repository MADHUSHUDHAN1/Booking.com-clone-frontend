import React from 'react'
import useFetch from '../../hooks/useFetch.js';
import "./featuredProperties.css"
const FeaturedProperties = () => {

    const {data, loading,error} = useFetch("/hotels?featured=true&limit=4");
  return (
   <div className="fp">
   { loading ? ("Loading please wait"): (<>
   {data.map((item) => (
    <div className="fpItem" key={item._id}>
    <img alt="" className="fpImg" src={item.photos[0]} />
    <span className="fpName">{item.name}</span>
    <span className="fpCity">{item.city}</span>
    <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
    {item.rating &&<div className="fpRating">
        <button>item.rating</button>
        <span>Excelent</span>
    </div>}
    </div> 
    ))}
    </>
    )}
   </div>
  )
}

export default FeaturedProperties