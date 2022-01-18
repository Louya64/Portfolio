import blindDesktop from "./assets/BlindCrashTestDesktop.jpg";
import blindMobile from "./assets/BlindCrashTestMobile.jpg";
import llmDesktop from "./assets/LLMWikiMusicDesktop.jpg";
import wildRestoDesktop from "./assets/LeWildDesktop.jpg";
import wildRestoMobile from "./assets/LeWildMobile.jpg";
import morpionDesktop from "./assets/MorpionDesktop.jpg";
import morpionMobile from "./assets/MorpionMobile.jpg";
import workflowGithubDesktop from "./assets/WorkflowGithub.jpg";
import noImageDesktop from "./assets/noImageDesktop.jpg";
import noImageMobile from "./assets/noImageMobile.jpg";

const projectItems = [
	{
		id: 1,
		title: "Blind Crash Test",
		slug: "blindCrashTest",
		urlImgDesktop: blindDesktop,
		urlImgMobile: blindMobile,
		description: "Projet de formation n°2 Wild Code School",
		text: "Nous étions 5 développeurs, nous devions faire un projet React avec un appel API. L'idée de faire un quizz musical nous a parue amusante, et le temps trop court.",
		stack: "React / API REST(deezer)",
		urlGithub: ["https://github.com/marie5060/Blind-Crash-Test"],
		urlWebsite: "https://marie5060.github.io/Blind-Crash-Test/",
	},
	{
		id: 2,
		title: `LLM Wiki Music`,
		slug: "llmWikiMusic",
		urlImgDesktop: llmDesktop,
		urlImgMobile: noImageMobile,
		description: "Hackathon de 30h - thème: la musique",
		text: "5 développeurs, 30h, thème: la musique. On a peu ou pas dormi et beaucoup ri. Cette encyclopédie est une mine d'infos sur les artistes avec la possibilité d'écouter plusieurs clips",
		stack: "React / API REST",
		urlGithub: ["https://github.com/bast44trl/LLM_WikiMusic"],
		urlWebsite: "https://bast44trl.github.io/LLM_WikiMusic/",
	},
	{
		id: 3,
		title: "Morpion",
		slug: "morpion",
		urlImgDesktop: morpionDesktop,
		urlImgMobile: morpionMobile,
		description: "Petit projet personnel pour m'amuser",
		text: "Petit projet en tout début de formation, sur mon temps libre, pour me mettre en appétit. J'aime ces couleurs et j'assume ^^",
		stack: "HTML CSS Bootstrap JS Vanilla",
		urlGithub: ["https://github.com/Louya64/morpion"],
		urlWebsite: "https://louya64.github.io/morpion/",
	},
	{
		id: 4,
		title: "Workflow Github",
		slug: "workflowGithub",
		urlImgDesktop: workflowGithubDesktop,
		urlImgMobile: noImageMobile,
		description: "Petit projet personnel pour réviser github",
		text: "Les débuts avec github ont posé des difficultés à pas mal de monde. J'ai voulu faire un récapitulatif des étapes pour aider mes collègues ainsi que moi même.",
		stack: "HTML Sass",
		urlGithub: ["https://github.com/Louya64/WorkflowGithub"],
		urlWebsite: "https://louya64.github.io/WorkflowGithub/",
	},
	{
		id: 5,
		title: "Le Wild Restaurant",
		slug: "leWildRestaurant",
		urlImgDesktop: wildRestoDesktop,
		urlImgMobile: wildRestoMobile,
		description: "Projet de formation n°1 Wild Code School",
		text: "Mon premier projet déployé! Nous étions 4 développeurs et nous avons imaginé que nous étions les employés d'un restaurant dont nous faisions le site. Attention, photos choquantes (ceci est une blague)",
		stack: "HTML CSS JS",
		urlGithub: ["https://github.com/Louya64/The-Wild-restau"],
		urlWebsite: "https://louya64.github.io/The-Wild-restau/",
	},
	{
		id: 6,
		title: "En cours ... SporEko",
		slug: "sporEko",
		urlImgDesktop: noImageDesktop,
		urlImgMobile: noImageMobile,
		description: "Projet de formation n°3 Wild Code School",
		text: "Mon projet préféré, tellement instructif! Des vrais clients à qui nous faisons des retours réguliers sur l'avancement du projet, ce qui permet d'adapter au fur et à mesure de leurs demandes. Seulement 2 mois, c'est déjà presque fini",
		stack: "fullstack: React Express MySql",
		urlGithub: [
			"https://github.com/DavidVM19/SporEko-back",
			"https://github.com/DavidVM19/SporEko-front",
		],
		urlWebsite: "",
	},
];

export default projectItems;
