import React, { useState } from "react";

// Reusable Itinerary Generator
const activityIdeas = {
  Beaches: ["Beach Visit", "Sunbathing", "Water Sports"],
  Nature: ["Hiking", "Picnic", "Bird Watching"],
  Historical: ["Museum Visit", "Monument Tour", "Local History Walk"],
  "City Tour": ["Market Visit", "Street Food", "City Bus Tour"],
  Trekking: ["Trail Walk", "Mountain Viewpoint", "Nature Camp"],
  Nightlife: ["Pub Crawl", "Live Music", "Night Market"],
};

const TripPlanner = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [interests, setInterests] = useState([]);
  const [itinerary, setItinerary] = useState([]);

  const handleCheckboxChange = (interest) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const generateItinerary = () => {
    let plan = [];
    for (let i = 1; i <= days; i++) {
      const interest = interests[(i - 1) % interests.length];
      const ideas = activityIdeas[interest];
      const activity =
        ideas[Math.floor(Math.random() * ideas.length)] || "Explore";
      plan.push(`Day ${i}: ${activity}`);
    }
    setItinerary(plan);
  };

  const activityOptions = Object.keys(activityIdeas);

  return (
    <div id="trip" className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">🗺️ WanderMap Planner</h1>

      <div className="mb-4">
        <label className="block font-semibold">Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
          placeholder="e.g. Goa, Manali"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Trip Duration (Days):</label>
        <input
          type="number"
          value={days}
          min={1}
          max={15}
          onChange={(e) => setDays(parseInt(e.target.value))}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Select Interests:</label>
        <div className="grid grid-cols-2 gap-2">
          {activityOptions.map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={interests.includes(interest)}
                onChange={() => handleCheckboxChange(interest)}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={generateItinerary}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Generate Itinerary
      </button>

      {itinerary.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            ✈️ Your Itinerary for {destination}
          </h2>
          <ul className="space-y-2">
            {itinerary.map((day, index) => (
              <li
                key={index}
                className="bg-gray-100 px-3 py-2 rounded border-l-4 border-blue-500"
              >
                {day}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TripPlanner;
