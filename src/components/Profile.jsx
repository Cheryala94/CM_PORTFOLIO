import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import profilePic from '../assets/ProfilePic.jpg';
import sathyabamaLogo from '../assets/Sathyabama.png';
// import rtuLogo from '../assets/rtu.png';
import { FaLinkedin } from "react-icons/fa";

const hobbies = [
    { name: 'Coding', icon: '💻' },
    { name: 'Traveling', icon: '🌍' },
    { name: 'Swimming', icon: '🏊' },
    { name: 'Photography', icon: '📷' },
];

const Languages = [
    { name: 'Telugu', icon: 'అ' },
    { name: 'Hindi', icon: 'अ' },
    { name: 'Tamil', icon: 'அ' },
    { name: 'English', icon: 'A' },
    // { name: 'Russian', icon: 'Б' },
];

const education = [
    { name: 'Bachelors from Sathyabama University, Chennai', logo: sathyabamaLogo, url: 'https://www.sathyabama.ac.in/' },
    // { name: 'Masters from Riga Technical University, Riga, Latvia', logo: rtuLogo, url: 'https://www.rtu.lv/' }
];

const Profile = () => {
  return (
    <div className='xl:mt-12 flex flex-col-reverse xl:flex-row overflow-hidden min-h-full w-full' style={{ userSelect: 'none' }}>
      <motion.div
        variants={slideIn('right', 'between', 0.2, 1)}
        className='flex-1 flex justify-center items-center w-full xl:w-1/2'
      >
        <motion.img
          src={profilePic}
          alt='Profile'
          className='w-full h-full max-w-lg max-h-[100vh] rounded-2xl shadow-lg object-cover'
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <motion.div
        variants={slideIn('left', 'between', 0.2, 1)}
        className='flex-1 flex flex-col justify-center items-center bg-black-100 bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl w-full xl:w-1/2'
      >
        <p className={`${styles.sectionSubText} cursor-default`}>A Peek Into My World</p>
        <p className="mt-2 font-bold cursor-default" style={{ fontSize: '50px', color: '#915eff' }}>What Interests Me</p>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 w-full'>
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className='p-2 bg-tertiary rounded-lg flex flex-col items-center justify-center shadow-md shadow-primary cursor-default'
            >
              <span className='text-4xl'>{hobby.icon}</span>
              <p className='text-white font-medium mt-2'>{hobby.name}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 font-bold cursor-default" style={{ fontSize: '50px', color: '#915eff'}}>Education</p>
        <div className='w-full flex flex-col gap-4'>
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className='flex items-center bg-tertiary p-4 rounded-lg shadow-md shadow-primary cursor-pointer'
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(edu.url, '_blank')}
            >
              <img 
                src={edu.logo} 
                alt={edu.name} 
                className='w-12 h-12 rounded-full mr-4' 
              />
              <p className='text-white font-medium'>{edu.name}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 font-bold cursor-default" style={{ fontSize: '32px', color: '#915eff'  }}>Languages Fueling My Journey</p>
        <div className='mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full text-center'>
          {Languages.map((Languages, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className='p-2 bg-tertiary rounded-lg flex flex-col items-center justify-center shadow-md shadow-primary cursor-default'
            >
              <span className='text-4xl'>{Languages.icon}</span>
              <p className='text-white font-medium mt-2'>{Languages.name}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 font-bold cursor-default flex items-center gap-2" style={{ fontSize: '32px', color: '#915eff'}}>
            Scope me out! -
            <a
                href="http://linkedin.com/in/madhu-cheryala-aaa599183"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
                <FaLinkedin size={50} />
            </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Profile, 'profile');
