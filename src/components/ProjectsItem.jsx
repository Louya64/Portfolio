import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import "./ProjectsItem.css";

const ProjectsItem = ({
	slug,
	title,
	urlImgDesktop,
	urlImgMobile = null,
	description,
	text,
	stack,
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
			<p className="projectsItemText">{text}</p>
			<div className="projectsItemInfos">
				<h3 className="projectsItemTitle">{title}</h3>
				<p>{description}</p>
				<p>{stack}</p>
				<div className="projectsItemLinks">
					<div>Voir le projet :</div>
					<div>
						{urlGithub &&
							urlGithub.map((url) => (
								<a key={url} target="_blank" rel="noreferrer" href={url}>
									<FaGithub />
								</a>
							))}
						{urlWebsite && (
							<a target="_blank" rel="noreferrer" href={urlWebsite}>
								<BsGlobe2 />
							</a>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};

export default ProjectsItem;
