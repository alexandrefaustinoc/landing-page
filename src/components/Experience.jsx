import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code2, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-light-surface dark:bg-dark-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Experiência</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-6 sm:pl-8 pb-8 sm:pb-10 md:pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-5 h-5 sm:w-6 sm:h-6 bg-accent-primary rounded-full border-4 border-light-surface dark:border-dark-surface"></div>

              {/* Content Card */}
              <div className="bg-light-card dark:bg-dark-card p-4 sm:p-5 md:p-6 rounded-lg border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <Briefcase className="w-5 h-5 text-accent-primary" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-semibold text-accent-primary mb-3 sm:mb-4">{exp.role}</h4>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">{exp.description}</p>

                {/* Projects */}
                <div className="mb-6">
                  <h5 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary flex-shrink-0" />
                    Projetos em Destaque
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                    {exp.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: projectIndex * 0.1 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                        <span className="text-sm">{project}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">Tecnologias:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded-full text-xs border border-light-border dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

