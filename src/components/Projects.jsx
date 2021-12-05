import ProjectsItem from "./ProjectsItem";
import projectsItems from "../data.js";
import "./Projects.css";

const Projects = () => {
	return (
		<section className="projects">
			<h2 className="projectsTitle">
				<span className="titleFont maj">M</span>es projets
			</h2>
			<div className="projectsGrid">
				{projectsItems.map((item) => (
					<ProjectsItem
						key={item.id}
						slug={item.slug}
						title={item.title}
						urlImgDesktop={item.urlImgDesktop}
						urlImgMobile={item.urlImgMobile}
						description={item.description}
						urlGithub={item.urlGithub}
						urlWebsite={item.urlWebsite}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
