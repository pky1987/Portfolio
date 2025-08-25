'use client';

import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Shield, Zap, Target, Globe } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import GradientText from '../ui/GradientText';

const principles = [
  {
    icon: Code2,
    title: "Systems Thinking",
    description: "Architecting complex systems with attention to interactions between components"
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Automation",
    description: "Leveraging AI to create systems that learn, adapt, and make decisions autonomously"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Building with security as a foundational principle, not an afterthought"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for efficiency and scalability in resource-constrained environments"
  },
  {
    icon: Target,
    title: "Verifiability",
    description: "Creating systems whose behavior can be cryptographically verified and trusted"
  },
  {
    icon: Globe,
    title: "Decentralization",
    description: "Designing resilient systems that eliminate single points of failure and control"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <GradientText>Me</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I architect and build the next generation of intelligent, verifiable systems 
            that operate at the intersection of blockchain and artificial intelligence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">My Philosophy</h3>
              <div className="space-y-6 text-gray-300">
                <p>
                  I believe the future of technology lies in creating systems that are not just 
                  intelligent but also verifiable and trustless. My work focuses on combining 
                  AI's predictive power with blockchain's trust guarantees to create a new 
                  paradigm of decentralized intelligence.
                </p>
                <p>
                  With expertise spanning smart contract development, zero-knowledge proofs, 
                  and AI systems, I'm uniquely positioned to build solutions that address 
                  the fundamental challenges of trust, transparency, and automation in 
                  digital systems.
                </p>
                <p>
                  My approach is grounded in rigorous engineering principles, security-first 
                  design, and a deep understanding of both theoretical concepts and practical 
                  implementation challenges.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection 
            delay={0.2}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-purple-300">Focused on</div>
                    <div className="text-white font-semibold">Verifiable AI Systems</div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-purple-500/30 border-t-purple-500"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-purple-400 transition-colors duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{principle.title}</h4>
                  <p className="text-gray-300">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}