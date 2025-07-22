import React from 'react'
import InteractiveMap from '../Components/MapWithSelectedDestination';


const Map = () => {
  return (
    <>

      <div>
      <h1 className="text-2xl font-bold text-center my-6">🌍 Explore Destinations</h1>
      <InteractiveMap />
    </div>

    </>
  )
}

export default Map