import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './CharityPage.css';

const CharityPage = () => {
  // Sample data
  const charityImage = "https://i.pinimg.com/236x/96/f0/b0/96f0b05606ff3ea96e5c2e70ae0bb91d.jpg";
  const organizerImage = "https://i.pinimg.com/236x/96/f0/b0/96f0b05606ff3ea96e5c2e70ae0bb91d.jpg";
  const organizerName = "Morgan";
  const creationDate = "January 1, 2024";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum tellus vitae lacinia faucibus. Sed hendrerit gravida risus, quis tempus mauris rutrum non. Mauris vestibulum lectus in tincidunt condimentum. Integer tincidunt risus vel lacus pulvinar hendrerit. Nulla id consectetur dolor. Maecenas vestibulum pretium libero, vitae tempor tortor suscipit a. Maecenas vel viverra dolor. Quisque at ipsum nunc. Sed scelerisque nec leo eget mattis. In hendrerit turpis id leo consequat, a vehicula urna dignissim. Donec pretium libero turpis, eget vehicula augue viverra nec. Vestibulum tristique pharetra libero eu rhoncus. Nunc porttitor consectetur urna at interdum. Aliquam sed dolor sodales lorem elementum rhoncus at maximus urna.";
  const raisedAmount = 12024;
  const goalAmount = 100039;
  const progress = (raisedAmount / goalAmount) * 100;


  const contactDetails = [
    {
      charity_email: "edwardswendy@example.org",
      charity_id: 1,
      date: "2024-03-11 07:42:57",
      id: 2,
      map_details: "https://www.le.com/",
      messages: [
        {
          date: "2024-03-11 07:42:59",
          id: 1,
          message: "Decade others fast list where. Conference natural near. Help identify morning care.\nAbility group there home Mr. Itself from board bar although TV. Bit behind program camera perform manager allow.",
          user_id: 1
        }
      ]
    }
  ];

  const { charity_email, date, map_details, messages } = contactDetails[0];

  return (
    <>
    <div className="charity-page-container">


      <div className="charity-card">
        <h2 className="page-title">Charity Details</h2>
        <div className="charity-image-container">
          <img src={charityImage} alt="Charity Image" className="charity-image" />
        </div>
        <div className="charity-info">
          <img src={organizerImage} alt="Organizer Image" className="organizer-image" />
          <div>
            <p className="organizer-name">{organizerName}, the organizer of the charity</p>
            <p className="creation-date">Created at: {creationDate}</p>
          </div>
        </div>
        <div className="charity-description">
          <p>{description}</p>
        </div>
        
      </div>
      <div className="donation-card">
        <div className="donation-info">
          <h3 className="donation-heading">Support Our Cause:</h3>
          <p className="donation-status">${raisedAmount} raised of ${goalAmount} goal</p>
          <ProgressBar now={progress} label={`${progress.toFixed(2)}%`} variant="success" className="custom-progress-bar" />
          <div className="donation-actions">
            <button className="btn btn-primary donate-btn">Donate Now</button>
            <p className="donation-note">Your contribution helps ensure the success of our initiatives and projects. We are committed to making a positive impact in our community.</p>
            <ul className="donation-perks">
              <li>Recognition on our website or promotional materials for donations over $100.</li>
              <li>Exclusive updates and reports on the progress of our projects for regular donors.</li>
              <li>A sense of fulfillment in knowing that you're part of something bigger, creating positive change.</li>
              <li>Monthly newsletters highlighting the impact of your donation and stories of individuals benefiting from our programs.</li>
            </ul>
            <div className="donation-options">
              <p className="donation-options-heading">Other Ways to Support:</p>
              <ul className="donation-options-list">
                <li>Volunteer your time and skills to contribute directly to our projects.</li>
                <li>Spread awareness by sharing our mission and initiatives on social media.</li>
                <li>Organize fundraising events in your community to support our cause.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="contact-card">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><FaEnvelope className="icon" /> <a href={`mailto:${charity_email}`}>{charity_email}</a></p>
        <p><FaMapMarkerAlt className="icon" /> <a href={map_details}>Find Us on the Map</a></p>
        <p><FaClock className="icon" /> <strong>Last Contact:</strong> {date}</p>
      </div>

      <div className="user-message">
        <h3>Write Your Message</h3>
        <textarea placeholder="Type your message here..." />
        <button>Send Message</button>
      </div>
    </div>
      </>
  );
}

export default CharityPage;
