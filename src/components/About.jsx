import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../Constants/index.js';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src = {icon} alt = {title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText} style={{ userSelect: 'none' }}> 
      Introduction</p>
      <h2 className={styles.sectionHeadText} style={{ userSelect: 'none' }}>
        Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[20px] max-w-15xl leading-[30px]" style={{ userSelect: 'none' }}>
    A results-driven .NET Full Stack Developer committed to excellence and innovation. Proficient in C#, React, HTML, CSS, JavaScript, and SQL Server, with expertise in building scalable applications and managing IIS hosting. Skilled in Azure DevOps and CI/CD pipelines to streamline deployments. Adept at leading teams, fostering client relationships, and ensuring timely project delivery. A strategic problem-solver with a keen eye for detail, optimizing performance and security. Strong collaborator in Agile environments, driving efficiency and innovation. Passionate about continuous learning and technological advancement. Dedicated to delivering high-impact solutions aligned with business goals.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10" style={{ userSelect: 'none' }}>
       {services.map((service, index) => (<ServiceCard key={service.title} index = {index} {...service} />))

       }
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")