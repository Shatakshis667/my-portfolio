import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Achievements = dynamic(() => import("../containers/Achievements"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));

import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Shatakshi Singh",
					description:
						"A passionate Full Stack Web Developer and an avid learner.",
					image: "",
					url: "",
					keywords: [
						"Shatakshi",
						"Shatakshi Singh",
						"Shatakshis667",
						"Portfolio",
						"Shatakshi Portfolio ",
						"Shatakshi Singh Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Education />
			<Experience />
			<Projects />
			<Achievements />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
