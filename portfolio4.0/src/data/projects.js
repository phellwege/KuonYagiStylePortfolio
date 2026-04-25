import Ecommerce from '../static/CaptureHomeEcommercePrd.PNG';
import RockPaperScissors from '../static/CaptureHomeRockPaperScissors.PNG';
import SpaceTourism from '../static/CaptureSpaceTourism.PNG';
import PartyTime from '../static/giphyHomePage.gif';
import Countdown from '../static/CaptureCountDown.PNG';
import SWHomecoming from '../static/giphySWHomePage.gif';
import TipCalc from '../static/giphyTipCalc.gif';
import Resumancy from '../static/CaptureHomeResumancy.gif';
import ShogunDemo from '../static/shogunDemo.gif';
import CrimsonScan from '../static/Screenshot 2026-04-24 171522.png';
import ShadowFlight from '../static/HomeScreen.png';
import HiredOrDie from '../static/hired-or-die.png';

const projects = [
    {
        title: 'Resumancy Home Page',
        image: Resumancy,
        alt: 'Resumancy Home Page',
        description: 'A full-stack AI resume platform built from the ground up. Users create a base resume that gets AI-enhanced, then Resumancy can tailor it to any job description and generate matching cover letters — streamlining the entire application process.',
        deployedUrl: 'https://resumancy.com',
        repoUrl: null,
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
        title: 'E-commerce Product Page',
        image: Ecommerce,
        alt: 'E-commerce Product Page',
        description: "E-Commerce Product Page Component is a functional ReactJS page, with a lot of ternary statements, use of props, active states and state management. This was a coding challenge from frontEndMentor.io",
        deployedUrl: 'https://phellwege.github.io/ecommerce-product-page-component/',
        repoUrl: 'https://github.com/phellwege/ecommerce-product-page-component',
    },
    {
        title: 'Rock-Paper-Scissors',
        image: RockPaperScissors,
        alt: 'Rock-Paper-Scissors',
        description: 'Rock-Paper-Scissors is a simple game that keeps track of your score through state management. I designed the architecture to be as smooth as possible without the need for any page changes.',
        deployedUrl: 'https://phellwege.github.io/RockPaperScissors/',
        repoUrl: 'https://github.com/phellwege/RockPaperScissors',
    },
    {
        title: 'CrimsonScan — Medical Image Analysis',
        image: CrimsonScan,
        alt: 'CrimsonScan Medical AI Demo',
        description: 'An AI/ML medical analysis platform that identifies blood cell abnormalities, parasitic and viral infections, and cancer-indicative lymphocyte counts from microscopic and electron microscope imagery. Trained on 177k+ manually annotated images achieving 96-97% accuracy. Features confidence-scored results with human-in-the-loop review and continuous model retraining.',
        deployedUrl: null,
        repoUrl: null,
        status: 'Discontinued',
    },
    {
        title: 'ShadowFlight',
        image: ShadowFlight,
        alt: 'ShadowFlight Homepage',
        description: 'A client-facing website built for ShadowFlight, a wormhole corporation in Eve Online. Developed in React with responsive layouts, dark/light theme toggle, and integrated tools like SeAT login and Pathfinder. Deployed to a custom domain and actively used by the organization.',
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
    {
        title: 'Party Time',
        image: PartyTime,
        alt: 'Party Time',
        description: "Party Time is an ongoing single page application built from the ground up using ReactJS, CSS, and Javascript. It's been a really fun and frustrating project to help me in my pursuit of constantly improving my code and knowledge of implementation",
        deployedUrl: 'https://phellwege.github.io/ThePartyTime/',
        repoUrl: 'https://github.com/phellwege/ThePartyTime',
    },
    {
        title: 'Countdown Timer',
        image: Countdown,
        alt: 'Countdown Timer',
        description: 'Countdown timer was a quick challenge in order to build a really good looking countdown component, that can then be integrated into other projects.',
        deployedUrl: 'https://phellwege.github.io/countdown/',
        repoUrl: 'https://github.com/phellwege/countdown',
    },
    {
        title: 'Star Wars Homecoming',
        image: SWHomecoming,
        alt: 'Star Wars Homecoming',
        description: "Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.",
        deployedUrl: null,
        repoUrl: 'https://github.com/bdsullivan123/homecoming',
    },
    {
        title: 'Tip Calculator',
        image: TipCalc,
        alt: 'Tip Calculator',
        description: 'Tip Calculator is a front end mini project to keep my HTML, CSS, and JavaScript skills sharp. I followed a basic wireframe from frontendmentor.',
        deployedUrl: 'https://phellwege.github.io/Tip_Calculator/',
        repoUrl: 'https://github.com/phellwege/Tip_Calculator',
    },
];

export default projects;
