import React from "react";

function EventCard({ title, date, description }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>{description}</p>
      <button>Register</button>
    </div>
  );
}

export default EventCard;
