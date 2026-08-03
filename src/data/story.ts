export type Chapter = {
    id: string;
    stage: string;
    range: string; // shown like a timestamp
    title: string;
    paragraphs: string[];
    quote?: string;
};

export const storyChapters: Chapter[] = [
    {
        id: "cold-boot",
        stage: "cold boot",
        range: "1999 – ~2009",
        title: "Chapter 1: The beginning",
        paragraphs: [
            "Born in 1999, in Poland. Total honesty: computers didn't interest me even a little — until a primary school teacher handed the class Scratch as an assignment.",
            "I was 10–12, it was around 2009, and something about snapping blocks together to make things happen flipped a switch. I kept going at home, purely because it was fun.",
            "From there it was The Games Factory 2, then RPG Maker — mostly RPG Maker, because a fan translation meant I could build things without needing English yet. Me and my friends made some genuinely bad games and had an absolute blast playing them anyway.",
        ],
    },
    {
        id: "post",
        stage: "post",
        range: "Junior high, age 13–15",
        title: "Chapter 2: Something more",
        paragraphs: [
            "Junior high, still no English, and I wanted to do something more serious. I found a C++ tutorial series. It was too early — I mostly just installed a pile of garbage on my PC and called it learning.",
            "What actually stuck was .bat files. Three years, a lot of scripts: a shutdown helper you could tell ‘turn off in N hours,’ something like netuser for changing passwords (which, somehow, let me change the admin password on my school PC — no idea what was supposedly protecting that), and a pseudo-virus that dropped a copy of itself into the autostart folder and just closed the PC the moment it launched.",
        ],
        // quote: "// peak achievement of this era: one script, accidental privilege escalation, school property",
    },
    {
        id: "bootloader",
        stage: "bootloader",
        range: "High school, age 16–18",
        title: "Chapter 3: Finally, some real coding",
        paragraphs: [
            "High school. I went back to that same C++ tutorial series and this time it clicked — C++ became my favorite language on the spot. Three years working through it up to classes, plus a lot of time solving problems on SPOJ.",
            "Around 18 I finally discovered GitHub. Unfortunately most of what came before it is gone — turns out even a private repo doesn't save itself if you never actually make one. That code lived on random drives and a Google Drive folder that no longer exists.",
            "I had a GitHub account and still didn't push anything for a long time — I had this idea I wasn't good enough yet, that a repo from me would just take up storage space real developers could use. Not my finest take. My English got good enough to read docs comfortably around here too.",
        ],
    },
    {
        id: "kernel-init",
        stage: "kernel init",
        range: "2018 – 2023, College",
        title: "Chapter 4: College",
        paragraphs: [
            "Bachelor of Engineering, 2018–2023 — the “2023” is doing some heavy lifting, since work got in the way of the thesis and I eventually had to scrap the draft and defend later, starting mostly from scratch.",
            "First year was easy thanks to existing C/C++ knowledge. I loved the program itself: interesting subjects, actual cool problems to solve, classmates who wanted to talk about the same nerdy stuff I did. We covered C, C++, JS, TS, Java, SQL, HTML, CSS, Python and more, plus my first real contact with Linux.",
            "It didn't feel like school before — professors were reachable, treated us like adults, and the projects were genuinely fun to build, even under pressure to adapt fast.",
            "Second year, I ran a web-scraping experiment for about a month straight — no checkpoints, because what can go wrong. Windows picked that exact week to auto-update and reboot my PC. I got mad enough to wipe the machine and install Arch Linux on the spot. Later moved to Manjaro. Still there.",
        ],
    },
    {
        id: "userspace",
        stage: "userspace",
        range: "2025 — now",
        title: "Chapter 5: Current times",
        paragraphs: [
            "Not employed as a programmer yet — the market's rough right now, AI's eating a lot of entry-level air — but still writing code every chance I get.",
            "Sometime in 2025 I decided C++ was often too much complexity for no real reason, and C quietly became the favorite. CMake got swapped for plain Makefiles once too many small projects had more CMake in them than actual C. Same instinct killed my patience for shipping 200kb of React to render a static page — not because React is bad, just because that's a crime against a landing page. These days it's plain HTML/CSS/JS where possible, and Astro as a bundler everywhere else.",
        ],
    },
];

export type CurrentProject = {
    name: string;
    url: string;
    note: string;
};

export const currentlyWorkingOn: CurrentProject[] = [
    {
        name: "dbd-bounty-hunter",
        url: "https://github.com/Nyjako/dbd-bounty-hunter",
        note: "Actively shipping — last commit landed within a day of writing this.",
    },
    {
        name: "1.44MB Game Dev Contest entry",
        url: "https://2pgarcade.com/contest-144mb.html",
        note: "A Doom/Wolfenstein-style game that has to fit in 1,474,560 bytes — the size of a 3.5\" floppy disk. Written in C with a raw pixel buffer, leaning on GOBLIN's window.h. Private for now, might open-source later.",
    },
    {
        name: "GOBLIN",
        url: "https://github.com/Nyjako/GOBLIN",
        note: "A tiny header-only collection of helpers, utilities for C and C++",
    },
];
