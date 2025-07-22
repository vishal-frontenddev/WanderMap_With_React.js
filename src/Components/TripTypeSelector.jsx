// src/components/Planner/TripTypeSelector.jsx

import React from "react";

const tripTypes = ["Solo", "Family", "Friends", "Couple"];

const TripTypeSelector = ({ selectedTripType, setSelectedTripType }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Select Trip Type
      </label>

      <div className="grid grid-cols-2 gap-3">
        {tripTypes.map((type) => (
          <label
            key={type}
            className={`flex items-center gap-2 text-sm p-2 rounded border ${
              selectedTripType === type
                ? "bg-blue-100 border-blue-500"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="tripType"
              value={type}
              checked={selectedTripType === type}
              onChange={() => setSelectedTripType(type)}
              className="accent-blue-500"
            />
            {type}
          </label>
        ))}
      </div>

      {selectedTripType && (
        <p className="mt-4 text-green-700">
          ✅ Selected: {selectedTripType}
        </p>
      )}
    </div>
  );
};

export default TripTypeSelector;
