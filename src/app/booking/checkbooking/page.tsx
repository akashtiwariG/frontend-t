"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookingsList } from "@/components/bookings/booking-list"
import {BookingDetails} from "@/components/dashbaord/booking-details"
import { useLayout } from "@/providers/layout-providers"


export default function CheckBookingPage() {
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null)
  const { isSidebarOpen } = useLayout()

  // Handler to clear the selected booking and go back to list
  const handleBack = () => {
    setSelectedBooking(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-gray-50 p-6 ${isSidebarOpen ? 'lg:ml-64' : ''}`}
    >
      {selectedBooking ? (
        // Fixed: Now using correct prop name "booking" that matches component interface
        <BookingDetails booking={selectedBooking} onBack={handleBack} />
      ) : (
        <BookingsList onSelectBooking={setSelectedBooking} />
      )}
    </motion.div>
  )
}