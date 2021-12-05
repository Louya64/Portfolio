import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<h1>Emilie Eliceyri</h1>
			<h2>
				Développeuse Fullstack Junior JS / React /
				<span className="titleFont maj">N</span>ode
			</h2>
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
