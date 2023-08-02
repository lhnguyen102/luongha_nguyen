import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE,
      {
        from_name: form.name,
        to_name: 'Luong-Ha',
        from_email: form.email,
        to_email: 'luongha.nguyen@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUB_KEY,
    ).then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong')
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <div className='flex-[1] bg-black-100 p-8 rounded-2xl'
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <p className={styles.sectionHeadText}>Contact</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Type your name"
              className="bg-teriary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Type your email"
              className="bg-teriary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message"
              className="bg-teriary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className='violet-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

    </div>
    
  )
}

export default SectionWrapper(Contact, "contact");