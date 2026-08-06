export type Editor = {
    name: string;
    verdict: string;
    blurb: string;
};

export const editors: Editor[] = [
    {
        name: "Code::Blocks",
        verdict: "it did the job",
        blurb: "First editor I ever used, purely because the C++ tutorial I was following used it. Not a great IDE, if I'm honest — Visual Studio beats it in pretty much every way.",
    },
    {
        name: "Visual Studio",
        verdict: "excellent, Windows-only",
        blurb: "Genuinely refined, loaded with tools. Only real complaint is that it's Windows-exclusive — but on Windows it's amazing. Only ever used it for C++ and C#.",
    },
    {
        name: "Atom",
        verdict: "no complaints",
        blurb: "Ran this alongside Visual Studio for everything else — HTML, CSS, JS, Python. I was mainly writing C++ at the time, so Atom picked up the rest. Nothing bad to say about it.",
    },
    {
        name: "VS Code",
        verdict: "trying to do too much",
        blurb: "Markets itself as lightweight, ships a crap-ton of useful extensions, and is now busy forcing AI features on you whether you asked or not. It's trying to be the IDE for everything, and somewhere along the way it stopped feeling good.",
    },
    {
        name: "Vim / Neovim",
        verdict: "respect, unclaimed",
        blurb: "A genuinely good editor if you put in the time. I know the basics — including the crucial life skill of closing it without unplugging the power supply. It's fast, it lets you move fast, and it's still the best tool for SSH sessions and massive log files. I just haven't found the resolve to actually learn it properly.",
    },
    {
        name: "Helix",
        verdict: "vim, but I'd rather learn vim",
        blurb: "Trying to be Vim but simpler. I know the basics here too, but if I'm ever going to commit to learning one editor from this family properly, it's going to be Vim, not this.",
    },
    {
        name: "Sublime Text",
        verdict: "hard pass",
        blurb: "A paid editor that, to me, feels like a joke — nothing about it felt revolutionary enough to justify the price. Tried it, wasn't convinced.",
    },
    {
        name: "JetBrains suite",
        verdict: "niche powerhouse",
        blurb: "Big, clunky, absolutely packed with features — great when you need serious debugging or code analysis. Feels oversized for small projects, but if you're making a game and need real IDE support talking to an engine like Unreal or Unity, Rider is fantastic.",
    },
    {
        name: "Zed",
        verdict: "current favorite",
        blurb: "Fast, feels like home if you've spent years in VS Code, and lets you kill AI features with a single toggle or point it at a local model through LM Studio instead. Fewer extensions than VS Code, but it follows the principle I actually care about: reduce complexity.",
    },
];
