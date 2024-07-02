export const headerSection: string[] = [
  'education',
  'experience',
  'certifications',
  'skills',
  'research',
  'rewards',
  'projects',
  'volunteering',
]

export type EducationInfo = {
  university: string
  degree: string
  major: string
  graduationDate: string
}

export const EducationInformation: EducationInfo[] = [
  {
    university: 'Auburn University',
    degree: 'Ph.D.',
    major: 'Computer Science',
    graduationDate: 'Expected in 05/2026',
  },
  {
    university: 'Auburn University',
    degree: 'Master of Science',
    major: 'Cybersecurity',
    graduationDate: '05/2024',
  },
  {
    university: 'Bauman Moscow State Technical University',
    degree: 'Bachelors of Science',
    major: 'Computer Science',
    graduationDate: '05/2022',
  },
]

export type ExperienceInfo = {
  position: string
  company: string
  locatoin: string
  dates: string
  contributions: string[]
}

export const ExperienceInformation: ExperienceInfo[] = [
  {
    position: 'Security Research Fellow',
    company: 'Auburn University',
    locatoin: 'Auburn, AL',
    dates: '08/2022 - Current',
    contributions: [
      'Engaged in research within the field of cybersecurity with a specific focus on security protocols and IoT.',
      'Found a vulnerability in the network protocol of one of the 3D printers using Wireshark and Nmap.',
      'Enumerated many attack vectors in a typical IoT environment for a research paper.',
      'Found a minor bug in OpenSSL version 3.1.2 debugging the library using GDB and emulated the TLS handshake environment using OpenSSL client and server.',
    ],
  },
  {
    position: 'Cybersecurity Engineer',
    company: 'Bastion Tech',
    locatoin: 'Moscow, Russia',
    dates: '08/2019 - 02/2020',
    contributions: [
      'Developed a network and OS tracking tool to protect valuable assets from IP theft on Linux & Windows.',
      "Developed and integrated a honeypot for the web service security systems to observe threat actors' behavior.",
    ],
  },
  {
    position: 'Senior Software Engineer',
    company: 'Waves',
    locatoin: 'Dubai, UAE',
    dates: '09/2021 - 08/2022',
    contributions: [
      'Implemented a robust monitoring system in Golang for blockchain nodes, allowing the early detection of suspicious activities and preventing potential financial losses.',
      "Found a critical vulnerability in the blockchain protocol allowing clients to withdraw assets they don't have.",
      'Identified and resolved minor security issues in application logic preventing blockchain forks and financial losses.',
      'Fixed multiple blockchain-specific bottlenecks and improved the network performance by approximately 15%.',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Waves',
    locatoin: 'Dubai, UAE',
    dates: '08/2020 - 09/2021',
    contributions: [
      'Implemented zero-knowledge (ZK) verification functions to bolster the security and privacy of the blockchain.',
      'Integrated the Ethereum Eco-System into the blockchain to expand the reach of the network.',
      'Enhanced test coverage to ensure quality assurance resolving vulnerabilities.',
      'Automated the installation of the node and its dependencies using Bash scripting.',
      'Found 10+ bugs in Waves-specific smart contracts language.',
    ],
  },
  {
    position: 'Software Developer',
    company: 'VK',
    locatoin: 'Moscow, Russia',
    dates: '02/2020 - 08/2020',
    contributions: [
      "Developed a 3rd party app for the Calendar to automate the search of the optimal time that accommodates all event participants and integrated voice support enhancing the user's experience.",
    ],
  },
]

export type CertificationInfo = {
  name: string
  hasLink: boolean
  link?: string
  organization: string
  date: string
}

export const CertificationsInformation: CertificationInfo[] = [
  {
    name: 'OSCP (Offensive Security Certified Professional)',
    hasLink: true,
    link: 'https://www.credential.net/9fe711bb-c740-4721-9a02-07935b3a0c72',
    organization: 'OffSec',
    date: '2024',
  },
  {
    name: 'CC (Certified in Cybersecurity)',
    hasLink: true,
    link: 'https://www.credly.com/badges/06318b6a-de10-468c-b4b5-1c8f6669d187/linked_in_profile)',
    organization: '(ICS)^2',
    date: '2023',
  },
  {
    name: 'System Architect',
    hasLink: false,
    organization: 'VK Education',
    date: '2021',
  },
]

export type SkillsInfo = {
  skillsGroup: string
  skills: string[]
}

export const SkillsInformation: SkillsInfo[] = [
  {
    skillsGroup: 'Programming Languges',
    skills: ['C/C++', 'Golang', 'Python', 'Bash', 'Rust', 'SQL'],
  },
  {
    skillsGroup: 'Cybersecurity Skills',
    skills: [
      'Application Security',
      'Reverse Engineering (IDA, Ghydra)',
      'Incident Response',
      'Security Audits & Risk Analysis',
      'Malware Analysis (Static and Dynamic)',
      'Penetration Testing (kali, burp suite, nmap, john, nessus, metasploit)',
      'Applied Cryptography',
      'Security Protocols (SSL/TLS)',
      'Forensics (wiresharks, autopsy, volatility)',
    ],
  },
  {
    skillsGroup: 'Systems & Network Administration',
    skills: [
      'Active Directory',
      'Operating Systems Administration (Unix & Windows)',
      'Cloud Architecture',
      'Network Security (VPNs, IDS/IPS)',
    ],
  },
]

export type ResearchInfo = {
  name: string
  hasLink: boolean
  link?: string
  ongoing: boolean
}

export const ResearchInformation: ResearchInfo[] = [
  {
    name: 'Sanitizing stenographic channels in STL files, ACM CODASPY 2024',
    hasLink: true,
    link: 'https://arxiv.org/pdf/2404.05106',
    ongoing: false,
  },
  {
    name: 'How to hack computers from a 3D printer',
    hasLink: false,
    ongoing: true,
  },
  {
    name: 'Watermarking 3D printer files through entanglement',
    hasLink: false,
    ongoing: true,
  },
]

export type RewardsInfo = {
  name: string
  organization: string
  date: string
}

export const RewardsInformation: RewardsInfo[] = [
  {
    name: "Outstanding Master's Student Award",
    organization: 'Auburn University',
    date: '03/2024',
  },
  {
    name: '1th place, CyberFire, CTF',
    organization: 'Auburn, AL',
    date: '08/2022',
  },
  {
    name: '7th place, Hack.Moscow v3.0',
    organization: 'International hackathon in Moscow',
    date: '10/2019',
  },
]

export type ProjectsInfo = {
  name: string
  hasLink: boolean
  link?: string
  date: string
  description: string[]
}

export const ProjectsInformation: ProjectsInfo[] = [
  {
    name: 'Secure Cloud Computing',
    hasLink: false,
    date: '2024',
    description: [
      'Linux System Admin / OpenStack',
      'Project Scope: Set up multiple virtual machines in OpenStack to be used to emulate a secure data center environment. Some of the required setup included setting up NAT via iptables, NTP, and a DNS server and bridges on each of the other nodes with one ETH device and one end of a veth pair as ports.',
      'Tools: ntpd, iptables, bridge-utils, ip, ifconfig, vi, docker, ceph, Ansible, OpenStack',
    ],
  },
  {
    name: 'Steganography Tool',
    hasLink: true,
    link: 'https://github.com/AM-security/STL-channels-encoder',
    date: '2023',
    description: [
      'Hacking Tools / Python',
      'Project Scope: Create a library allowing hiding information inside STL files. Support inserting and extracting any export type of information. The encoded information must be undetectable.',
    ],
  },
]

export type VolunteeringInfo = {
  position: string
  organization: string
  dates: string
  description: string
}

export const VolunteeringInformation: VolunteeringInfo[] = [
  {
    position: 'Cybersecurity Mentor',
    organization: 'Microsoft TEALS',
    dates: '09/2023 - 05/2024',
    description:
      'Helped students to get hands on experience in cybersecurity for their future career, Teaching',
  },
  {
    position: 'Software Engineering Mentor',
    organization: 'VK Education Program',
    dates: '09/2020 - 08/2021',
    description:
      'Helped 20+ students to start their career in C++., Performing code-review, Teaching',
  },
]
