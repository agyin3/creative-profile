export interface NavLink {
    title: string;
    id?: string;
    href?: string;
}

export const homeNavLinks: NavLink[] = [
    {
        title: "Home",
        id: "#home",
    },
    {
        title: "Music",
        id: "localhost:3000/#music",
    },
    {
        title: "Projects",
        id: "localhost:3000/#projects",
    },
];

export const highlightersNavLinks: NavLink[] = [
    {
        title: 'Home',
        href: 'http://localhost:3000'
    },
]