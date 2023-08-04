import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { resumepdf } from '../assets';
import { Link } from 'react-router-dom';

const About = () => {
  const ServiceCard = ({index, title, icon}) =>{
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", 0.1 * index, 0.1)}
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
        variants={fadeIn("","", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Currently,  I'm working on a framework that helps humans and AI work together to solve real-world problems at <Link to="https://ai-r.com" target="_blank" rel="noopener noreferrer" style={styles.greenLinkStyle}>AI Redefined</Link>.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Outside of my full-time committments, I work on developing an efficient learning
        method for deep neural networks that has potential to use of less data, reduce training time, 
        while providing outcome uncertainties vital for informed decision-making. This work is a collaboration with a research group
        at <Link to="https://miquelflorensa.github.io" target="_blank" rel="noopener noreferrer" style={styles.blueLinkStyle}>BayesWorks</Link>.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am pasionate about developing & building decision-making frameworks that  empower stakeholders to make the 
        informed decisions by utilizing all available data. In the AI/ML field, knowing lots of different things is really important. 
        Finding solutions to specific problems requires careful thought and research.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Also, it's crucial to understand how to train and maintain AI/ML models at scale, which requires a well-structured, 
        general AI/ML infrastructure. Moreover, ensuring the developed solutions are user-friendly means aiming for
         a design that's simple and easy to use.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 0.1)}
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