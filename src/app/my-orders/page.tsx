"use client";

import React, { useState } from "react";

// Dummy data for orders
const orders = [
  { id: 1, status: "To Pay", product: "Wooden Chair", date: "2023-10-01" },
  { id: 2, status: "To Ship", product: "Leather Sofa", date: "2023-10-02" },
  { id: 3, status: "To Receive", product: "Dining Table", date: "2023-10-03" },
  { id: 4, status: "To Review", product: "Bed Frame", date: "2023-10-04" },
  { id: 5, status: "Completed", product: "Bookshelf", date: "2023-10-05" },
];

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState("All");

  // Filter orders based on active tab
  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="container mx-auto p-2 md:p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">My Orders</h1>

      {/* Tabs */}
      <div className="flex md:gap-6 mb-8 border-b border-gray-200">
        {["All", "To Pay", "To Ship", "To Receive", "To Review"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-6 text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "border-b-2 border-[#B88E2F] text-[#B88E2F]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {order.product}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Order ID: #{order.id}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  order.status === "To Pay"
                    ? "bg-yellow-100 text-yellow-800"
                    : order.status === "To Ship"
                    ? "bg-blue-100 text-blue-800"
                    : order.status === "To Receive"
                    ? "bg-green-100 text-green-800"
                    : order.status === "To Review"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-gray-600 mt-3">
              <span className="font-medium">Order Date:</span> {order.date}
            </p>
            <button className="mt-4 text-[#B88E2F] font-medium hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}