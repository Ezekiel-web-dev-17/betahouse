// Import React and the useState hook for managing local state.
import React, { useState } from "react";

// Import CSS file for styling the Contact page.
import "./Contact.css";

// Import React Leaflet components for displaying an interactive map.
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Import Leaflet CSS to style the map.
import "leaflet/dist/leaflet.css";

// Import Leaflet library for configuring the default marker icon.
import L from "leaflet";
// Import default marker images provided by Leaflet.
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { BsPhoneVibrate } from "react-icons/bs";
import { GrMail, GrMapLocation } from "react-icons/gr";

// Delete the _getIconUrl method from L.Icon.Default prototype to override it.
delete L.Icon.Default.prototype._getIconUrl;
// Merge options into the default icon settings with the imported images.
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Define the Contact component as a functional component.
const Contact = () => {
  // Define the position (latitude and longitude) for the map marker.
  // These coordinates correspond approximately to "No 18, Dailey Street, Shomolu, Lagos, Nigeria".
  const position = [6.601, 3.351];

  // useState hook to manage the state of the contact form.
  // The form collects a name, phone number, email, and comment.
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  // Event handler for changes in any form input.
  // Updates the formData state by changing only the property corresponding to the input's name.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler for form submission.
  // Saves the current form data to localStorage and resets the form.
  const handleSubmit = (e) => {
    // Prevent the default form submission which would cause a page reload.
    e.preventDefault();

    // Retrieve any previous submissions from localStorage.
    // If none are found, default to an empty array.
    const previousSubmissions =
      JSON.parse(localStorage.getItem("contactSubmissions")) || [];

    // Create an updated submissions array that includes the current formData.
    const updatedSubmissions = [...previousSubmissions, formData];

    // Save the updated submissions array to localStorage.
    localStorage.setItem(
      "contactSubmissions",
      JSON.stringify(updatedSubmissions)
    );

    // Alert the user that their message was saved successfully.
    alert("Message saved successfully.");

    // Clear the form fields by resetting the formData state.
    setFormData({ name: "", phone: "", email: "", comment: "" });
  };

  return (
    // Main container for the contact section with container styling.
    <section className="contact-sec container mt-5 pt-5">
      {/* ============================= */}
      {/* Section for displaying contact information */}
      <div className="contact-two px-3 pt-5 text-md-start py-4 d-flex flex-column align-items-md-start gap-5 mb-3">
        {/* Page title */}
        <h2 className="m-0 text-success fw-bolder">Contact</h2>

        {/* Contact information cards */}
        <div className="all-media d-flex align-items-center justify-content-between w-100">
          {/* Phone number card */}
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3 w-100">
            <div className="d-flex flex-column align-items-center gap-3">
              <BsPhoneVibrate className=" fs-1 text-success" />
              <p className="m-0 reach">Phone number</p>
            </div>
            <p className="m-0 get">+234-916-218-8221</p>
          </div>

          {/* Email card */}
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3 w-100">
            <div className="d-flex flex-column align-items-center gap-3">
              <GrMail className="fs-1 text-success" />
              <p className="m-0 reach">Email</p>
            </div>
            <p className="m-0 get">betahouse100@gmail.com</p>
          </div>

          {/* Address card */}
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3 w-100">
            <div className="d-flex flex-column align-items-center gap-3">
              {/* <img src={iconLocate} alt="Address" /> */}
              {<GrMapLocation className=" fs-1 text-success" />}
              <p className="m-0 reach">Address place</p>
            </div>
            <p className="m-0 get">
              No 18, Dailey Street, Shomolu, Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* Section containing the interactive map and contact form */}
      <div className="loc-con d-flex align-items-center w-100 justify-content-between">
        {/* Map container for displaying an interactive map using React Leaflet */}
        <div
          className="map-container mb-4 w-100"
          // Inline style setting the map height, flex basis, and minimum width.
          style={{ height: "470px", flex: "1 1 45%", minWidth: "604.81px" }}
        >
          <MapContainer
            center={position} // Set the center of the map to the defined position.
            zoom={16} // Set the initial zoom level.
            style={{ height: "100%", width: "100%" }} // Ensure the map fills the container.
          >
            {/* TileLayer to load and display tile layers on the map from OpenStreetMap */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Marker placed at the specified position */}
            <Marker position={position}>
              {/* Popup that displays when the marker is clicked */}
              <Popup>No 18, Dailey Street, Shomolu, Lagos, Nigeria.</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Contact form for users to send a message */}
        <form
          onSubmit={handleSubmit} // Handle form submission with handleSubmit.
          className="con-form text-start d-flex flex-column align-items-md-start gap-5 w-100"
          // Inline styles setting the flex basis and minimum width for the form.
          style={{ flex: "1 1 45%", minWidth: "300px" }}
        >
          <div className="d-flex flex-column gap-4">
            <h3 className="text-success">Contact Us </h3>
            {/* Container for the input fields */}
            <div className="con-inp d-flex flex-column gap-4">
              {/* Input for user's name */}
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name} // Controlled component bound to formData.
                onChange={handleChange} // Update formData on change.
              />
              {/* Input for phone number */}
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {/* Input for email address */}
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {/* Textarea for user's comment */}
              <textarea
                className="px-3 py-2 rounded-3"
                rows="5"
                name="comment"
                placeholder="Write your comment here..."
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Submit button for sending the contact message */}
          <button
            type="submit"
            className="px-4 py-2 rounded-4 border-0 bg-success"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

// Export the Contact component as the default export.
export default Contact;
