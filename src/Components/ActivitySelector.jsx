// src/components/Planner/ActivitySelector.jsx

import React from "react";

const activitiesList = [
  "Sightseeing",
  "Trekking",
  "Shopping",
  "Wildlife",
  "Adventure Sports",
  "Food Tour",
  "Cultural Tour",
];

const ActivitySelector = ({ selectedActivities, setSelectedActivities }) => {
  const toggleActivity = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((item) => item !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Choose Activities
      </label>

      <div className="grid grid-cols-2 gap-3">
        {activitiesList.map((activity) => (
          <label key={activity} className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={selectedActivities.includes(activity)}
              onChange={() => toggleActivity(activity)}
              className="accent-blue-500"
            />
            {activity}
          </label>
        ))}
      </div>

      {selectedActivities.length > 0 && (
        <p className="mt-4 text-blue-600">
          ✅ Selected: {selectedActivities.join(", ")}
        </p>
      )}
    </div>
  );
};

export default ActivitySelector;
