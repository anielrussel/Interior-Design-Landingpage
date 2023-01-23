import React from 'react'
import './contact.css'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <><div className='contact'>
          {/*header start */}
          <div className="contact-header">
              <div className="contact-header-text">
                  <h1>Contact Us</h1>
                  <p>
                      It is a long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                  </p>
              </div>
          </div>
          <div className="contact-header-forms">
              <div className="forms-name">
                  <div className="firstName">
                      <label>First Name</label>
                      <input type={'text'} placeholder='First Name' />
                  </div>
                  <div className="lastName">
                      <label>Last Name</label>
                      <input type={'text'} placeholder='Last Name' />
                  </div>
              </div>
              <div className="forms-details">
                  <label>Email</label>
                  <input type={'email'} placeholder='Email Address' />

                  <label>Phone Number</label>
                  <input type={'number'} placeholder='Phone Number' />
              </div>
              <div className="forms-message">
                  <label>Message</label>
                  <textarea placeholder='Your Message..' />
              </div>
              <button>Send Message</button>
          </div>
          {/*header end */}

          {/*location start */}
          <div className="contact-location">
              <p>LOCATION</p>
              <hr></hr>
              <div className="contact-location-text">
                  <div className="contact-location-text-column1">
                      <h1>Visit Our Stores</h1>
                      <p>Find us at these locations.</p>

                      <h2>Email</h2>
                      <p>dananz@gmail.com</p>

                      <h2>Phone</h2>
                      <p>+62 815 002 1000</p>
                  </div>

                  <div className="contact-location-text-column2">
                      <div className="manila">
                          <h2>Manila</h2>
                          <p>Customize your interior design into a dream place with the best designers and quality furniture.
                              We try our best to fulfill your expectations.</p>
                      </div>
                      <div className="tokyo">
                          <h2>Tokyo</h2>
                          <p>Customize your interior design into a dream place with the best designers and quality furniture.
                              We try our best to fulfill your expectations.</p>
                      </div>
                      <div className="jakarta">
                          <h2>Jakarta</h2>
                          <p>Customize your interior design into a dream place with the best designers and quality furniture.
                              We try our best to fulfill your expectations.</p>
                      </div>
                      <div className="seoul">
                          <h2>Seoul</h2>
                          <p>Customize your interior design into a dream place with the best designers and quality furniture.
                              We try our best to fulfill your expectations.</p>
                      </div>
                  </div>
              </div>
          </div>
          {/*location end */}
      </div><div className="contact-footer">
              <Footer />
          </div></>
  )
}

export default Contact