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
import SheetHerderLanding from '../static/sheetherder-landing.png';
import SheetHerderSource from '../static/sheetherder-source.png';
import SheetHerderCsv from '../static/sheetherder-csv.png';
import SheetHerderCategories from '../static/sheetherder-categories.png';

const projects = [
    {
        title: 'CrimsonScan Spectra - AI Materials Discovery',
        image: SpectraStructure,
        images: [SpectraLanding, SpectraStructure, SpectraDftEcon, SpectraReport],
        alt: 'Spectra 3D crystal structure viewer',
        description: 'The current evolution of CrimsonScan: an AI discovery engine spanning materials and molecules, from structural alloys and battery chemistries to polymers, catalysts, and bioactive compounds. Describe a target in natural language and Spectra generates candidates with MatterGen, IBM FM4M, and GT4SD, screens them with DFT-surrogate physics and pymatgen analysis, and delivers full scientific and economic viability reports.',
        details: [
            "Spectra is an AI discovery engine for new materials and molecules. A researcher describes the target in plain language, such as a lighter structural alloy, a battery chemistry or a catalyst, and Spectra turns it into a plan of generation and screening steps they can review and adjust before anything runs.",
            "Candidates come from generative models including MatterGen, IBM FM4M and GT4SD. Each one is screened with DFT-surrogate physics and pymatgen structure analysis, and the survivors are written up as scientific and economic viability reports, with an interactive 3D view of every crystal structure.",
            "The model services run as containers on Google Cloud. GPU work like MatterGen runs as on-demand Cloud Run jobs that scale to zero, so idle cost stays near nothing, and the web app sits on Firebase with per-plan usage limits.",
        ],
        stack: ["React", "TypeScript", "Python", "PyTorch", "MatterGen", "FM4M", "GT4SD", "pymatgen", "Cloud Run GPUs", "Firebase"],
        deployedUrl: 'https://crimsonscan.com',
        repoUrl: null,
    },
    {
        title: 'SheetHerder - Messy Documents In, Clean Tables Out',
        image: SheetHerderLanding,
        images: [SheetHerderLanding, SheetHerderSource, SheetHerderCsv, SheetHerderCategories],
        alt: 'SheetHerder home page: messy documents in, clean tables out',
        description: 'A live SaaS product for teams that receive documents about the same thing, like financial statements, invoices or rent rolls, from many different sources, each in its own layout. Drop in PDFs, scans, CSV or Excel and SheetHerder fills one table in the columns you choose, checks every row against the document\'s own totals, and traces each value back to the line it came from. Built in TypeScript with a parsing engine where code finds the candidates and a small TypeSafe model picks between them, cloud and in-browser OCR, teach-by-example for unfamiliar layouts, and Firebase, Cloud Run and Stripe behind it.',
        details: [
            "SheetHerder is for teams that receive documents about the same thing, like financial statements, invoices or rent rolls, from many different sources, each laid out its own way. You choose the columns once; every PDF, scan, CSV or Excel file is read into that one table, and saved templates keep next month's files coming out in the same shape.",
            "Accuracy is checked, not assumed. Each document is tested against its own totals (opening balance plus transactions equals closing, line items equal the subtotal), every value links back to the exact line it came from, and only low-confidence rows are flagged for review. A layout it has never seen can be taught by pointing at one example row.",
            "Under the hood is a TypeScript parsing engine where code finds the candidate values and a small TypeSafe model only chooses between them, which keeps provenance exact and costs a fraction of a cent per document. Scans go through Google Document AI or an in-browser OCR model, and the product runs on Cloud Run with Firebase accounts, shared business workspaces and Stripe billing. It is live and taking payments.",
        ],
        stack: ["TypeScript", "React", "Node", "TypeSafe Jev", "Document AI", "OCR", "Firebase", "Cloud Run", "Stripe"],
        deployedUrl: 'https://sheetherder.com',
        repoUrl: null,
    },
    {
        title: 'Mechanicus Buddy - A Desktop Companion Driven by Claude Code',
        image: MechanicusWalk,
        images: [MechanicusWalk, MechanicusPanel, MechanicusPermission, MechanicusMutter],
        alt: 'Mechanicus Buddy walking across the desktop',
        description: 'A Warhammer 40K-themed desktop pet that is also a working coding assistant. An Electron app in TypeScript: a click-through sprite that wanders your monitors, and a hologram chat panel wired to your own Claude Code login through an MCP server that gives the agent a body and routes every file edit or shell command through an in-app sanction card. Includes a SAM 2 sprite pipeline with a mask annotator, in-character readbacks, 300 unit and 22 Playwright tests, and a one-script installer.',
        details: [
            "A Warhammer 40K tech-priest that lives on your desktop and is also a working coding assistant. The sprite walks, hovers and lands across all of your monitors in a click-through window, and clicking it opens a hologram chat panel projected from its servo skull.",
            "The brain is your own Claude Code login, driven headlessly. An MCP server gives the agent a body (it can move, point and react), and every file edit or shell command it wants to run is routed through an in-app sanction card for you to approve. Replies are read back in character.",
            "The sprites come from a SAM 2 segmentation pipeline with a custom mask annotator. The app is Electron and TypeScript, covered by 300 unit tests and 22 Playwright end-to-end tests, and installs with one script.",
        ],
        stack: ["Electron", "TypeScript", "Claude Code", "MCP", "SAM 2", "Playwright"],
        deployedUrl: null,
        repoUrl: 'https://github.com/phellwege/desktopBuddy-claudeCLI-magosVex',
    },
    {
        title: 'Resumancy Home Page',
        image: Resumancy,
        alt: 'Resumancy Home Page',
        description: 'An AI resume builder. Users create a base resume that gets AI-enhanced, then Resumancy tailors it to any job description and writes a matching cover letter, with a match score and skill gap analysis for each job. Free to try with your own OpenAI key.',
        details: [
            "Resumancy started as a full-stack subscription product (Firebase auth and database, Cloud Functions, Stripe billing). Users build a base resume once, have it enhanced by AI, then tailor it to any job description and generate a matching cover letter, so every application goes out targeted instead of generic.",
            "It now runs as a static, serverless demo on GitHub Pages: visitors bring their own OpenAI API key and pick the model, requests go straight from the browser to OpenAI, and resumes are saved only in the visitor's browser, with export and import. Resumes render to downloadable PDFs.",
        ],
        stack: ["React", "OpenAI", "React-PDF", "GitHub Pages", "Firebase (original)", "Stripe (original)"],
        deployedUrl: 'https://phellwege.github.io/resumancyV3/',
        repoUrl: 'https://github.com/phellwege/resumancyV3',
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
        details: [
            "An AI persona of Tokugawa Ieyasu, founder of the Tokugawa Shogunate. Ask him a question by typing or speaking, and he answers in both English and Japanese in an authoritative, respectful tone.",
            "Answers are voiced with ElevenLabs multilingual voice clones and can be played or downloaded. Spoken questions use the Web Speech API, and the loading screen types out randomized Japanese proverbs.",
        ],
        stack: ["React", "OpenAI", "ElevenLabs", "Web Speech API", "Bootstrap"],
        deployedUrl: null,
        repoUrl: 'https://github.com/phellwege/history-lessons-from-a-shogun',
    },
    {
        title: 'ShadowFlight',
        image: ShadowFlight,
        alt: 'ShadowFlight Homepage',
        description: 'A production site built for ShadowFlight, an EVE Online wormhole corporation, in active daily use by the org. React with responsive layouts, dark/light theme toggle, and integrations with their auth (SeAT) and mapping (Pathfinder) tooling, deployed on a custom domain.',
        details: [
            "A production site for ShadowFlight, an EVE Online wormhole corporation, used daily by its members. It holds the corporation's core information and procedures, plus guidance on gameplay in wormhole space.",
            "Built working directly with the client: responsive React layouts with a dark and light theme, lazy-loaded and correctly sized images for performance, and links into the corporation's SeAT auth and Pathfinder mapping tools, on its own custom domain.",
        ],
        stack: ["React", "styled-components", "Swiper", "React Router"],
        deployedUrl: 'https://shadowflight.org/',
        repoUrl: 'https://github.com/phellwege/shadowflight',
    },
    {
        title: 'Hired Or Die Trying',
        image: HiredOrDie,
        alt: 'Hired Or Die Trying',
        description: 'A satirical text adventure about surviving the modern software engineering job market. Navigate absurd interview loops, ghost recruiters, and leetcode gauntlets in this tongue-in-cheek browser game. It\'s funny because it\'s true.',
        details: [
            "A satirical text adventure about surviving the modern software engineering job market. Navigate absurd interview loops, ghost recruiters and leetcode gauntlets, and try to come out the other side with an offer.",
            "Written in plain JavaScript with its own small scene engine and no framework, and playable in the browser.",
        ],
        stack: ["JavaScript", "HTML", "CSS"],
        deployedUrl: 'https://phellwege.github.io/hired_or_die_trying/',
        repoUrl: 'https://github.com/phellwege/hired_or_die_trying',
    },
    {
        title: 'Space Tourism',
        image: SpaceTourism,
        alt: 'Space Tourism',
        description: "Space Tourism is a multi-page front end challenge. It's mobile friendly down to 375px wide and functions by indexing a JSON file.",
        details: [
            "A multi-page site built from a Frontend Mentor design challenge. Each page is driven from a JSON file, with tabbed content and hover states throughout.",
            "Mobile-first and responsive down to 375px wide, using CSS Grid and Flexbox, and deployed to GitHub Pages.",
        ],
        stack: ["React", "React Router", "CSS Grid", "GitHub Pages"],
        deployedUrl: 'https://phellwege.github.io/SpaceTourism/',
        repoUrl: 'https://github.com/phellwege/SpaceTourism',
    },
];

export default projects;
