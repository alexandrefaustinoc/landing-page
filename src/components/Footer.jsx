import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/alexandrefaustino',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/alexandrefaustino',
      label: 'GitHub',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:alexandre.faustino@example.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-8">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Alexandre Faustino. Todos os direitos reservados.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-accent-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Made with */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            Feito com <span className="text-accent-primary">React</span> + <span className="text-accent-primary">TailwindCSS</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

