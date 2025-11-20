"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="tf__contact_form tf__contact_page_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="tf__contact_form_imput">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g., John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="tf__contact_form_imput">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="e.g., john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="tf__contact_form_imput">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              placeholder="e.g., +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="tf__contact_form_imput">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g., Digital Marketing Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__contact_form_imput">
            <label>Message:</label>
            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            className="circle_btn circle_btn_2 learn_more_2"
            type="submit"
            disabled={isSubmitting}
          >
            <i className="fx-icon-long-next-arrow" />
            {isSubmitting ? "Sending..." : "Send Your Message"}
          </button>
          {submitSuccess && (
            <p style={{ color: "green", marginTop: "10px" }}>Email sent successfully!</p>
          )}
          {submitError && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Failed to send email. Please try again later.
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
