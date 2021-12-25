import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<h1>Emilie Eliceyri</h1>
			<h2>
				Développeuse Web Junior JS / React /
				<span className="titleFont maj">N</span>ode
			</h2>
			<h3>
				<span className="titleFont maj">À</span> la recherche d'un stage à
				partir du 14 février 2022
			</h3>
			<nav className="headerNav">
				<ul>
					<li className="headerNavItem">
						<a className="titleFont" href="#about">
							<span className="titleFont maj">M</span>on histoire
						</a>
					</li>
					<li className="headerNavItem">
						<a className="titleFont" href="#projects">
							<span className="titleFont maj">M</span>es projets
						</a>
					</li>
					<li className="headerNavItem">
						<a className="titleFont" href="#contact">
							<span className="titleFont maj">M</span>e contacter
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
