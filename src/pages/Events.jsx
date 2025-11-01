import React from "react";
import EventCard from "../components/EventCard";

function Events() {
  const dummyEvents = [
    {
      title: "Tech Talk",
      date: "Nov 5, 2025",
      description: "Learn MERN stack basics.",
    },
    {
      title: "Hackathon",
      date: "Nov 20, 2025",
      description: "24-hour coding challenge!",
    },
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {dummyEvents.map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
