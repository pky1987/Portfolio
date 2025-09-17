export interface AuditTag {
  name: string;
  color: string;
}

export interface Audit {
  id: number;
  name: string;
  description: string;
  tags: AuditTag[];
  image: string;
  source_code_link: string;
}

export const audits: Audit[] = [
  {
    id: 1,
    name: "Protocol Audit Report-Password Store",
    description: "Independent security audit of a password store contract. Identified a critical vulnerability that would have led to the permanent lock of all user funds.",
    tags: [
      {
        name: "Audit",
        color: "blue-text-gradient",
      },
      {
        name: "High Severity",
        color: "pink-text-gradient",
      },
      {
        name: "Foundry",
        color: "green-text-gradient",
      },
    ],
    image: "/images/audit/security-icon.svg", 
    source_code_link: "https://github.com/pky1987/audit-report/blob/main/report.pdf",
  },
  {
    id: 2,
    name: "PuffyRaffle Security Review-NFT",
    description:"Security audit of an NFT marketplace smart contract. Found reentrancy vulnerabilities and access control issues that could compromise user assets.",
    tags: [
      {
        name: "Security Review",
        color: "orange-text-gradient",
      },
      {
        name: "High Risk",
        color: "yellow-text-gradient",
      },
      {
        name: "NFT",
        color: "purple-text-gradient",
      },
    ],
    image: "/images/audit/dex-icon.svg", // Placeholder, can be updated
    source_code_link: "https://github.com/pky1987/audit-report/blob/main/static_and_manual_report.pdf",
  },
  {
    id: 3,
    name: "T-Swap Audit Report-DEX",
    description: "Comprehensive security assessment of a decentralized exchange protocol. Uncovered multiple medium-risk issues related to oracle manipulation and flash loan attacks.",
    tags: [
      {
        name: "DEX",
        color: "cyan-text-gradient",
      },
      {
        name: "Critical",
        color: "red-text-gradient",
      },
      {
        name: "Liquidity Provider",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/audit/nft-icon.svg", // Placeholder, can be updated
    source_code_link: "https://github.com/pky1987/audit-report/blob/main/t-swap-audit-report.pdf",
  },
  {
    id: 4,
    name: "ThunderLoan Audit Report",
    description: "Comprehensive security assessment of a decentralized flash loan protocol. Uncovered multiple issues related to flash loan attacks.",
    tags: [
      {
        name: "Flash Loan",
        color: "cyan-text-gradient",
      },
      {
        name: "Reward Manipulation",
        color: "red-text-gradient",
      },
      {
        name: "Liquidity Provider",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/audit/nft-icon.svg", // Placeholder, can be updated
    source_code_link: "https://github.com/pky1987/audit-report/blob/main/thunder.pdf",
  },
  {
    id: 5,
    name: "Boss Bridge Audit Report",
    description: "Comprehensive security assessment of a bridge that allows users to deposit tokens, which are held into a secure vault on L1. Users can then mint an equivalent amount of wrapped tokens on L2.",
    tags: [
      {
        name: "Token",
        color: "cyan-text-gradient",
      },
      {
        name: "Vault",
        color: "red-text-gradient",
      },
      {
        name: "Oracle Manipulation",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/audit/nft-icon.svg", 
    source_code_link: "https://github.com/pky1987/audit-report/blob/main/boss-bridge.pdf",
  },
  {
    id: 5,
    name: "Math Masters Audit Report",
    description: "Comprehensive security assessment of math master smart contract through formal verification using Certora Prover and Halmos.",
    tags: [
      {
        name: "Certora",
        color: "cyan-text-gradient",
      },
      {
        name: "Halmos",
        color: "red-text-gradient",
      },
      {
        name: "Formal Verification",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/audit/nft-icon.svg", 
    source_code_link: "https://github.com/pky1987/audit-report/blob/main/math_master.pdf",
  },
];
