import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
    function HOC() {
        const controls = useAnimation();

        useEffect(() => {
            controls.start("hidden");
        }, [controls]);

        return (
            <motion.section
              variants={staggerContainer()}
              initial="hidden"
              animate={controls}
              onViewportEnter={() => controls.start("show")}
              onViewportLeave={() => controls.start("hidden")}
              viewport={{ once: false, amount: 0.25 }}
              className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
