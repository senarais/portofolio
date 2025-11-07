interface ProjectData {
  title: string;
  image: string;
  description: string;
  details: string;
  link: string;
}

export const projects: ProjectData[] = [
  {
    title: "nolan-game",
    image: "/project/1.png",
    description: "a pixel medieval adventure about nolan, a genius who must save the princess through quiz battles.",
    details: "built fully with native html, css, and javascript — plus a few helper libraries.",
    link: "https://nolan-game.vercel.app/",
  },
  {
    title: "snap",
    image: "/project/2.png",
    description: "a web3 fashion app that mints every product as nft for authenticity and ownership proof.",
    details: "frontend made with next.js tailwindcss, connected to solidity smart contracts and wagmi components.",
    link: "https://snap-kappa-umber.vercel.app/",
  },
  {
    title: "biosecureland monitoring",
    image: "/project/3.png",
    description: "a webgis that maps zoonotic disease risk areas, ranked top 12 in mapid hackathon.",
    details: "built using react and mapid api for spatial mapping and risk visualization.",
    link: "https://secureland.vercel.app/",
  },
  {
    title: "first portofolio project",
    image: "/project/4.png",
    description: "my first ever portfolio project — made for gdg weekly class final project.",
    details: "ranked 3rd place (still waiting for the certificate lol). built fully with native html, css, and javascript.",
    link: "https://project-gdg-eight.vercel.app/",
  },
  {
    title: "rhinowall av",
    image: "/project/5.png",
    description: "a clean landing page design for an antivirus product called rhinowall.",
    details: "built fully with native html, css, and javascript for lightweight performance.",
    link: "https://rhinowall.vercel.app/",
  },
];
