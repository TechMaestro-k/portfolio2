import { Github, ExternalLink, FileText, Gamepad2 } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
    title: 'CareLoop',
    isNew: true,
    description:
      'An agentic AI care companion preventing post-discharge hospital readmissions. 3 LangGraph agents fuse clinical entities with 6-dimension SDOH signals to run 30-day WhatsApp check-ins. A dual-model LLM pipeline (Llama 3.3 70B + 3.1 8B) triages replies into 4 severity tiers and auto-escalates red flags to caregivers and doctors.',
    tags: ['FastAPI', 'LangGraph', 'React', 'Supabase', 'Twilio', 'Python'],
    githubUrl: 'https://github.com/TechMaestro-k/CareLoop',
    liveUrl: 'https://www.careloops.tech',
    liveLabel: 'Live Demo',
  },
  {
    title: 'Distributed Job Queue',
    isNew: true,
    description:
      'A horizontally-scalable, at-least-once job queue in Go on Redis, designed for 1M+ jobs/day. Crash-safe recovery requeues jobs from dead workers, with atomic Lua-scripted enqueue/claim, exponential-backoff retries with jitter, dead-letter queues, delayed jobs, and a documented migration path to Redis Cluster.',
    tags: ['Go', 'Redis', 'Lua', 'Docker', 'Distributed Systems'],
    githubUrl: 'https://github.com/TechMaestro-k/Distributed-Job-queue',
    liveUrl:
      'https://github.com/TechMaestro-k/Distributed-Job-queue/blob/main/DESIGN.md',
    liveLabel: 'Design Doc',
    liveIcon: 'doc',
  },
  {
    title: 'GreenSetu',
    description:
      'A full-stack Web3 supply chain verification platform on Algorand. An x402 AI agent autonomously pays for and verifies supply chain data integrity via micropayments, with ASA batch minting, immutable on-chain checkpoints, and tokenized carbon credits for sustainable farmers.',
    tags: ['Next.js', 'TypeScript', 'Algorand', 'TealScript', 'x402'],
    githubUrl: 'https://github.com/TechMaestro-k/GreenSetu',
    liveUrl: 'https://greensetu-chi.vercel.app/',
    liveLabel: 'Live Demo',
  },
  {
    title: 'ChessGame',
    description:
      'A fully functional Player vs Player chess game built from scratch in C++ using SFML, with 100% legal-move accuracy across all 6 piece types. Features check/checkmate/stalemate detection validated across 50+ unit tests, 8 modular OOP classes, and an interactive GUI with piece highlighting.',
    tags: ['C++', 'SFML', 'OOP', 'Game Dev'],
    githubUrl: 'https://github.com/TechMaestro-k/ChessGame',
    liveUrl: 'https://kushagra-119.itch.io/chessgame',
    liveLabel: 'Play It',
    liveIcon: 'game',
  },
  {
    title: 'ByteScout',
    description:
      'A CLI-based file search engine in C++ returning top-k ranked documents per query — a Trie for prefix lookup, hash maps for term-document indexing, and a max-heap for TF-IDF score ranking. Built across 8+ modular classes with a Makefile build, validated for zero memory leaks via Valgrind.',
    tags: ['C++', 'Valgrind', 'Linux', 'Data Structures'],
    githubUrl: 'https://github.com/TechMaestro-k/ByteScout-FileSearchEngine',
  },
  {
    title: 'AlgoVerse',
    description:
      'A content-driven platform for in-depth DSA explanations covering 50+ problems across DP and Graphs. Features code snippets, visual diagrams, step-by-step breakdowns, and a real-time algorithm visualizer supporting 15+ sorting and graph algorithms with customizable speed and size controls.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'C++'],
    githubUrl: 'https://github.com/TechMaestro-k/AlgoVerse',
  },
];

const LiveIcon = ({ type }) => {
  if (type === 'doc') return <FileText className="w-3.5 h-3.5" />;
  if (type === 'game') return <Gamepad2 className="w-3.5 h-3.5" />;
  return <ExternalLink className="w-3.5 h-3.5" />;
};

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible pt-6 pb-12 md:py-0 snap-x snap-mandatory scrollbar-hide">
      {projects.map((project) => (
        <div
          key={project.title}
          onMouseEnter={playHover}
          className="group relative border-2 border-black p-6 flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white min-w-[290px] w-[85vw] md:w-auto md:min-w-0 snap-start"
        >
          {project.isNew && (
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
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
              >
                <LiveIcon type={project.liveIcon} />
                {project.liveLabel || 'Live Demo'}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
