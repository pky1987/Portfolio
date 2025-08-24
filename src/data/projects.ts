export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  features: string[];
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Core - Verifiable AI Network",
    description: "Decentralized network for verifiable AI execution with ZK-proofs",
    longDescription: "A distributed system that allows users to submit AI tasks to nodes that return results with cryptographic proof of correct execution. Combines blockchain trust with AI capabilities through zk-SNARK verification.",
    techStack: ["Rust", "Elixir", "Solidity", "ZK-Proofs", "Next.js", "LangGraph"],
    githubUrl: "https://github.com/pky1987/nexus-core",
    liveUrl: "https://nexus-core.vercel.app",
    imageUrl: "/images/projects/nexus-core/architecture.png",
    features: [
      "ZK-proof verification of AI model execution",
      "Distributed node network with economic incentives",
      "Real-time result verification on blockchain",
      "Cryptographic guarantees of correctness"
    ],
    challenges: [
      "High computational overhead for ZK-proof generation",
      "Coordinating distributed nodes reliably",
      "Preventing malicious node behavior",
      "Gas optimization for on-chain verification"
    ],
    solutions: [
      "Optimized circuit design using halo2 and circom",
      "Elixir/OTP supervision trees for fault tolerance",
      "Staking and slashing mechanisms for node security",
      "Batch verification and layer 2 solutions"
    ]
  },
  {
    id: 2,
    title: "Advanced AMM Protocol",
    description: "High-efficiency automated market maker with advanced features",
    longDescription: "A complete DeFi implementation of constant product market maker protocol with liquidity pooling, swap mechanisms, and advanced price calculation algorithms. Includes extensive testing and security audits.",
    techStack: ["Solidity", "Hardhat", "React", "TypeScript", "Web3.js"],
    githubUrl: "https://github.com/pky1987/amm-xyk",
    liveUrl: "https://amm-demo.vercel.app",
    imageUrl: "/images/projects/amm-xyk/dashboard.png",
    features: [
      "Constant product formula (x*y=k) implementation",
      "Liquidity provider token minting/burning",
      "Impermanent loss protection mechanisms",
      "Advanced price impact calculations"
    ],
    challenges: [
      "Preventing flash loan attacks",
      "Optimizing gas costs for frequent trades",
      "Handling decimal precision in Solidity",
      "Front-running protection"
    ],
    solutions: [
      "Time-weighted average price (TWAP) oracles",
      "Gas-efficient contract architecture",
      "Fixed-point arithmetic libraries",
      "Commit-reveal schemes for trade execution"
    ]
  },
  {
    id: 3,
    title: "Promptopia - AI Prompt Marketplace",
    description: "Full-stack platform for discovering and sharing AI prompts",
    longDescription: "A responsive web application that allows users to discover, create, and share effective prompts for various AI models. Features user authentication, search, and social sharing capabilities.",
    techStack: ["Next.js", "NextAuth", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/pky1987/promptopia",
    liveUrl: "https://promptopia-pky.vercel.app",
    imageUrl: "/images/projects/promptopia/dashboard.png",
    features: [
      "User authentication and profile management",
      "Advanced search and filtering system",
      "Social features: likes, comments, sharing",
      "Responsive design with modern UI/UX"
    ],
    challenges: [
      "Real-time search with complex filters",
      "Database optimization for high read/write",
      "Social feature scalability",
      "SEO optimization for dynamic content"
    ],
    solutions: [
      "Elasticsearch integration for search",
      "MongoDB indexing and query optimization",
      "Redis caching for social features",
      "Next.js SSG and ISR for SEO"
    ]
  }
];