import React, { useState } from "react";
import Modal from "react-modal";
import "./index.css";

Modal.setAppElement("#root");

const events = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: "October 5, 2024",
    location: "Grand Ballroom, City Hotel",
    description:
      "Join us for an evening of entertainment and fundraising to support local charities.",
    details:
      "The Annual Charity Gala will feature a live band, silent auction, and gourmet dinner. Dress code is formal.",
  },
  {
    id: 2,
    title: "Community Clean-Up Day",
    date: "September 20, 2024",
    location: "Central Park",
    description:
      "Help us clean up our community park and make it a better place for everyone.",
    details:
      "Volunteers will be provided with gloves, bags, and refreshments. Please wear comfortable clothes and shoes.",
  },
  {
    id: 3,
    title: "Tech Workshop",
    date: "November 10, 2024",
    location: "Tech Hub, Main Street",
    description:
      "A workshop on the latest technologies and how they can be applied to improve business operations.",
    details:
      "The workshop will cover AI, blockchain, and cloud computing. Participants are encouraged to bring their own laptops.",
  },
  {
    id: 4,
    title: "Tech Workshop",
    date: "November 10, 2024",
    location: "Tech Hub, Main Street",
    description:
      "A workshop on the latest technologies and how they can be applied to improve business operations.",
    details:
      "The workshop will cover AI, blockchain, and cloud computing. Participants are encouraged to bring their own laptops.",
  },
];

const EventList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li
            key={event.id}
            className="event-item"
            onClick={() => openModal(event)}
          >
            <h3>{event.title}</h3>
            <p>
              {event.date} | {event.location}
            </p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>

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
          <p>
            <strong>Details:</strong> {selectedEvent.details}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default EventList;
