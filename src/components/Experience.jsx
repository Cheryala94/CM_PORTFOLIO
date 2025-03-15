import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../Constants/index.js';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{ background : '#1d1836', color : '#fff', userSelect: 'none' }}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date = { experience.date }
    iconStyle={{background : experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src = {experience.icon}
        alt = {experience.company_name}
        className='w-[60%] h-[60%] object-contain'/>
      </div>
    }
  >
    <div style={{ userSelect: 'none' }}>
      <h3 className='text-white text-[24px] font-bold cursor-default'>{experience.title}</h3>
      <p className='text-secondary text-[16px] fontsemibold cursor-default' style={{margin: 0}}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2' style={{ userSelect: 'none' }}>
      {experience.points.map((point, index) => (
        <li
        key={`experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider cursor-default'
        >
          {point}
        </li>
      )
    )}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants = {textVariant()} style={{ userSelect: 'none' }}>
        <p className={styles.sectionSubText}>
              What have I done so far</p>
              <h2 className={styles.sectionHeadText}>
                Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col cursor-default' style={{ userSelect: 'none' }}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key = {index}
            experience = {experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")