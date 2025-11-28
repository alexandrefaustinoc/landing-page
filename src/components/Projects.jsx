import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Projetos em Destaque</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-light-card dark:bg-dark-card p-4 sm:p-5 md:p-6 rounded-lg border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg">
                  <Folder className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-2">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-accent-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-accent-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 sm:mb-4 flex-grow">{project.description}</p>

              {/* Category */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-dark-surface text-accent-primary rounded-full text-xs border border-light-border dark:border-dark-border">
                  {project.category}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-600 dark:text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

