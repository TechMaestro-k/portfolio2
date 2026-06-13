import {
  Code2,
  Server,
  Database,
  Cpu,
  Blocks,
  Wrench,
  Box,
  Trophy,
  GraduationCap,
} from 'lucide-react';
import SectionBlock from './SectionBlock';
import GithubGraph from './GithubGraph';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5" />,
    color: 'bg-blue-50',
    skills: [
      'C/C++',
      'Go',
      'Python',
      'JavaScript',
      'TypeScript',
      'Solidity',
    ],
  },
  {
    title: 'Frontend',
    icon: <Code2 className="w-5 h-5" />,
    color: 'bg-green-50',
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend & Systems',
    icon: <Server className="w-5 h-5" />,
    color: 'bg-orange-50',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Redis',
      'REST APIs',
      'Distributed Systems',
      'JWT Auth',
    ],
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    color: 'bg-teal-50',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'MySQL',
      'Firebase',
    ],
  },
  {
    title: 'AI & Automation',
    icon: <Cpu className="w-5 h-5" />,
    color: 'bg-purple-50',
    skills: [
      'LangChain',
      'LangGraph',
      'LLM Pipelines',
      'AI Agents',
      'n8n',
      'Zapier',
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: <Blocks className="w-5 h-5" />,
    color: 'bg-indigo-50',
    skills: [
      'Algorand',
      'TealScript',
      'Ethers.js',
      'Hardhat',
      'Foundry',
      'Ethereum',
      'Polygon',
    ],
  },
  {
    title: 'Tools & Ecosystem',
    icon: <Wrench className="w-5 h-5" />,
    color: 'bg-gray-50',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Linux',
      'Valgrind',
      'Postman',
      'VS Code',
      'Remix IDE',
      'npm',
    ],
  },
  {
    title: 'Competitive Programming',
    icon: <Trophy className="w-5 h-5" />,
    color: 'bg-yellow-50',
    skills: [
      'LeetCode 1900+ (Knight)',
      'Codeforces 1200+',
      '650+ Problems',
      '10+ Hackathons',
      'DSA',
      'Dynamic Programming',
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionBlock id="skills" title="Technical Arsenal">
      <div className="flex flex-col gap-16">
        {/* Skill Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group border-2 border-black p-6 bg-white hover:-translate-y-1 transition-all duration-300 relative"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 border-2 border-black bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 border border-black/10 text-[11px] font-mono hover:border-black hover:bg-black/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* CS Fundamentals — full-width style card */}
          <div className="group border-2 border-black p-6 bg-white hover:-translate-y-1 transition-all duration-300 relative md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 border-2 border-black bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide">
                CS Fundamentals
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Data Structures & Algorithms',
                'Operating Systems',
                'Object-Oriented Programming',
                'System Design',
                'DBMS',
                'Computer Networks',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 border border-black/10 text-[11px] font-mono hover:border-black hover:bg-black/5 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Final "Load" Card */}
          <div className="border-2 border-black p-6 bg-black/5 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity">
            <Box className="w-8 h-8 mb-4 opacity-20" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium">
              {'// Always Learning...'}
            </p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="w-full pt-12 border-t-4 border-black border-dashed">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live Pulse
              </h3>
              <div className="h-[2px] flex-1 bg-black/10"></div>
            </div>
            <GithubGraph />
          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default SkillsSection;
