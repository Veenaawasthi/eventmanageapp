import React, { useState } from "react";

const EventModal = ({ isOpen, onClose, onSave }) => {
    const [eventName, setEventName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ eventName, startTime, endTime, description });
        setEventName("");
        setStartTime("");
        setEndTime("");
        setDescription("");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-black rounded-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">Add Event</h2>
                <input
                    type="text"
                    placeholder="Event Name"
                    className="w-full mb-2 px-3 py-2 border rounded"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                />
                <input
                    type="time"
                    className="w-full mb-2 px-3 py-2 border rounded"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
                <input
                    type="time"
                    className="w-full mb-2 px-3 py-2 border rounded"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className="w-full mb-2 px-3 py-2 border rounded"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-black"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventModal;


