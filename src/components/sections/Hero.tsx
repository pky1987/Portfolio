'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Shield, Sparkles,Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Protocol <span className="text-purple-400">Architect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Building verifiable, intelligent systems at the intersection of 
            <span className="text-purple-300 font-medium"> AI </span>
            and
            <span className="text-blue-300 font-medium"> Blockchain</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Code, label: 'Smart Contracts' },
            { icon: Brain, label: 'AI Systems' },
            { icon: Shield, label: 'Security' },
            { icon: Sparkles, label: 'ZK-Proofs' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20"
            >
              <item.icon className="w-5 h-5 text-purple-300" />
              <span className="text-gray-200 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            View Projects
          </a>
          <a
            href="https://github.com/pky1987"
            className="px-8 py-4 border border-purple-400 text-purple-300 rounded-lg font-medium hover:bg-purple-950 transition-all duration-300 transform hover:scale-105"
          >
            GitHub Profile
          </a>
          <a
          href="/Prakash_Yadav_Resume.pdf" target="_blank"
          className="px-6 py-3 border border-purple-400 text-purple-300 rounded-lg hover:bg-purple-950 transition-all">
          <Download className="w-4 h-4 mr-2 inline" />View Resume</a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-300 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}