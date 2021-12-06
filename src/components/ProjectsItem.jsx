import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import "./ProjectsItem.css";

const ProjectsItem = ({
	slug,
	title,
	urlImgDesktop,
	urlImgMobile = null,
	description,
	urlGithub,
	urlWebsite = null,
}) => {
	return (
		<article className={`projectsItem ${slug}`}>
			<div className="projectsItemImg">
				<img className="imgDesktop" src={urlImgDesktop} alt={title} />
				{urlImgMobile && (
					<img className="imgMobile" src={urlImgMobile} alt={title} />
				)}
			</div>
			<div className="projectsItemInfos">
				<h3 className="projectsItemTitle">{title}</h3>
				<p>{description}</p>
				<div className="projectsItemLinks">
					Voir le projet :
					<a target="_blank" rel="noreferrer" href={urlGithub}>
						<FaGithub />
					</a>
					{urlWebsite && (
						<a target="_blank" rel="noreferrer" href={urlWebsite}>
							<BsGlobe2 />
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProjectsItem;
