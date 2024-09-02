import React, { useState } from "react";
import Modal from "react-modal";
import "./index.css";

Modal.setAppElement("#root");

const eventsData = [
  {
    title: "Annual General Meeting",
    date: "2024-10-15",
    location: "Main Hall, Building A",
    description:
      "The Annual General Meeting will cover the yearly review, financial statements, and future plans.",
    type: "Upcoming",
  },
  {
    title: "Community Outreach Program",
    date: "2024-11-05",
    location: "Community Center",
    description:
      "Join us in our efforts to give back to the community through various outreach programs.",
    type: "Upcoming",
  },
  {
    title: "Fundraising Gala",
    date: "2024-12-01",
    location: "Grand Ballroom, Hotel XYZ",
    description:
      "A night of entertainment, auctions, and donations to support our projects.",
    type: "Upcoming",
  },
  {
    title: "Charity Run",
    date: "2024-05-20",
    location: "City Park",
    description: "A fun run to raise funds for local charities.",
    type: "Past",
  },
  {
    title: "Summer Festival",
    date: "2024-08-10",
    location: "Central Square",
    description: "A festival with music, food, and activities for all ages.",
    type: "Past",
  },
  {
    title: "Winter Gala",
    date: "2023-12-15",
    location: "Grand Hall",
    description:
      "An elegant evening of dining and dancing to celebrate the end of the year.",
    type: "Past",
  },
];

const OrganizationEvents = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-container">
      <h2>Events & Activities</h2>
      <div className="events-section">
        <h3>Upcoming Events</h3>
        <ul className="events-list">
          {eventsData
            .filter((event) => event.type === "Upcoming")
            .map((event, index) => (
              <li
                key={index}
                className="event-item"
                onClick={() => openModal(event)}
              >
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </li>
            ))}
        </ul>
      </div>
      <div className="events-section">
        <h3>Past Activities</h3>
        <ul className="events-list">
          {eventsData
            .filter((event) => event.type === "Past")
            .map((event, index) => (
              <li
                key={index}
                className="event-item"
                onClick={() => openModal(event)}
              >
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </li>
            ))}
        </ul>
      </div>

      {selectedEvent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Event Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <button onClick={closeModal} className="modal-close">
            Close
          </button>
          <h2>{selectedEvent.title}</h2>
          <p>
            <strong>Date:</strong> {selectedEvent.date}
          </p>
          <p>
            <strong>Location:</strong> {selectedEvent.location}
          </p>
          <p>
            <strong>Description:</strong> {selectedEvent.description}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default OrganizationEvents;
