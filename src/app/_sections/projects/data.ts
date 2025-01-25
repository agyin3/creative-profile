export interface ProjectsData {
    title: string;
    info: string;
    url: string;
    imgSrc: string;
    imgAltText: string;
    mobileImgSrc: string;
}

export const projectsData = [
    {
        title: 'The High Lighters',
        info: 'A group of lighters that love to smoke and rap',
        url: 'https://thehighlighters.buddyagyin.com/',
        mobileImgSrc: '/the-highlighters/higher-frequencies-300-square.png',
        imgSrc: '/the-highlighters/higher-frequencies-1200-square.png',
        imgAltText: 'Higher Frequencies album cover'
    },
    {
        title: 'Society of Underground Leaders',
        info: 'Your destination for lofi, hip-hop, and drill beats. Perfect for studying, freestyling, or vibing.',
        url: 'https://www.youtube.com/@SocietyofUndergroundLeaders',
        mobileImgSrc: '/soul/soul-avatar-1024-square.png',
        imgSrc: '/soul/soul-avatar-1024-square.png',
        imgAltText: 'A group of ilustrated cheetahs wearing hats in an urban setting'
    }
]