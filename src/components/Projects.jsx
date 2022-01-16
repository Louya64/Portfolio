import ProjectsItem from "./ProjectsItem";
import projectsItems from "../data.js";
import "./Projects.css";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<h2 className="sectionTitle">
				<span className="titleFont maj">M</span>es projets
			</h2>
			<div className="projectsContainer">
				{projectsItems.map((item) => (
					<ProjectsItem
						key={item.id}
						slug={item.slug}
						title={item.title}
						urlImgDesktop={item.urlImgDesktop}
						urlImgMobile={item.urlImgMobile}
						description={item.description}
						text={item.text}
						stack={item.stack}
						urlGithub={item.urlGithub}
						urlWebsite={item.urlWebsite}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
