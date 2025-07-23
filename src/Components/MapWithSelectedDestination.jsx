// src/Components/MapWithSelectedDestination.jsx
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Footer from './Footer';

// Destination options
const destinations = [
  {
    id: 1,
    name: 'Goa',
    lat: 15.2993,
    lng: 74.1240,
    image: 'https://www.holidify.com/images/bgImages/GOA.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Manali',
    lat: 32.2432,
    lng: 77.1892,
    image: 'https://www.holidify.com/images/bgImages/MANALI.jpg',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Thailand',
    lat: 13.7563,
    lng: 100.5018,
    image: 'https://www.holidify.com/images/bgImages/THAILAND.jpg',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Jaipur',
    lat: 26.9124,
    lng: 75.7873,
    image: 'https://www.holidify.com/images/bgImages/JAIPUR.jpg',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Kerala',
    lat: 10.8505,
    lng: 76.2711,
    image: 'https://www.holidify.com/images/bgImages/KERALA.jpg',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Rishikesh',
    lat: 30.0869,
    lng: 78.2676,
    image: 'https://www.holidify.com/images/bgImages/RISHIKESH.jpg',
    rating: 4.5,
  },
  {
    id: 7,
    name: 'Shimla',
    lat: 31.1048,
    lng: 77.1734,
    image: 'https://www.holidify.com/images/bgImages/SHIMLA.jpg',
    rating: 4.4,
  },
  {
    id: 8,
    name: 'Darjeeling',
    lat: 27.0360,
    lng: 88.2627,
    image: 'https://www.holidify.com/images/bgImages/DARJEELING.jpg',
    rating: 4.3,
  },
  {
    id: 9,
    name: 'Andaman & Nicobar',
    lat: 11.7401,
    lng: 92.6586,
    image: 'https://www.holidify.com/images/bgImages/ANDAMAN-AND-NICOBAR-ISLANDS.jpg',
    rating: 4.9,
  },
  {
    id: 10,
    name: 'Ladakh',
    lat: 34.2268,
    lng: 77.5619,
    image: 'https://www.holidify.com/images/bgImages/LADAKH.jpg',
    rating: 4.9,
  },
  {
    id: 11,
    name: 'Agra',
    lat: 27.1767,
    lng: 78.0081,
    image: 'https://www.holidify.com/images/bgImages/AGRA.jpg',
    rating: 4.6,
  },
  {
    id: 12,
    name: 'Dubai',
    lat: 25.2048,
    lng: 55.2708,
    image: 'https://www.holidify.com/images/bgImages/DUBAI.jpg',
    rating: 4.7,
  },
  {
    id: 13,
    name: 'Singapore',
    lat: 1.3521,
    lng: 103.8198,
    image: 'https://www.holidify.com/images/bgImages/SINGAPORE.jpg',
    rating: 4.8,
  },
  {
    id: 14,
    name: 'Bali',
    lat: -8.3405,
    lng: 115.0920,
    image: 'https://www.holidify.com/images/bgImages/BALI.jpg',
    rating: 4.9,
  },
  {
    id: 15,
    name: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    image: 'https://www.holidify.com/images/bgImages/PARIS.jpg',
    rating: 4.8,
  },
  {
    id: 16,
    name: 'London',
    lat: 51.5072,
    lng: -0.1276,
    image: 'https://www.holidify.com/images/bgImages/LONDON.jpg',
    rating: 4.7,
  },
  {
    id: 17,
    name: 'New York',
    lat: 40.7128,
    lng: -74.0060,
    image: 'https://www.holidify.com/images/bgImages/NEW-YORK-CITY.jpg',
    rating: 4.6,
  },
  {
    id: 18,
    name: 'Dubai Marina',
    lat: 25.0800,
    lng: 55.1400,
    image: 'https://www.holidify.com/images/compressed/dest_wiki_11517.jpg',
    rating: 4.9,
  },
  {
    id: 19,
    name: 'Ooty',
    lat: 11.4100,
    lng: 76.6950,
    image: 'https://www.holidify.com/images/bgImages/OOTY.jpg',
    rating: 4.5,
  },
  {
    id: 20,
    name: 'Mysore',
    lat: 12.2958,
    lng: 76.6394,
    image: 'https://www.holidify.com/images/bgImages/MYSORE.jpg',
    rating: 4.4,
  },
];

// Custom Icon
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [35, 35],
});

function MapFocus({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], 6); // Zoom level 6
  return null;
}

const MapWithSelectedDestination = () => {
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const place = destinations.find(d => d.id === selectedId);
    setSelected(place);
  };

  return (
 <>
 
       <div id='map' className="space-y-6 h-[65vh] ml-5 mr-5">
      <select onChange={handleChange} className="p-2 border rounded-md w-full max-w-xs">
        <option value="">Select Destination</option>
        {destinations.map(dest => (
          <option key={dest.id} value={dest.id}>{dest.name}</option>
        ))}
      </select>

      <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
        <MapContainer center={[22.5, 80.9]} zoom={4} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {selected && (
            <>
              <Marker position={[selected.lat, selected.lng]} icon={customIcon}>
                <Popup>
                  <div className="text-center">
                    <img src={selected.image} alt={selected.name} className="w-32 h-20 object-cover rounded-md" />
                    <h2 className="font-semibold mt-2">{selected.name}</h2>
                    <p className="text-sm">Rating: ⭐ {selected.rating}</p>
                  </div>
                </Popup>
              </Marker>
              <MapFocus lat={selected.lat} lng={selected.lng} />
            </>
          )}
        </MapContainer>
      </div>   

    </div>

      <div>      
        <Footer />
      </div> 
    
 
 </>

  );
};

export default MapWithSelectedDestination;
