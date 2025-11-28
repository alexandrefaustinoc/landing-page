import { motion } from 'framer-motion';
import { User, Target, Award } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Trajetória & Especialização',
      description: 'Mais de 3 anos de experiência iniciando no suporte técnico e evoluindo para QA. Especializado em testes funcionais, automação (Playwright e Cypress), testes de API e validação de integrações.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Liderança & Organização',
      description: 'Analista de Testes N2 e Líder de QA, responsável pela organização, priorização e direcionamento técnico das entregas de qualidade, garantindo processos eficientes e colaboração entre áreas.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Compromisso com Qualidade',
      description: 'Foco em clareza, comunicação, melhoria contínua e entrega de valor real. Objetivo de tornar processos mais eficientes, reduzir falhas e contribuir para produtos estáveis e bem construídos.'
    },
  ];

  return (
    <section id="about" className="section-padding bg-light-surface dark:bg-dark-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Sobre Mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start md:items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sou um profissional da área de tecnologia com mais de 3 anos de experiência atuando em suporte, análise funcional e Qualidade de Software. Hoje trabalho como <span className="text-accent-primary font-semibold">Analista de Testes N2</span> e também lidero o time de QA, sendo responsável pela organização, priorização e direcionamento técnico das entregas de qualidade dentro da empresa.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Minha trajetória começou no suporte técnico, onde desenvolvi um olhar atento para o comportamento do usuário e para a importância de um software confiável. Essa base despertou minha paixão por QA e me motivou a me especializar em testes funcionais, automação (Playwright e Cypress), testes de API e validação de integrações entre sistemas.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Acredito que qualidade é um compromisso diário. Por isso, atuo sempre com foco em clareza, comunicação, melhoria contínua e entrega de valor real para o usuário e para o produto. Meu objetivo é tornar processos mais eficientes, reduzir falhas, fortalecer a colaboração entre áreas e contribuir para produtos cada vez mais estáveis e bem construídos.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Se você deseja alguém comprometido com excelência, evolução constante e resultados consistentes, estou pronto para ajudar.
            </p>
          </motion.div>

          {/* Highlights */}  
          <motion.div variants={itemVariants} className="space-y-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-light-card dark:bg-dark-card p-4 sm:p-6 rounded-lg border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent-primary flex-shrink-0 mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

