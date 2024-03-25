import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Medical App',
        description: "As an Intern at Technoculture I contributed in building ELLA with various features in both backend and frontend. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using Whisper. The app also keeps record of your health by taking data from BLE machines.",
        tools: ['WebSocket', 'TursoDB', 'OpenAI API', 'AZURE', 'EXPO React Native', 'Docker', 'Dapr', 'Kubernetes', 'Whisper','TypeScript', 'NodeJS'],
        role: 'React Native Developer Intern',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Inventory Management App',
        description: 'I have designed and developed a fully Native Application for Ayush  Clinic as a FreeLance GIG. I created the App Frontend using Expo, Typescript, TailwindCSS. The app supports multiple queries. The App sends notification when the stocks are below limit, gives contact list of suppliers, and automatially sorts the medicine and analyzes sales per month. I used Supabase as Backend for a service. The app is fully responsive and supports both Android and iOS devices. ',
        tools: ['Expo', 'TypeScript', 'TailwindCSS', 'Supabase', 'React Native', 'Redux', 'React Navigation', 'Push Notifications', 'Async Storage', 'Zustand'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered NEWS App',
        description: 'For the Under Grad Project- I built CHEETAH-NEWS an AI-based news webapp using AlanAI. I used Express, Javascript, AlanAI, and Mongoose to develop the API. The app is fully responsive and uses voice enabled commands to fetch news. The app also has a feature to read the news for you. The app is deployed on https://cheetah-news.web.app/',
        tools: ['AlanAI', 'Express', 'Mongoose', 'JavaScript', 'React', 'Redux', 'Material UI', 'React-Router', 'React-Query', 'React-Toastify', 'React-Player', 'React-Share', 'React-Scroll'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Patra Rakshak',
        description: "My team and I developed a Web3 React Project for SMART INDIA HACKATHON. As a front-end developer, I worked on creating the dashboard using React, tailwind and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form.We Developed Backend with express and MongoDB. The chain model for certification was developed using go and hyperledger fabric. The project was Block chain based certificate generation and validation system for govt of gujurat. We cleared college level rounds",
        tools: ['React', 'TailwindCSS', 'Redux', 'React-Router', 'React-Hook-Form', 'Express', 'MongoDB', 'Hyperledger Fabric', 'GoLang', 'Web3', 'Solidity', 'Truffle', 'Ganache', 'Metamask'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },