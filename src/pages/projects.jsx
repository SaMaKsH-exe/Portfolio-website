	import React, { useEffect } from "react";
	import { Helmet } from "react-helmet";

	import NavBar from "../components/common/navBar";
	import Logo from "../components/common/logo";
	import AllProjects from "../components/projects/allProjects";

	import INFO from "../data/user";
	import SEO from "../data/seo";

	import "./styles/projects.css";

	const Projects = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);

		const currentSEO = SEO.find((item) => item.page === "projects");

		return (
			<React.Fragment>
				<Helmet>
					<title>{`Projects | ${INFO.main.title}`}</title>
					<meta name="description" content={currentSEO.description} />
					<meta
						name="keywords"
						content={currentSEO.keywords.join(", ")}
					/>
				</Helmet>

				<div className="page-content">
					<NavBar active="projects" />
					<div className="content-wrapper">
						<div className="projects-logo-container">
							<div className="projects-logo">
								<Logo width={46} />
							</div>
						</div>
						<div className="projects-container">
							<div className="title projects-title">
								Things I’ve made trying to put my dent in the
								universe.
							</div>

							<div className="subtitle projects-subtitle">
							While I am still in the early stages of my academic journey and may not have a large number of projects to showcase, I am enthusiastic about learning and collaboration. I invite you to explore the projects I have worked on, and I am open to feedback and suggestions for improvement. I believe in the power of collective learning and look forward to any collaborative opportunities that may arise.
							</div>

							<div className="projects-list">
								<AllProjects />
							</div>
						</div>
					
					</div>
				</div>
			</React.Fragment>
		);
	};

	export default Projects;
