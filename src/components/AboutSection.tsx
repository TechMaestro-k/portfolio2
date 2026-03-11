import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';
import { Github } from 'lucide-react';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm a passionate Software Developer and B.Tech CSE pre-final year
          student at Abdul Kalam Technical University. I bring hands-on
          experience as an <strong>AI Automation Engineer Intern</strong>, where
          I optimized automation pipelines and built intelligent agents using
          LangChain and LangGraph.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I'm an avid <strong>competitive programmer</strong> with a LeetCode
          rating of <strong>1900+ (Knight Badge, Top 5% globally)</strong> and 650+ problems solved. I've
          attended <strong>10+ hackathons</strong>, been a <strong>finalist in 2</strong> and <strong>semi-finalist in 3</strong>. I
          thrive on building full-stack applications using the MERN stack and
          exploring AI/ML and blockchain technologies.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          I bring a unique blend of problem-solving skills, development
          expertise, and a genuine enthusiasm for creating impactful software
          solutions. Based in Ghaziabad, India.
        </p>
        <a
          href="https://github.com/TechMaestro-k"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-black bg-white text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
        >
          <Github className="w-4 h-4" />
          <span>View My GitHub</span>
        </a>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
