import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<h1>Emilie Eliceyri</h1>
			<h2>Développeuse Web Junior JS / React / Node</h2>
			<h3>À la recherche d'un stage à partir du 14 février 2022</h3>
			<nav className="headerNav">
				<ul>
					<li className="headerNavItem">
						<a className="titleFont" href="#about">
							Mon histoire
						</a>
					</li>
					<li className="headerNavItem">
						<a className="titleFont" href="#projects">
							Mes projets
						</a>
					</li>
					<li className="headerNavItem">
						<a className="titleFont" href="#contact">
							Me contacter
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
