'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Leading development of enterprise applications using modern technologies.',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2021',
    description: 'Developed responsive web applications and implemented UI/UX designs.',
  },
  {
    title: 'Software Engineer',
    company: 'Startup Inc',
    period: '2017 - 2019',
    description: 'Built and maintained various web applications and services.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-2 mb-4 cursor-pointer rounded-lg shadow-lg bg-white dark:bg-dark-100 hover:bg-primary-100 dark:hover:bg-primary-800/50 hover:-translate-y-1"
            >
              <div className="flex-grow p-6 py-4 ">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-2">
                  <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}