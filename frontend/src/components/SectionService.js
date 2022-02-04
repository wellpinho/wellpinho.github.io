import './session-service.css'
import { motion } from 'framer-motion'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faGraduationCap, faImages } from '@fortawesome/free-solid-svg-icons'
import { ScrollReveal } from '../components/Animation'
import { useScroll } from '../hooks/UseScroll'

function SectionService() {
  const [element, controls] = useScroll()

  return (  
    <motion.div 
      className="service"
      variants={ScrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <div className="image">
        <img src="./assets/rocket.gif" alt="" />
      </div>

      <div className="description">
        <h2>Things I do</h2>
        <div className="" id="cards-list">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faLaptopCode} size="4x" />
              <h3>Portfolio</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faGraduationCap} size="4x" />
              <h3>courses</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faImages} size="4x" />
              <h3>Hobbies</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faGithubSquare} size="4x"/>
              <h3>Github</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SectionService;
