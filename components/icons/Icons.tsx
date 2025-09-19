import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const SubmitAiLogo: React.FC<IconProps> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      fill="none"
      {...props}
    >
      <text
        x="0"
        y="35"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
        className="text-white"
      >
        SUBMIT-AI
      </text>
    </svg>
);

// BrainCircuitIcon (using Heroicons' CpuChipIcon)
export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 15v1.5M12 4.5v1.5m0 12v1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.75h3.75a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-3.75a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75Zm-6 0h3.75a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75Z" />
  </svg>
);

// RocketIcon (using Heroicons' RocketLaunchIcon)
export const RocketIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.59 14.37-2.12-2.12a1.5 1.5 0 0 0-2.12 0l-2.12 2.12a1.5 1.5 0 0 0 0 2.12l2.12 2.12a1.5 1.5 0 0 0 2.12 0l2.12-2.12a1.5 1.5 0 0 0 0-2.12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 15.75 19.5 18l-2.25 2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-2.25-2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 3-8.625 8.625" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21 12.375 11.625" />
  </svg>
);

// BarChartIcon (using Heroicons' ChartBarIcon)
export const BarChartIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125-1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

// BadgeCheckIcon (using Heroicons' CheckBadgeIcon)
export const BadgeCheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.4-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.4 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.4.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.016h-.008v-.016Z" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export const GoogleCloudLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 128 98.2" fill="currentColor" {...props}>
    <path d="M96.7 98.2H69.3c-10.4 0-19.8-4.1-26.6-10.9-6.9-6.9-10.9-16.2-10.9-26.6 0-10.4 4.1-19.8 10.9-26.6 4.9-4.9 11-8.3 17.6-9.9-2.1-1.3-4-2.9-5.7-4.6-6.9-6.9-10.9-16.2-10.9-26.6C43.8 0 54.2 0 64.6 0c10.4 0 19.8 4.1 26.6 10.9 6.9 6.9 10.9 16.2 10.9 26.6 0 6.9-1.9 13.5-5.1 19.2h1c10.4 0 19.8 4.1 26.6 10.9 6.9 6.9 10.9 16.2 10.9 26.6 0 10.4-4.1 19.8-10.9 26.6-6.9 6.8-16.3 10.9-26.9 10.9zM69.3 54c-5.5 0-10.5-2.2-14.2-5.8-3.6-3.6-5.8-8.7-5.8-14.2s2.2-10.5 5.8-14.2c3.6-3.6 8.7-5.8 14.2-5.8s10.5 2.2 14.2 5.8c3.6 3.6 5.8 8.7 5.8 14.2s-2.2 10.5-5.8 14.2c-3.7 3.6-8.7 5.8-14.2 5.8zm27.4 44.2c5.5 0 10.5-2.2 14.2-5.8 3.6-3.6 5.8-8.7 5.8-14.2s-2.2-10.5-5.8-14.2-8.7-5.8-14.2-5.8H64.6c0 10.4-4.1 19.8-10.9 26.6-4.9 4.9-11 8.3-17.6 9.9 7.8 8.1 18.8 13.5 30.6 13.5h29.4z"></path>
  </svg>
);

export const AWSLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 60 36" fill="currentColor" {...props}>
    <path d="M11.6 27.2c-.3 0-.5.2-.5.5v1.2c0 .3.2.5.5.5h.3c2.4 0 4.3-1.3 4.3-3.4 0-1.8-1.3-3-3.6-3s-3.7 1-4.2 2.7c-.1.3 0 .6.3.7l1 .8c.3.1.6 0 .7-.3.3-.6.9-1.1 2.1-1.1s1.9.5 1.9 1.5c0 1-1.3 1.4-2.8 1.4h-.5zm13.1-1.2c-1.3 0-2.1.8-2.1 2.1v.2c0 1.2.8 2 2.1 2s2.1-.8 2.1-2.1v-.2c0-1.2-.8-2-2.1-2zm0 5.4c-2.3 0-3.9-1.6-3.9-4.1v-.2c0-2.4 1.6-4.1 3.9-4.1s3.9 1.6 3.9 4.1v.2c0 2.5-1.6 4.1-3.9 4.1zm13.3-5.2c-1.3 0-2.1.8-2.1 2.1v.2c0 1.2.8 2 2.1 2s2.1-.8 2.1-2.1v-.2c0-1.2-.8-2-2.1-2zm0 5.4c-2.3 0-3.9-1.6-3.9-4.1v-.2c0-2.4 1.6-4.1 3.9-4.1s3.9 1.6 3.9 4.1v.2c0 2.5-1.6 4.1-3.9 4.1zM58 18c0-9.2-6.5-15.8-16.4-15.8-5.3 0-9.2 2.2-12.1 6.5l-.2.3c-.2.2-.2.5-.1.7l1.1 1.4c.1.2.4.2.6.1l.3-.3c2-2.9 4.9-4.4 8.4-4.4 7.2 0 12.1 4.8 12.1 11.5s-4.8 11.5-12.1 11.5c-3.4 0-6.4-1.5-8.4-4.4l-.3-.3c-.2-.2-.5-.2-.6-.1L28 29.5c-.1.2-.1.5.1.7l.2.3c2.9 4.3 6.8 6.5 12.1 6.5C51.5 33.8 58 27.2 58 18z"></path>
    <path d="M0 29.5c.3 1.2 1.2 2.1 2.5 2.1 1.4 0 2.5-1.1 2.5-2.5v-9.4c0-1.4-1.1-2.5-2.5-2.5S0 18.8 0 20.2v9.3zm5.6 1.8c-.3 0-.5.2-.5.5v1.2c0 .3.2.5.5.5h.3c2.4 0 4.3-1.3 4.3-3.4 0-1.8-1.3-3-3.6-3S3 27.5 2.5 29.2c-.1.3 0 .6.3.7l1 .8c.3.1.6 0 .7-.3.3-.6.9-1.1 2.1-1.1s1.9.5 1.9 1.5c0 1-1.3 1.4-2.8 1.4h-.4z"></path>
  </svg>
);

export const AzureLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 132 84" fill="currentColor" {...props}>
    <path d="M73.5 84L40.2 0H63l21.2 65.2L73.5 84zm-37.3-8.8L0 75.2V32.9l19.4 3.7-1.1 7.2-11-2.2v25.1l29-7.3-8.5-26.6-19.1-3.5 33-52.6h23.1l-42 66.8z"></path>
  </svg>
);

export const IBMLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 72 28" fill="currentColor" {...props}>
    <path d="M0 16.2h12.3v3.7H0zm16.2 0h7.4v3.7h-7.4zm11.1 0h12.3v3.7H27.3zm16-12.3h7.4v19.7h-7.4zM58 0h14v3.7H58zm0 8.1h14v3.7H58zm0 8.1h14v3.7H58z"></path>
    <path d="M0 8.1h12.3v3.7H0zm16.2 0h7.4v3.7h-7.4zM0 0h12.3v3.7H0zM27.3 0h7.4v12H27.3zm-11.1 0h7.4v3.7h-7.4z"></path>
  </svg>
);

export const OCILogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
    <path d="M14 26.5c6.9 0 12.5-5.6 12.5-12.5S20.9 1.5 14 1.5 1.5 7.1 1.5 14 7.1 26.5 14 26.5z"></path>
    <path d="M14 20.6c3.6 0 6.6-2.9 6.6-6.6S17.6 7.4 14 7.4 7.4 10.3 7.4 14s3 6.6 6.6 6.6z"></path>
  </svg>
);
