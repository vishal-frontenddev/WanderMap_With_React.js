// src/components/Planner/DatePicker.jsx

import React from "react";

const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Select Dates
      </label>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {startDate && endDate && (
        <p className="mt-3 text-green-600">
          📅 Trip: {startDate} to {endDate}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
