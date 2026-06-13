import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import Leetcodecalendar from 'react-leetcode-calendar';

const GithubGraph = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* GitHub Activity */}
      <div className="border-4 border-black p-4 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
        <h3 className="font-mono text-xl font-bold mb-4 border-b-2 border-black pb-2 uppercase tracking-tighter">
          GitHub Activity_
        </h3>
        <div className="flex justify-center overflow-x-auto pb-2">
          <GitHubCalendar
            username="TechMaestro-k"
            colorScheme="light"
            style={{
              fontFamily: 'monospace',
            }}
            theme={{
              light: ['#e5e5e5', '#a3a3a3', '#737373', '#404040', '#171717'],
            }}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
          />
        </div>
        <div className="mt-2 text-right font-mono text-xs text-gray-600">
          {'// contribs over last year'}
        </div>
      </div>

      {/* LeetCode Activity */}
      <div className="border-4 border-black p-4 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
        <h3 className="font-mono text-xl font-bold mb-4 border-b-2 border-black pb-2 uppercase tracking-tighter">
          LeetCode Activity_
        </h3>
        <div className="flex justify-center overflow-x-auto pb-2 font-mono">
          <Leetcodecalendar
            username="savvysolver004"
            graph="default"
            showTitle={false}
            size="medium"
            colors={{
              noActivity: '#e5e5e5',
              activity: ['#a3a3a3', '#737373', '#404040', '#171717'],
              text: '#171717',
              months: '#171717',
              weekdays: '#171717',
              totalCount: '#171717',
              legend: '#171717',
              background: '#ffffff',
              calendarBackground: '#ffffff',
              border: '#ffffff',
              hover: '#404040',
              loading: '#737373',
              error: '#dc2626',
              noData: '#737373',
            }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between font-mono text-xs text-gray-600">
          <a
            href="https://leetcode.com/u/savvysolver004/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-2 hover:bg-black hover:text-white px-1 transition-colors"
          >
            @savvysolver004 → Knight 1900+
          </a>
          <span>{'// submissions over last year'}</span>
        </div>
      </div>
    </div>
  );
};

export default GithubGraph;
