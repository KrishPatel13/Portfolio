import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => (
  <motion.div className="p-5 my-5 bg-gray-200 rounded-lg"
    initial={{ x: '-100vw' }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
    <form action="https://formspree.io/f/{your_form_id}" method="POST">
      <input className="block w-full p-2 mb-2" type="email" name="email" placeholder="Your email" required />
      <textarea className="block w-full p-2 mb-2" name="message" placeholder="Your message" required></textarea>
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">Send</button>
    </form>
  </motion.div>
);

export default ContactForm;
