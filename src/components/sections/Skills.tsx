'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Shield, Brain, Database, Cloud } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import GradientText from '../ui/GradientText';

const skillCategories = [
  {
    title: "Blockchain & Web3",
    icon: Code,
    skills: [
      { name: "Solidity", level: 90 },
      { name: "Smart Contract Security", level: 90 },
      { name: "ZK-Proofs", level: 85 },
      { name: "DeFi Protocols", level: 88 },
      { name: "Token Standards", level: 87 },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "LangGraph", level: 88 },
      { name: "TensorFlow/PyTorch/Scikit-Learn", level: 92 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Reinforcement Learning", level: 80 },
      { name: "Computer Vision", level: 82 },
    ]
  },
  {
    title: "Systems Programming",
    icon: Cpu,
    skills: [
      { name: "Rust", level: 90 },
      { name: "Elixir/OTP", level: 87 },
      { name: "Java", level: 83 },
      { name: "Python", level: 85 },
      { name: "Kotlin", level: 88 },
    ]
  },
  {
    title: "Security Engineering",
    icon: Shield,
    skills: [
      { name: "Smart Contract Auditing", level: 91 },
      { name: "Penetration Testing", level: 86 },
      { name: "Cryptography", level: 89 },
      { name: "Formal Verification", level: 84 },
      { name: "Zero-Knowledge Proofs", level: 87 },
    ]
  },
  {
    title: "Data & Infrastructure",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 87 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 83 },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 86 },
      { name: "Azure", level: 82 },
      { name: "CI/CD Pipelines", level: 89 },
      { name: "Terraform", level: 84 },
      { name: "Monitoring & Logging", level: 87 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <GradientText>Expertise</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive skill set spanning blockchain, AI, security, and distributed systems
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <AnimatedSection 
                key={category.title}
                delay={categoryIndex * 0.1}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-400 transition-colors duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-purple-300 text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}