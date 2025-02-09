import React, { useState } from "react";

export default function RandomRestaurantPicker() {
  const restaurants = [
    "Olive Garden",
    "The Cheesecake Factory",
    "Chipotle Mexican Grill",
    "Texas Roadhouse",
    "Shake Shack",
    "Panda Express",
    "Red Lobster",
    "Buffalo Wild Wings",
    "Outback Steakhouse",
    "IHOP",
    "Chili's Grill & Bar",
    "Five Guys",
    "Panera Bread",
    "Applebee's",
    "PF Chang's",
    "In-N-Out Burger",
    "Denny's",
    "TGI Fridays",
    "Cracker Barrel",
    "McDonald's",
  ];

  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  const pickRandomRestaurant = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    setSelectedRestaurant(restaurants[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Random Restaurant Picker</h1>
      <button
        onClick={pickRandomRestaurant}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Pick a Restaurant
      </button>
      {selectedRestaurant && (
        <p className="mt-4 text-xl font-semibold">{selectedRestaurant}</p>
      )}
    </div>
  );
}
