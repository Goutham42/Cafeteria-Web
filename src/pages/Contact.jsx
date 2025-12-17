import "./Contact.css";
import { memo } from "react";
import contactImage from '../components/Assets/contact-cf.png'
import locationImage from '../components/Assets/location-bg.png'
import timeImage from '../components/Assets/time-bg.png'
import phoneImage from '../components/Assets/phone-bg.png'
import mailImage from '../components/Assets/mail-bg.png'
import whatsappImage from '../components/Assets/wht-bg.png'
import instaImage from '../components/Assets/insta-bg.png'


const ContactSection = () => (
  <section id="contact-section">
    <h2 className="contact-heading">
      <span>Come Have a Coffee With Us</span>
      <img
        src={contactImage}
        alt="contactLogo"
        className="inline-icon"
        loading="lazy"
      />
    </h2>

    <p className="subtitle">
      Feedback, events, or just a hello — we’re listening.
    </p>

    <div className="contact-container">
      <address className="contact-info">
        <p className="inline-box1">
          <img 
            src={locationImage}
            alt="location"
            className="inline-icon1"
            loading="lazy"
          />
          London
        </p> <br />
        <p className="inline-box2">
           <img 
            src={timeImage}
            alt="time"
            className="inline-icon2"
            loading="lazy"
          />
           Sat – Sun | 7 AM – 10 PM</p> <br />
        <p className="inline-box3">
           <img 
            src={phoneImage}
            alt="call"
            className="inline-icon3"
            loading="lazy"
          />
           <a href="tel:+919876543210" className="number">+91 98765 43210</a>
        </p> <br />
        <p className="inline-box4" >
          <img 
            src={mailImage}
            alt="location"
            className="inline-icon4"
            loading="lazy"
          />
           <a href="mailto:hello@madrasicoffee.com" className="mail">
            hello@madrasicoffee.com
          </a>
        </p>

        <div className="quick-actions">
          <a href="https://wa.me/919876543210" className="inline-box6">
          <img
                src={whatsappImage}
                alt="whatsapp"
                className="inline-icon6"
                loading="lazy"
              />
          <span className="quick-title">WhatsApp</span></a>
          <a href="tel:+919876543210" className="inline-box5">
              <img
                src={phoneImage}
                alt="call"
                className="inline-icon5"
                loading="lazy"
              />
              <span className="quick-title">Call</span>
            </a>
          <a href="#" className="inline-box7">
            <img
                src={instaImage}
                alt="call"
                className="inline-icon7"
                loading="lazy"
              />
              <span className="quick-title">Instagram</span>
          </a>
        </div>

      </address>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Phone or Email" required />
        <textarea rows="4" placeholder="Tell us what’s brewing..." required />
        <button type="submit">Send Message </button>
      </form>
    </div>
  </section>
);

export default memo(ContactSection);