import React, { useEffect, useState } from 'react';
import './Contact.css';

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const fetchContacts = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/contacts');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8080/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', email: '', message: '' });
    fetchContacts();
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>

      <h3>Submitted Contacts</h3>
      <div className="contact-list">
  {contacts.map((c) => (
    <div className="contact-card" key={c.id}>
      <p><strong>{c.name}</strong> ({c.email})</p>
      <p>{c.message}</p>
      <p className="timestamp">
        Submitted on: {new Date(c.submittedAt).toLocaleString()}
      </p>
    </div>
  ))}
</div>
    </div>
  );
}

export default Contact;
