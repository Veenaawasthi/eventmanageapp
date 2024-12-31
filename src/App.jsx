import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CalendarGrid from "./components/CalenderGrid";
import EventModal from "./components/EventModal";
import EventList from "./components/EventList";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState({});
    const [isModalOpen, setModalOpen] = useState(false);

    const changeMonth = (offset) => {
        setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
    };

    const handleSaveEvent = (event) => {
        setEvents((prev) => ({
            ...prev,
            [selectedDate]: [...(prev[selectedDate] || []), event],
        }));
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto p-4 ">
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="px-4 py-2 bg-red-600 rounded hover:bg-gray-300 text-black-100"
                        onClick={() => changeMonth(-1)}
                    >
                        Previous
                    </button>
                    <h2 className="text-xl font-bold">
                        {currentDate.toLocaleString("default", { month: "long" })}{" "}
                        {currentDate.getFullYear()}
                    </h2>
                    <button
                        className="px-4 py-2 bg-green-500 rounded hover:bg-gray-300 text-black-100"
                        onClick={() => changeMonth(1)}
                    >
                        Next
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <CalendarGrid
                            currentDate={currentDate}
                            events={events}
                            onDayClick={(date) => setSelectedDate(date)}
                            selectedDate={selectedDate}
                        />
                    </div>
                    <div>
                        <EventList events={events} selectedDate={selectedDate} />
                    </div>
                </div>
                {selectedDate && (
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setModalOpen(true)}
                    >
                        Add Event
                    </button>
                )}
                <EventModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSave={handleSaveEvent}
                />
            </div>
            <ErrorBoundary>
    <CalendarGrid
        currentDate={currentDate}
        events={events}
        onDayClick={(date) => setSelectedDate(date)}
        selectedDate={selectedDate}
    />
</ErrorBoundary>;
        </div>
    );
};

export default App;
