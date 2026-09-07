import SpaceTourism from '../static/CaptureSpaceTourism.PNG';
import Resumancy from '../static/CaptureHomeResumancy.gif';
import ShogunDemo from '../static/shogunDemo.gif';
import CrimsonScan from '../static/Screenshot 2026-04-24 171522.png';
import ShadowFlight from '../static/HomeScreen.png';
import HiredOrDie from '../static/hired-or-die.png';
import SpectraStructure from '../static/spectra-structure.png';
import SpectraLanding from '../static/spectra-landing.png';
import SpectraDftEcon from '../static/spectra-dft-econ.png';
import SpectraReport from '../static/spectra-report.png';
import MechanicusWalk from '../static/mechanicus-walk.gif';
import MechanicusMutter from '../static/mechanicus-mutter.png';
import MechanicusPanel from '../static/mechanicus-panel.png';
import MechanicusPermission from '../static/mechanicus-permission.png';

const projects = [
    {
        title: 'CrimsonScan Spectra - AI Materials Discovery',
        image: SpectraStructure,
        images: [SpectraLanding, SpectraStructure, SpectraDftEcon, SpectraReport],
        alt: 'Spectra 3D crystal structure viewer',
        description: 'The current evolution of CrimsonScan: an AI discovery engine spanning materials and molecules, from structural alloys and battery chemistries to polymers, catalysts, and bioactive compounds. Describe a target in natural language and Spectra generates candidates with MatterGen, IBM FM4M, and GT4SD, screens them with DFT-surrogate physics and pymatgen analysis, and delivers full scientific and economic viability reports.',
        deployedUrl: 'https://crimsonscan.com',
        repoUrl: null,
    },
    {
        title: 'Mechanicus Buddy - A Desktop Companion Driven by Claude Code',
        image: MechanicusWalk,
        images: [MechanicusWalk, MechanicusPanel, MechanicusPermission, MechanicusMutter],
        alt: 'Mechanicus Buddy walking across the desktop',
        description: 'A Warhammer 40K-themed desktop pet that is also a working coding assistant. An Electron app in TypeScript: a click-through sprite that wanders your monitors, and a hologram chat panel wired to your own Claude Code login through an MCP server that gives the agent a body and routes every file edit or shell command through an in-app sanction card. Includes a SAM 2 sprite pipeline with a mask annotator, in-character readbacks, 300 unit and 22 Playwright tests, and a one-script installer.',
        deployedUrl: null,
        repoUrl: 'https://github.com/phellwege/desktopBuddy-claudeCLI-magosVex',
    },
    {
        title: 'Resumancy Home Page',
        image: Resumancy,
        alt: 'Resumancy Home Page',
        description: 'A full-stack AI resume platform built from the ground up. Users create a base resume that gets AI-enhanced, then Resumancy can tailor it to any job description and generate matching cover letters, streamlining the entire application process.',
        deployedUrl: 'https://resumancy.com',
        repoUrl: null,
    },
    {
        title: 'CrimsonScan - Medical Image Analysis',
        image: CrimsonScan,
        alt: 'CrimsonScan Medical AI Demo',
        description: 'An AI/ML medical imaging platform detecting blood cell abnormalities, parasitic and viral infections, and cancer-indicative lymphocyte counts. I built the full stack: a data pipeline over 177k manually annotated images, models reaching 96-97% accuracy, confidence-scored results with human-in-the-loop review, and continuous retraining.',
        deployedUrl: null,
        repoUrl: null,
        status: 'Sunset',
    },
    {
        title: 'History Lessons from a Shogun',
        image: ShogunDemo,
        alt: 'History Lessons from a Shogun',
        description: 'An AI persona of Tokugawa Ieyasu built with React, OpenAI, and ElevenLabs voice synthesis. Ask questions and receive responses in both English and Japanese with realistic voice playback. Features speech-to-text input and a samurai-themed loading screen with Japanese proverbs.',
        deployedUrl: null,
        repoUrl: 'https://github.com/phellwege/history-lessons-from-a-shogun',
    },
    {
        title: 'ShadowFlight',
        image: ShadowFlight,
        alt: 'ShadowFlight Homepage',
        description: 'A production site built for ShadowFlight, an EVE Online wormhole corporation, in active daily use by the org. React with responsive layouts, dark/light theme toggle, and integrations with their auth (SeAT) and mapping (Pathfinder) tooling, deployed on a custom domain.',
        deployedUrl: 'https://shadowflight.org/',
        repoUrl: 'https://github.com/phellwege/shadowflight',
    },
    {
        title: 'Hired Or Die Trying',
        image: HiredOrDie,
        alt: 'Hired Or Die Trying',
        description: 'A satirical text adventure about surviving the modern software engineering job market. Navigate absurd interview loops, ghost recruiters, and leetcode gauntlets in this tongue-in-cheek browser game. It\'s funny because it\'s true.',
        deployedUrl: 'https://phellwege.github.io/hired_or_die_trying/',
        repoUrl: 'https://github.com/phellwege/hired_or_die_trying',
    },
    {
        title: 'Space Tourism',
        image: SpaceTourism,
        alt: 'Space Tourism',
        description: "Space Tourism is a multi-page front end challenge. It's mobile friendly down to 375px wide and functions by indexing a JSON file.",
        deployedUrl: 'https://phellwege.github.io/SpaceTourism/',
        repoUrl: 'https://github.com/phellwege/SpaceTourism',
    },
];

export default projects;
