// src/components/Planner/DestinationSelector.jsx

import { useState } from "react";

const popularDestinations = [
  "Manali",
  "Shimla",
  "Jaipur",
  "Goa",
  "Udaipur",
  "Rishikesh",
  "Nainital",
  "Ladakh",
  "Darjeeling",
];

const DestinationSelector = ({ selectedDestination, setSelectedDestination }) => {
  const [query, setQuery] = useState("");

  const filtered = popularDestinations.filter((dest) =>
    dest.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label className="block text-lg font-semibold text-gray-700 mb-2">Choose Destination</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type or search..."
        className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {query && (
        <ul className="mt-2 border rounded-lg shadow-md bg-white max-h-40 overflow-auto">
          {filtered.length > 0 ? (
            filtered.map((dest, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedDestination(dest);
                  setQuery(dest);
                }}
                className="p-2 hover:bg-blue-100 cursor-pointer"
              >
                {dest}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-400">No matches found</li>
          )}
        </ul>
      )}

      {selectedDestination && (
        <p className="mt-2 text-green-600">✅ Selected: {selectedDestination}</p>
      )}
    </div>
  );
};

export default DestinationSelector;
