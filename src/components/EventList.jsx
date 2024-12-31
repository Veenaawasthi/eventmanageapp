import React from "react";

const EventList = ({ events, selectedDate }) => {
    const eventList = events[selectedDate] || [];

    return (
        <div className="bg-pink-100 p-4 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2 text-black">Events for {selectedDate}</h3>
            {eventList.length === 0 ? (
                <p className="text-black ">No events for this day.</p>
            ) : (
                <ul className="space-y-2">
                    {eventList.map((event, index) => (
                        <li key={index} className="p-3 bg-green-400 rounded shadow">
                            <h4 className="font-bold">{event.eventName}</h4>
                            <p className="text-sm text-gray-600">
                                {event.startTime} - {event.endTime}
                            </p>
                            {event.description && (
                                <p className="text-gray-500">{event.description}</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventList;
