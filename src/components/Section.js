import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <motion.section className="p-5 my-5 bg-gray-200 rounded-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
    {children}
  </motion.section>
);

export default Section;
