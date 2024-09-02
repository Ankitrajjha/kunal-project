import React from "react";
import "./index.css";

const sectionsData = [
  {
    title: "Community Outreach",
    content:
      "Our organization is dedicated to improving the lives of those in our community through outreach programs, including food drives, educational workshops, and more.",
    image: "https://example.com/community-outreach.jpg",
  },
  {
    title: "Environmental Initiatives",
    content:
      "We are committed to protecting the environment by organizing clean-up events, promoting sustainable practices, and raising awareness about environmental issues.",
    image: "https://example.com/environmental-initiatives.jpg",
  },
  {
    title: "Educational Programs",
    content:
      "Our educational programs aim to provide learning opportunities for all ages, from after-school tutoring to adult education classes and career development workshops.",
    image: "https://example.com/educational-programs.jpg",
  },
  {
    title: "Healthcare Services",
    content:
      "We offer a range of healthcare services, including free medical check-ups, mental health support, and wellness programs to ensure the well-being of our community members.",
    image: "https://example.com/healthcare-services.jpg",
  },
];

const Sections = () => {
  return (
    <div className="sections-container">
      {sectionsData.map((section, index) => (
        <div key={index} className="section-item">
          <img
            src={section.image}
            alt={section.title}
            className="section-image"
          />
          <h2 className="section-title">{section.title}</h2>
          <p className="section-content">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Sections;
