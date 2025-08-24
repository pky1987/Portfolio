'use client';

import { Code, Brain, Shield, Sparkles } from 'lucide-react';

interface NavigationProps {
  onNavigate?: () => void;
  className?: string;
}

export default function Navigation({ onNavigate, className = '' }: NavigationProps) {
  const navItems = [
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Skills', href: '#skills', icon: Brain },
    { name: 'About', href: '#about', icon: Sparkles },
    { name: 'Contact', href: '#contact', icon: Shield },
  ];

  const handleClick = (href: string) => {
    if (onNavigate) onNavigate();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={className}>
      <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <button
                onClick={() => handleClick(item.href)}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-300 transition-colors group"
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
                <div className="h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 w-0 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}