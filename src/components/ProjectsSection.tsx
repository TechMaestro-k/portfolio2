import { Github, ExternalLink } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
    title: 'AlgoVerse',
    description:
      'A content-driven platform for in-depth DSA explanations covering 50+ problems. Features code snippets, visual diagrams, and step-by-step breakdowns. Real-time algorithm visualizer supporting 15+ sorting and graph algorithms with customizable speed and size controls.',
    tags: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'C++',
    ],
    githubUrl: 'https://github.com/TechMaestro-k/AlgoVerse',
    liveUrl: 'https://github.com/TechMaestro-k/AlgoVerse',
  },
  {
    title: 'PennyWise',
    description:
      'A full-stack MERN personal finance tracker with secure JWT authentication and MongoDB storage. Built Express RESTful APIs and a responsive React dashboard for real-time tracking, budget alerts, multi-account support, and analytics.',
    tags: [
      'React.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
    ],
    githubUrl: 'https://github.com/TechMaestro-k/PennyWise-ExpenseTracker',
    liveUrl: 'https://github.com/TechMaestro-k/PennyWise-ExpenseTracker',
  },
  {
    title: 'ByteScout',
    description:
      'A fast, modular file search engine built in C++ using tokenization, indexing, and relevance scoring. Utilizes tries and hash maps for relevance matching and directory traversal in a terminal-driven environment on Linux.',
    tags: ['C++', 'Linux', 'System APIs', 'Data Structures'],
    githubUrl: 'https://github.com/TechMaestro-k/ByteScout-FileSearchEngine',
    liveUrl: 'https://github.com/TechMaestro-k/ByteScout-FileSearchEngine',
  },
  {
    title: 'GreenSetu',
    isNew: true,
    description:
      'A full-stack Web3 supply chain verification platform on Algorand. An x402 AI agent autonomously pays for and verifies supply chain data integrity via micropayments, with ASA batch minting, immutable on-chain checkpoints, and tokenized carbon credits for sustainable farmers.',
    tags: [
      'Next.js',
      'TypeScript',
      'Algorand',
      'TealScript',
      'Node.js',
      'x402',
    ],
    githubUrl: 'https://github.com/TechMaestro-k/GreenSetu',
    liveUrl: 'https://greensetu-chi.vercel.app/',
  },
  {
    title: 'ChessGame',
    description:
      'A fully functional Player vs Player chess game built from scratch in C++ using SFML. Features complete move validation, check/checkmate/stalemate detection, turn management, and an interactive GUI with piece highlighting.',
    tags: ['C++', 'SFML', 'OOP', 'Game Dev'],
    githubUrl: 'https://github.com/TechMaestro-k/ChessGame',
    liveUrl: 'https://kushagra-119.itch.io/chessgame',
  },
  {
    title: 'Password Generator',
    description:
      'A sleek random password generator with customizable length and character options. Features one-click copy to clipboard, strength indicator, and a clean responsive UI built with vanilla HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/TechMaestro-k/Password-Generator',
    liveUrl: 'https://github.com/TechMaestro-k/Password-Generator',
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible pt-6 pb-12 md:py-0 snap-x snap-mandatory scrollbar-hide">
      {projects.map((project) => (
        <div
          key={project.title}
          onMouseEnter={playHover}
          className="group relative border-2 border-black p-6 flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white min-w-[290px] w-[85vw] md:w-auto md:min-w-0 snap-start"
        >
          {'isNew' in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12 group-hover:rotate-6 transition-transform">
              NEW
            </div>
          )}
          <div>
            <h3 className="text-2xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
