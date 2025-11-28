import { motion } from 'framer-motion';
import { Code, Database, Search, Settings, Users, Zap } from 'lucide-react';
import { skills } from '../data/skills';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Automação',
      icon: <Zap className="w-8 h-8" />,
      skills: skills.automation,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Testes de API',
      icon: <Code className="w-8 h-8" />,
      skills: skills.api,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Logs & Análise Técnica',
      icon: <Search className="w-8 h-8" />,
      skills: skills.logs,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Banco de Dados',
      icon: <Database className="w-8 h-8" />,
      skills: skills.database,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'DevOps & Ferramentas',
      icon: <Settings className="w-8 h-8" />,
      skills: skills.devops,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Gestão & Liderança',
      icon: <Users className="w-8 h-8" />,
      skills: skills.management,
      color: 'from-red-500 to-rose-500',
    },
  ];

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
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Conhecimentos Técnicos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-accent-primary/50 transition-all"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                <div className="text-white">{category.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-surface rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

