import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.scss'

const Feed = () => {
  return (
    <motion.div 
    className="Teste"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration:0.2} }}
    >

        <h1>Test Feed Page</h1>
        <ul>
          <li><h3><Link to="/signup" className='link'>SignUp</Link></h3></li>
          <li><h3><Link to="/signIn" className='link'>SignIn</Link></h3></li>
        </ul>

    </motion.div>
  )
}

export default Feed