import Ecommerce from '../static/CaptureHomeEcommercePrd.PNG';
import RockPaperScissors from '../static/CaptureHomeRockPaperScissors.PNG';
import SpaceTourism from '../static/CaptureSpaceTourism.PNG';
import PartyTime from '../static/giphyHomePage.gif';
import Countdown from '../static/CaptureCountDown.PNG';
import SWHomecoming from '../static/giphySWHomePage.gif';
import TipCalc from '../static/giphyTipCalc.gif';
import Resumancy from '../static/CaptureHomeResumancy.gif';
import ShogunDemo from '../static/shogunDemo.gif';

const projects = [
    {
        title: 'Resumancy Home Page',
        image: Resumancy,
        alt: 'Resumancy Home Page',
        description: 'Resumancy is an AI Resume creation suit I built from the ground up. Resumancy has the user create a base resume which it enhances using AI, then Resumancy can custom tailor resumes for any given job description, and produce cover letters.',
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
        deployedUrl: 'http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/',
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
