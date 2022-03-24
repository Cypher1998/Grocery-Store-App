import './pagesstaticstyle.scss';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import { toast } from 'react-toastify';
import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import contactImg from '../assets/contact-us.webp';
import {
  contactTextOne,
  contactTextTwo,
  contactTextThree,
  contactTextFour,
} from '../components/utilities/StaticPagesText';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = form;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      toast.error('Fields cannot be empty. Please fill all fields!');
    } else {
      toast.success('Message has been sent successfully. Thank You!');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <SharedPages text="contact us" />
      <div className="myContainer contact">
        <div className="addressDiv">
          <div className="address sharedText">
            <FiMail size={35} style={{ color: 'rgb(16, 185, 129)' }} />
            <h4>Email Us</h4>
            <p>
              <a href="mailto:codedshegzy@gmail.com">codedshegzy@gmail.com</a>{' '}
              {contactTextOne}
            </p>
          </div>
          <div className="address sharedText">
            <BiPhoneCall size={35} style={{ color: 'rgb(16, 185, 129)' }} />
            <h4>Call Us</h4>
            <p>
              <a href="tel:029-00124667">029-00124667</a> {contactTextTwo}
            </p>
          </div>
          <div className="address sharedText">
            <HiOutlineLocationMarker
              size={40}
              style={{ color: 'rgb(16, 185, 129)' }}
            />
            <h4>Location</h4>
            <p>{contactTextThree}</p>
          </div>
        </div>
        <div className="formImg">
          <div className="d-none d-lg-block imageDiv">
            <img src={contactImg} alt="contactImg" />
          </div>
          <div className="supportMsg sharedText">
            <h3>For any support just send your query</h3>
            <p>{contactTextFour}</p>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </div>
              <div className="email">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="message">
                <label>Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Write message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="submit mt-2">
                <Button type="submit" variant="success">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
