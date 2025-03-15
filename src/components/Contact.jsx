import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let missingFields = [];
    if (!form.name.trim()) missingFields.push('Name');
    if (!form.email.trim()) missingFields.push('Email');
    if (!form.message.trim()) missingFields.push('Message');

    if (missingFields.length > 0) {
      setError(`Please enter your ${missingFields.join(', ')} to proceed.`);
      return;
    }

    setError('');
    setLoading(true);
    setSuccessMessage('');

    const updatedMessage = `${form.message}\n\nUser Email: ${form.email}`;

    emailjs
      .send(
        'service_z26pdem',
        'template_w9wg2rc',
        {
          from_name: form.name,
          to_name: 'Maddy',
          from_email: form.email,
          to_email: 'madhuch.0110@gmail.com',
          message: updatedMessage,
        },
        'Oqiuh8Eh5R3spzCNL'
      )
      .then(() => {
        setLoading(false);
        setSuccessMessage('Thank you!\nWill get back to you ASAP');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);

        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' style={{ userSelect: 'none' }}>
      <motion.div variants={slideIn('left', 'between', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {error && <p className='text-red-500 mb-4 text-center'>{error}</p>}

        <form ref={formRef} onSubmit={handleSubmit} className='mt-6 flex flex-col gap-6'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows='6'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className='flex flex-col items-center'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'between', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>

      <AnimatePresence>
        {successMessage && (
          <div className="fixed inset-0 flex items-center justify-center">
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], x: [0, -5, 5, -5, 5, 0], opacity: 1 }}
              exit={{ scale: [1, 1.2, 0], x: [0, 5, -5, 5, -5, 0], opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center"
            >
              <p className="text-2xl font-bold" style={{ color: "#915eff" }}>
                {successMessage.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
