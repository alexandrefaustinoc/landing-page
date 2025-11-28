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
    <section id="experience" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiência</h2>
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
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-accent-primary rounded-full border-4 border-dark-surface"></div>

              {/* Content Card */}
              <div className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-accent-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <Briefcase className="w-5 h-5 text-accent-primary" />
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-accent-primary mb-4">{exp.role}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                {/* Projects */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-accent-primary" />
                    Projetos em Destaque
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {exp.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: projectIndex * 0.1 }}
                        className="flex items-center gap-2 text-gray-400"
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
                        className="px-3 py-1 bg-dark-surface text-gray-300 rounded-full text-xs border border-dark-border"
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

