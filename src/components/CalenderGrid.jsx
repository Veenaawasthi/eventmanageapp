import React from "react";

const CalendarGrid = ({ currentDate, events, onDayClick, selectedDate }) => {
    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendar = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

        const grid = [];
        for (let i = 0; i < firstDay; i++) {
            grid.push(null); // Empty cells before the first day
        }

        for (let day = 1; day <= daysInMonth; day++) {
            grid.push(day);
        }

        return grid;
    };

    const grid = generateCalendar();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    return (
        <div className="grid grid-cols-7 gap-2 bg-gray-400 p-4 rounded shadow-md">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-bold text-black-100">
                    {day}
                </div>
            ))}
            {grid.map((day, index) => {
                const dateString = day
                    ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                    : "";

                const isSelected = selectedDate === dateString;
                const hasEvents = events[dateString]?.length > 0;

                return (
                    <div
                        key={index}
                        className={`h-16 flex items-center justify-center rounded k${
                            isSelected
                                ? "bg-blue-500 text-black"
                                : hasEvents
                                ? "bg-yellow-100"
                                : "bg-gray-100"
                        } hover:bg-blue-200 cursor-pointer`}
                        onClick={() => day && onDayClick(dateString)}
                    >
                        {day || ""}
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarGrid;

            

