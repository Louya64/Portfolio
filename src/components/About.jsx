import React from "react";
import "./About.css";

const About = () => {
	return (
		<section className="about" id="about">
			<div>
				<div className="aboutItem">
					<h2>
						<span className="titleFont maj">M</span>on histoire
					</h2>
					<p>
						Après 5 ans en restauration et une dizaine d'années dans
						l'industrie, je choisis de me reconvertir dans le développement web
						afin de donner un nouveau sens à ma vie professionnelle.
						<br />
						Je commence par les cours openclassrooms et je découvre alors qu'on
						peut construire ce qu'on imagine pour peu qu'on apprenne à parler à
						nos machines.
					</p>
					<p>
						Me voilà donc partie dans un périple rempli de rencontres:
						<br />
						mes premiers amis, HTML et CSS, m'ont guidés vers JS, Php et C qui
						m'ont présenté Algorithme... La relation s'est révélée assez
						difficile dans un premier temps, j'ai donc décidé de chercher un
						coach. J'ai passé quelques temps avec le premier, mais je voulais
						aller plus loin, c'est là que j'ai rencontré Wild Code School.
						<br />
						Depuis lors, Algorithme est un ami précieux (même si il reste
						parfois un peu ronchon) et il m'a présenté plein de monde (React,
						Express, Node et MySql). Nous vivons chaques jours des aventures
						passionnantes. Parfois les défis sont corsés, mais ensemble, on sait
						qu'on ira loin !
					</p>
				</div>
			</div>

			<div>
				<div className="aboutItem bref">
					<h2>En bref</h2>
					<p>
						Nous allons, mes amis et moi, chercher des compagnons de routes pour
						une nouvelle aventure de type{" "}
						<span className="titleFont span">stage</span> à partir du{" "}
						<span className="titleFont span">14 Février 2022</span>.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
