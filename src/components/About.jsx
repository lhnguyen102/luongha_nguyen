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
        I am an AI/ML app builder with expertise in C/C++, CUDA, Python, and PyTorch.
        I want to build decision-making frameworks that  empower stakeholders to make the 
        informed decisions by utilizing all available data. For this purpose, I am currently working on an efficient learning
        method for deep neural networks that has potential to use of less data, reduce training time, and crucially, 
        provide uncertainties of the outcomes. This aspect of uncertainty is essential for informed decision-making
        processes.
      </motion.p>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        In AI/ML field, being a great problem-solver means you have to know lots of different things. 
        We need to be skilled at finding solutions to specific issues through careful thought and research. 
        It's also important to learn how to train a AI/ML model at scale, 
        and this requires building a systematic ML infrastructure. 
        Additionally, we need to make sure people find our solution easy to use, which means designing it in a way that's 
        simple and user-friendly. This job is like solving one puzzle after another. 
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