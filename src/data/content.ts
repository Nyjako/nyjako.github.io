// All data here is drawn directly from the verified GitHub-sourced brief.
// Nothing invented — see README-CONTENT-GAPS.md for what's still missing.

export const person = {
    name: "Kacper Tucholski",
    handle: "Nyjako",
    location: "Poland",
    tagline: "I like to code stuff.",
    joke: "In case of fire: git commit, git push, leave the building.",
    github: "https://github.com/Nyjako",
    liveSite: "https://nyjako.github.io",
    email: "kacper.tucholski.kt@gmail.com",
    linkedin: "https://www.linkedin.com/in/nyjako",
};

export type Project = {
    name: string;
    stack: string;
    desc: string;
    url: string;
    note?: string;
};

export type Category = {
    id: string;
    logTag: string; // boot-log style module name
    title: string;
    intro: string;
    projects: Project[];
};

export const categories: Category[] = [
    {
        id: "systems",
        logTag: "kernel",
        title: "Systems / low-level",
        intro: "The strongest, most differentiated thread in the work below: bootloaders, header-only C, terminal UIs, and libraries that talk directly to the OS.",
        projects: [
            {
                name: "nyjako_os",
                stack: "Rust",
                desc: "A hobby operating system built by following the “Writing an OS in Rust” tutorial series — bootloading, kernel basics, memory management.",
                url: "https://github.com/Nyjako/nyjako_os",
            },
            {
                name: "GOBLIN",
                stack: "C",
                desc: "A header-only stash of small utilities — not a framework, not a stdlib replacement. Small, low-ceremony, portable. CI-tested on Linux and Windows.",
                url: "https://github.com/Nyjako/GOBLIN",
                note: "Dual-licensed MIT / Unlicense",
            },
            {
                name: "CodeMop",
                stack: "C",
                desc: "A terminal app (ncurses + pthreads) that scans a directory tree for project roots and reports how much space their build folders eat — press d to reclaim it. Supports CMake, Make, Cargo, and Node.js projects.",
                url: "https://github.com/Nyjako/CodeMop",
            },
            {
                name: "raylib-make-bootstrap",
                stack: "Makefile / C",
                desc: "A minimal C + raylib starter template with a ready-to-use Makefile — a quick-start scaffold for game and graphics projects.",
                url: "https://github.com/Nyjako/raylib-make-bootstrap",
            },
            {
                name: "clock",
                stack: "C++",
                desc: "A simple clock application.",
                url: "https://github.com/Nyjako/clock",
            },
            {
                name: "aoc-2022 / aoc2023",
                stack: "C++ & others",
                desc: "Advent of Code solutions. The 2022 set alone crossed g++ 11.2.0, Node.js 18.7.0, and Python 3.10.2 for the same problem set.",
                url: "https://github.com/Nyjako?tab=repositories&q=aoc",
            },
        ],
    },
    {
        id: "web",
        logTag: "netstack",
        title: "Web / full-stack",
        intro: "Comfortable across the stack — React SPAs, a Rust web trio (Axum, Leptos, SQLx), and a C++ web framework scaffold.",
        projects: [
            {
                name: "dbd-bounty-hunter",
                stack: "Astro",
                desc: "An unofficial, browser-based Dead by Daylight bounty-progress tracker. Progress is stored locally in-browser. Fan project, not affiliated with Behaviour Interactive.",
                url: "https://github.com/Nyjako/dbd-bounty-hunter",
            },
            {
                name: "portfolio (v1 attempt)",
                stack: "TypeScript",
                desc: "An earlier, unfinished portfolio attempt bootstrapped with Create React App. Not deployed — kept for reference.",
                url: "https://github.com/Nyjako/portfolio",
            },
            {
                name: "nyjako.github.io",
                stack: "HTML / React",
                desc: "The live personal site this project is upgrading — a React SPA built with Create React App.",
                url: "https://nyjako.github.io",
            },
            {
                name: "url-shortener-and-file-share",
                stack: "JavaScript",
                desc: "A combined URL-shortening and file-sharing web service.",
                url: "https://github.com/Nyjako/url-shortener-and-file-share",
            },
            {
                name: "axum-leptos-greeter-app",
                stack: "Rust",
                desc: "A greeter web app pairing Axum on the backend with Leptos on the frontend, backed by SQLx.",
                url: "https://github.com/Nyjako/axum-leptos-greeter-app",
            },
            {
                name: "drogon-project-scaffold",
                stack: "C++",
                desc: "A starter scaffold for building web apps with the Drogon C++ web framework.",
                url: "https://github.com/Nyjako/drogon-project-scaffold",
            },
        ],
    },
    {
        id: "gaming",
        logTag: "usrdev",
        title: "Gaming tools & bots",
        intro: "A genuine hobby cluster, not portfolio filler — mostly Dead by Daylight and Steam tools built to fix a real, specific annoyance.",
        projects: [
            {
                name: "dbd-bounty-hunter",
                stack: "Astro",
                desc: "An unofficial, browser-based Dead by Daylight bounty-progress tracker. Progress is stored locally in-browser. Fan project, not affiliated with Behaviour Interactive.",
                url: "https://github.com/Nyjako/dbd-bounty-hunter",
            },
            {
                name: "nightlight-uploader",
                stack: "Rust",
                desc: "Automates uploading Dead by Daylight end-game scoreboards to the Nightlight site — built because the official uploader is Windows-only.",
                url: "https://github.com/Nyjako/nightlight-uploader",
            },
            {
                name: "steam-name-switcher",
                stack: "JavaScript",
                desc: "A local web app (localhost:3000) for switching between saved Steam usernames, with Steam Guard support and category grouping.",
                url: "https://github.com/Nyjako/steam-name-switcher",
            },
            {
                name: "GateKeeper",
                stack: "JavaScript",
                desc: "A Discord moderation bot: assigns a role on join, starts a grace-period timer, watches voice activity, and kicks (with a warning DM first) anyone who doesn't join voice in time.",
                url: "https://github.com/Nyjako/GateKeeper",
            },
            {
                name: "Arduino-TicTacToe",
                stack: "C++",
                desc: "Tic-tac-toe on an Arduino Uno, hand-written logic — deliberately skipping Minimax. Includes a breadboard diagram.",
                url: "https://github.com/Nyjako/Arduino-TicTacToe",
                note: "“I decided to not use Minimax and now I have nightmares about this code.”",
            },
        ],
    },
    {
        id: "practice",
        logTag: "sandbox",
        title: "Practice & smaller utilities",
        intro: "Smaller reps — the kind of thing you build to learn a corner of a language properly.",
        projects: [
            {
                name: "coding-challenges",
                stack: "Rust",
                desc: "A collection of solved coding challenges.",
                url: "https://github.com/Nyjako/coding-challenges",
            },
            {
                name: "num2word",
                stack: "Rust",
                desc: "Converts numbers into their word representation — 42 becomes “forty-two.”",
                url: "https://github.com/Nyjako/num2word",
            },
            {
                name: "video-cruncher",
                stack: "Rust",
                desc: "Simplifies converting video files using FFmpeg.",
                url: "https://github.com/Nyjako/video-cruncher",
            },
            {
                name: "creative-coding",
                stack: "Rust",
                desc: "Generative and creative coding experiments.",
                url: "https://github.com/Nyjako/creative-coding",
            },
        ],
    },
];

export const skillGroups = [
    {
        label: "languages",
        items: [
            "C",
            "C++",
            "C#",
            "JavaScript",
            "TypeScript",
            "Python",
            "CSS",
            "HTML",
            "Rust",
        ],
    },
    {
        label: "frameworks",
        items: [
            "Node.js",
            "MySQL",
            "ReactJS",
            "Tailwind CSS",
            "Next.js",
            "Nuxt.js",
            "Express",
            "Prisma",
            "Astro",
            "Axum",
            "Leptos",
            "Drogon",
        ],
    },
    {
        label: "tools",
        items: ["Git", "ESLint", "Postman", "CMake", "SQLx"],
    },
    {
        label: "platforms",
        items: ["Windows", "Linux"],
    },
];

export const forks = [
    { name: "c3c", note: "compiler for the C3 language" },
    {
        name: "SourceDemoRender",
        note: "high-quality movie rendering for the Source engine",
    },
    { name: "abaddon", note: "alternative Discord client, C++/GTK3" },
];
