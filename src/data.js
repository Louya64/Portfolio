import blindDesktop from "./assets/BlindCrashTestDesktop.png";
import blindMobile from "./assets/BlindCrashTestMobile.png";
import llmDesktop from "./assets/LLMWikiMusicDesktop.png";
import wildRestoDesktop from "./assets/LeWildDesktop.png";
import wildRestoMobile from "./assets/LeWildMobile.png";
import morpionDesktop from "./assets/MorpionDesktop.png";
import morpionMobile from "./assets/MorpionMobile.png";
import workflowGithubDesktop from "./assets/WorkflowGithub.png";

const projectItems = [
	{
		id: 1,
		title: "Blind Crash Test",
		slug: "blindCrashTest",
		urlImgDesktop: blindDesktop,
		urlImgMobile: blindMobile,
		description:
			"Projet de formation Wild Code School React / API REST(deezer)",
		urlGithub: "https://github.com/marie5060/Blind-Crash-Test",
		urlWebsite: "https://marie5060.github.io/Blind-Crash-Test/",
	},
	{
		id: 2,
		title: `LLM Wiki Music`,
		slug: "llmWikiMusic",
		urlImgDesktop: llmDesktop,
		urlImgMobile: "",
		description: "Hackathon de 30h - thème: la musique React / API REST",
		urlGithub: "https://github.com/bast44trl/LLM_WikiMusic",
		urlWebsite: "https://bast44trl.github.io/LLM_WikiMusic/",
	},
	{
		id: 3,
		title: "Morpion",
		slug: "morpion",
		urlImgDesktop: morpionDesktop,
		urlImgMobile: morpionMobile,
		description:
			"Petit projet personnel pour m'amuser HTML CSS Bootstrap JS Vanilla",
		urlGithub: "https://github.com/Louya64/morpion",
		urlWebsite: "https://louya64.github.io/morpion/",
	},
	{
		id: 4,
		title: "Workflow Github",
		slug: "workflowGithub",
		urlImgDesktop: workflowGithubDesktop,
		urlImgMobile: "",
		description:
			"Petit projet personnel pour réviser et aider mes camarades HTML Sass",
		urlGithub: "https://github.com/Louya64/WorkflowGithub",
		urlWebsite: "https://louya64.github.io/WorkflowGithub/",
	},
	{
		id: 5,
		title: "Le Wild Restaurant",
		slug: "leWildRestaurant",
		urlImgDesktop: wildRestoDesktop,
		urlImgMobile: wildRestoMobile,
		description: "Projet de formation Wild Code School HTML CSS JS",
		urlGithub: "https://github.com/Louya64/The-Wild-restau",
		urlWebsite: "https://louya64.github.io/The-Wild-restau/",
	},
];

export default projectItems;
