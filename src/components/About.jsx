import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { resumepdf } from '../assets';

const About = () => {
  const ServiceCard = ({index, title, icon}) =>{
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0,75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Currently, I am developing a framework that enables humans and AI to team up and tackle real-worlds challenges at AI Redefined.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Outside of my full-time committments, I work on developing an efficient learning
        method for deep neural networks that has potential to use of less data, reduce training time, 
        while providing outcome uncertainties vital for informed decision-making.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am pasionate about developing & building decision-making frameworks that  empower stakeholders to make the 
        informed decisions by utilizing all available data. In the AI/ML field, being great at solving problems means
        you need to know a lot of different things.  You have to be good at figuring out solutions to specific problems
        through careful thinking and research.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Also, it's important to know how to train and maintain an AI/ML model on a large scale. 
        This means you need to build a systematic ML infrastructure. 
        Plus, we have to make sure our solutions are easy for people to use. 
        That means we need to design it in a way that's simple and user-friendly.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        To me, this job is like solving one puzzle after another. 
        It makes me want to learn more, take on more jobs, and feel fullfiled about the work I do.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='mt-10 flex flex-row justify-center items-center flex-wrap gap-10'>
        <a href={resumepdf} download target="_blank" rel="noopener noreferrer">
              <button 
                type="button"
                className='violet-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
              >
                  Download My CV
              </button>
        </a>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');