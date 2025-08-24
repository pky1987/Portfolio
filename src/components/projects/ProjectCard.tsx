'use client';

import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects';
import ProjectModal from './ProjectModal'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 group cursor-pointer">
        {/* Project Image */}
        <div 
          className="h-48 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-xs border border-purple-700/50"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-purple-300 hover:text-white transition-colors group"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex space-x-3">
              <a
                href={project.githubUrl}
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.liveUrl}
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}