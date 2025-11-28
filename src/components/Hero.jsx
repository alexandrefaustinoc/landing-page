import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-20 sm:pt-24 md:pt-28 relative">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-1">
              <div className="w-full h-full rounded-full bg-light-card dark:bg-dark-card flex items-center justify-center overflow-hidden">
                {!imageError ? (
                  <img 
                    src="/profile-photo.jpg" 
                    srcSet="/profile-photo.jpg 1x, /profile-photo.jpg 2x"
                    alt="Alexandre Faustino" 
                    className="w-full h-full object-cover rounded-full profile-image"
                    loading="eager"
                    decoding="async"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-bold text-white">
                    AF
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
            >
              QA Técnico & Automação
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8"
            >
              Especialista em APIs, Logs e Qualidade ponta a ponta
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Líder de QA com experiência em testes manuais, automatizados e escrita de casos de teste, 
              atuando em produtos complexos como sistemas financeiros, plataformas de apostas e sistema de gerenciamento clínico e hospitalar.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://br.linkedin.com/in/alexandre-faustino-222642207"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors font-medium text-sm sm:text-base"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/alexandrefaustinoc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-light-card dark:bg-dark-card text-gray-900 dark:text-white border border-light-border dark:border-dark-border rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors font-medium text-sm sm:text-base"
              >
                <Github size={20} />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

