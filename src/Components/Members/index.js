import React, { useState } from "react";
import "./index.css";

const Members = [
  {
    name: "John Doe",
    images: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
    ],
    position: "President",
    description: "Leader of the society with 10 years of experience.",
  },
  {
    name: "Jane Smith",
    images: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
    ],
    position: "Vice President",
    description: "Handles external affairs and community outreach.",
  },
  {
    name: "Samuel Lee",
    images: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
    ],
    position: "Secretary",
    description: "Manages records and correspondence for the society.",
  },
  {
    name: "Emily Davis",
    images: [
      "https://randomuser.me/api/portraits/women/3.jpg",
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/women/5.jpg",
    ],
    position: "Treasurer",
    description: "Responsible for managing the society's finances.",
  },
];

const MembersGrid = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div>
      <div className="members-grid">
        {Members.map((member) => (
          <div
            key={member.name}
            className="member-item"
            onClick={() => openModal(member)}
          >
            <img src={member.images[0]} alt={member.name} />
            <h3>{member.name}</h3>
            <h4 className="member-position">{member.position}</h4>
            <h5 className="member-description">{member.description}</h5>
          </div>
        ))}
      </div>

      {/* <MemberModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        member={selectedMember}
      /> */}
    </div>
  );
};

export default MembersGrid;
