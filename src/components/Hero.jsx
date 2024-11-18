import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="logo-container"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <img src="/logo.png" alt="ARTISO Logo" className="hero-logo" />
        </motion.div>
        
        <h1>ARTISO</h1>
        <p>L'Art Marocain du Futur</p>
        
        <div className="hero-cta-group">
          <motion.button 
            className="cta-primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(198, 160, 99, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            Découvrir la Collection
          </motion.button>
          
          <motion.button 
            className="cta-secondary"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            Notre Histoire
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero