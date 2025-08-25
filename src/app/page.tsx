import Hero from '@/components/Hero'
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

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

      <section id="about" className="py-20 px-4 max-w-4xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-purple-400">Me</span>
        </h2>
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            I&apos;m a <span className="text-purple-300 font-semibold">Protocol Architect</span> specializing in 
            building verifiable, intelligent systems that operate in trust-minimized environments. 
            My work sits at the intersection of AI, blockchain, and security.
          </p>
          <p>
            I&apos;ve worked on various projects that involve smart contracts, zero-knowledge proofs, 
            and distributed systems engineering.
          </p>
          <p>
            I architect systems where AI can make decisions and take actions that are cryptographically 
            verifiable and transparent. My expertise spans smart contract development, zero-knowledge proofs, 
            distributed systems engineering, and AI agent design.
          </p>
          <p>
            Currently, I'm focused on the emerging field of zkML (zero-knowledge machine learning) and 
            decentralized AI networks that preserve privacy while providing verifiable computation.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 max-w-2xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get in <span className="text-purple-400">Touch</span>
        </h2>
        <div className="text-center space-y-4">
          <p className="text-xl">Feel free to reach out for collaboration or opportunities</p>
          <div className="flex justify-center space-x-6 pt-6">
            <a href="mailto:prakashyadav.by965@gmail.com" className="text-purple-300 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://linkedin.com/in/prakash-yadav-705775374" className="text-purple-300 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/pky1987" className="text-purple-300 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/yourhandle" className="text-purple-300 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}