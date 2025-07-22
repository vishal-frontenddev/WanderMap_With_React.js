// src/pages/Planner.jsx

import { useState } from "react";
import DestinationSelector from "../Components/DestinationSelector";
import DatePicker from "../Components/DatePicker";
import ActivitySelector from "../Components/ActivitySelector";
import TripTypeSelector from "../Components/TripTypeSelector";
import TripPlanner from "../Components/TripPlanner";
import Footer from "../Components/Footer";

const Planner = () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
    const [selectedActivities, setSelectedActivities] = useState([]);
     const [selectedTripType, setSelectedTripType] = useState("");

     

  return (
     <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">🗺️ WanderMap Planner</h1>

      {/* Step 1: Destination Selector */}
      <DestinationSelector
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />

      {/* Step 2: Date Picker */}
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      {/* ✅ Step 3: Activities */}
      <ActivitySelector
        selectedActivities={selectedActivities}
        setSelectedActivities={setSelectedActivities}
      />

       {/* ✅ Step 4: Trip Type */}
      <TripTypeSelector
        selectedTripType={selectedTripType}
        setSelectedTripType={setSelectedTripType}
      />



      <div className="min-h-screen bg-gray-50 p-6">
      <TripPlanner />
    </div>

    <div>
      <Footer />
    </div>

    </div>


    
    
  );
};

export default Planner;
