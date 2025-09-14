export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  description: string;
  projects: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Blockchain & Web3",
    items: [
      {
        name: "Solidity",
        level: 90,
        description: "Smart contract development with advanced patterns",
        projects: ["Nexus Core", "AMM Protocol", "DeFi Applications"]
      },
      {
        name: "Smart Contract Security",
        level: 90,
        description: "Auditing, formal verification, and vulnerability prevention",
        projects: ["All Blockchain Projects", "Security Audits"]
      },
      {
        name: "ZK-Proofs",
        level: 60,
        description: "Zero-knowledge proof circuits and applications",
        projects: ["Nexus Core", "Privacy Protocols"]
      }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      {
        name: "LangGraph",
        level: 70,
        description: "Multi-agent systems and AI workflow orchestration",
        projects: ["Nexus Core", "AI Agents"]
      },
      {
        name: "Python ML Stack",
        level: 92,
        description: "TensorFlow, PyTorch, Scikit-learn, and MLOps",
        projects: ["AI Models", "Data Pipelines"]
      }
    ]
  },
  {
    category: "Systems Programming",
    items: [
      {
        name: "Java",
        level: 88,
        description: "Object-oriented programming for low-level systems and high-performance applications",
        projects: ["JVM-based Systems", "Networking Tools", "Low-latency Systems"]
      }
    ]
  },
  {
    category: "Android Development",
    items: [
      {
        name: "Kotlin",
        level: 85,
        description: "Modern, concise language for Android apps development",
        projects: ["Android Studio Apps", "Mobile Solutions"]
      }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      {
        name: "React.js",
        level: 92,
        description: "Building dynamic and interactive user interfaces",
        projects: ["Nexus Web App", "E-commerce Platform", "Social Media Dashboard"]
      }
    ]
  },
  {
    category: "Security & Ethical Hacking",
    items: [
      {
        name: "Ethical Hacking",
        level: 80,
        description: "Penetration testing, vulnerability scanning, and exploitation",
        projects: ["Security Audits", "Bug Bounty Programs", "Network Pen Testing"]
      }
    ]
  }
];
