'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks.',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-light-300 dark:bg-dark-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies,
            I create seamless digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-800/50 hover:-translate-y-1 group"
            >
              <div className="bg-primary-100 dark:bg-primary-900/20 p-3 rounded-full w-fit mb-4 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}