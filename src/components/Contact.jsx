import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'alexandrefaustinoef@outlook.com',
      href: 'mailto:alexandrefaustinoef@outlook.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: '/in/alexandre-faustino-222642207',
      href: 'https://br.linkedin.com/in/alexandre-faustino-222642207',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@alexandrefaustinoc',
      href: 'https://github.com/alexandrefaustinoc',
      color: 'from-gray-600 to-gray-700',
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
    <section id="contact" className="section-padding bg-light-surface dark:bg-dark-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-light-card dark:bg-dark-card p-4 sm:p-5 md:p-6 rounded-lg border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all text-center group"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-lg bg-gradient-to-br ${contact.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">{contact.icon}</div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{contact.label}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm break-words">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <motion.a
            href="mailto:alexandre.faustino@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg hover:shadow-lg transition-all font-medium text-base sm:text-lg"
          >
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

