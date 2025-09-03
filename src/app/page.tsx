import Hero from '@/components/sections/Hero'
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';
import Skills from '@/components/sections/Skills'
import About from '@/components/sections/About'
import ContactWrapper from '@/components/sections/ContactWrapper'
import Footer from '@/components/layout/Footer'
import { audits } from '@/data/audit';
import AuditCard from '@/components/projects/AuditCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="audits" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Security <span className="text-orange-400">Audits</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audits.map((audit) => (
            <AuditCard key={audit.id} audit={audit} />
          ))}
        </div>
      </section>

       <Skills />
       <About />
       <ContactWrapper />
      <Footer />
    </main>
  );
}
