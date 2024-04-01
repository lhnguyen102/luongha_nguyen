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
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
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
      <motion.div 
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={textVariant()}
      >
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={fadeIn("","", 0.5, 0.75)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Experienced AI/ML Engineer with 3 years in industry and 4 years in applied research. Specializes in developing AI/ML pipelines,
        from data preprocessing and model development to cloud deployment. Skilled in C++/CUDA, Python, and deep neural networks’ uncertainty modeling. 
        Combines engineering skills with research insights to deliver robust solutions.
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={fadeIn("","", 0.5, 0.75)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Currently,  I'm working on a framework that helps humans and AI work together to solve real-world problems at <Link to="https://ai-r.com" target="_blank" rel="noopener noreferrer" style={styles.greenLinkStyle}>AI Redefined</Link>.
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={fadeIn("","", 0.5, 0.75)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Outside of my full-time commitments, I'm working on developing an efficient learning method for deep neural networks
        that potentially uses less data, reduces training time, and provides outcome uncertainties vital for informed decision-making. 
        This work is a collaboration with a research team at <Link to="https://tagiml.com" target="_blank" rel="noopener noreferrer" style={styles.blueLinkStyle}>BayesWorks</Link>.
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={fadeIn("","", 0.5, 0.75)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am passionate about developing & building tools that help people make informed decisions using all the available data. 
        I'm also keen on creating an AI/ML framework that's not only quick in training and inference but also reliable in its outcomes.
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={fadeIn("","", 0.5, 0.75)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        In the AI/ML field, being a great problem-solver requires a diverse set of skills. For instance, finding solutions to specific problems
        requires careful thought and research. Also, it's crucial to understand how to train and maintain AI/ML models at scale, which requires a well-structured, 
        general AI/ML infrastructure. Moreover, ensuring the developed solutions are user-friendly means aiming for
        a design that's simple and easy to use.
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={fadeIn("","", 0.5, 0.75)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        To me, this job is like solving one puzzle after another. 
        It makes me want to learn more, take on more jobs, and feel fullfilled about the work I do.
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