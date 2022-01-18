import emoji from "react-easy-emoji";

export const greetings = {
	name: "Shatakshi Singh",
	title: "Hi all, I'm Shatakshi!",
	description:
		"I'm a passionate Full Stack Web Developer having experience in building Cross Platform Web applications with JavaScript / Reactjs / Nodejs / Java and some other cool libraries and frameworks. I'm also an enthusiastic learner, always looking for opportunities to expand my skillset, and willing to learn and work across technologies and domains.",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "Shatakshis667",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/shatakshiisingh/",
	instagram: "https://www.instagram.com/shatakshiisingh/",
	twitter: "https://twitter.com/Shataks90848894",
	github: "https://github.com/Shatakshis667",
	linkedin: "https://www.linkedin.com/in/shatakshi-singh-75b233149/",
};

export const skillsSection = {
	title: "My Skills",
	subTitle:
		"I love exploring new technologies and leveraging them to solve real-life problems!",
	skills: [
		emoji(
			"📖 Courses Undertaken: Data Structures and Algorithms, Object-Oriented Programming, Operating System, Database Systems, Computer Networks"
		),
	],

	softwareSkills: [
		{
			skillName: "C",
			fontAwesomeClassname: "logos:c",
		},
		{
			skillName: "CPP",
			fontAwesomeClassname: "vscode-icons:file-type-cpp",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "Nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "Expressjs",
			fontAwesomeClassname: "logos:express",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "SQL-Database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "MongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "Salesforce",
			fontAwesomeClassname: "logos:salesforce",
		},
		{
			skillName: "Elasticsearch",
			fontAwesomeClassname: "logos:elasticsearch",
		},
		{
			skillName: "Kibana",
			fontAwesomeClassname: "logos:kibana",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const educationInfo = [
	{
		schoolName: "National Institute of Technology, Kurukshetra",
		subHeader: "Bachelor of Technology, Information Technology",
		duration: "2018 - 2022",
		desc: "CGPA: 9.5441/10.00 (till 6th semester)",
	},
	{
		schoolName: "Seth Anandram Jaipuria School, Ghaziabad",
		subHeader: "All India Senior School Certificate Examination",
		duration: "2018",
		desc: "Percentage:  97.6%",
	},
];

export const experience = [
	{
		role: "Summer Analyst",
		company: "Goldman Sachs, Bangalore",
		companylogo: "/img/icons/common/Goldman_Sachs.png",
		date: "Jul 2021 - Aug 2021",
		desc: "Worked in the Global Markets Engineering Division of Goldman Sachs on Data Visualization using technologies such as Perl, Elastic Search & Kibana.",
	},
	{
		role: "Software Development Intern",
		company: "LinkedIn, Bangalore",
		companylogo: "/img/icons/common/linkedin.png",
		date: "May 2021 - Jul 2021",
		desc: "Worked in the Trust org of LinkedIn, implementing authorization in the Fuse Counting System using technologies such as Java, Rest.li, Dust.js, etc.",
	},
	{
		role: "Software Development Intern",
		company: "Brillio, Pune",
		companylogo: "/img/icons/common/brillio.png",
		date: "Jan 2021 - May 2021",
		desc: "Worked in the CEP team on Salesforce Development. Designed a lightning component and worked on a payment gateway system using Apex, Aura.",
	},
];

export const projects = [
	{
		name: "ExamPlus [Microsoft-Engage'21-Project]",
		desc: "An Examination Management System to conduct examinations digitally in a hassle-free manner. One can create, attempt, and monitor tests, and maintain score records in graphical formats.",
		stack: "Tech stack: Node.js, Express.js, React.js, Redux, MongoDB",
		github: "https://github.com/Shatakshis667/Microsoft-Engage-2021-Project",
		link: "http://examplus.herokuapp.com/",
	},
	{
		name: "Hostel Auction Website",
		desc: "An online platform for the student community that bridges the gap between the buyers, who are looking for a suitable place to sell their goods, and the sellers, who are looking for a place to buy new or pre-used goods at reasonable prices.",
		stack: "Tech stack: Node.js, Express.js, React.js, Redux, MongoDB",
		github: "https://github.com/Shatakshis667/Hostel-Auction",
	},
	{
		name: "Travel Website ✈️",
		desc: "A cross-platform Travel blog using REST API backend with  JWT user authentication that lets the user perform all the   CRUD operations, file upload using Multer, and view places on maps using Google Maps API.",
		stack: "Tech stack: Node.js, Express.js, React.js, MongoDB",
		github: "https://github.com/Shatakshis667/Travel-blog",
	},
	{
		name: "Movie App 🎬",
		desc: "A cross-platform Movie App that fetches the latest movies with the entire description using MovieDB API and lets the user add/remove movies in their Favorites section.",
		stack: "Tech stack: Node.js, Express.js, React.js, Redux, MongoDB",
		github: "https://github.com/Shatakshis667/Movie-App",
	},
];

export const achievements = [
	{
		name: "GHC'21 Scholar",
		issuedby: "Issued by: AnitaB.org",
		achievement:
			"Awarded GHC Student Scholarship to attend the 2021 Virtual Grace Hopper Celebration, which is the world's largest gathering of women technologists. Selected among top 250 GHC'21 Scholars from all around the world.",
	},
	{
		name: "DESIS Ascend Fellow'20",
		issuedby: "Issued by: The D.E. Shaw Group",
		achievement:
			"Selected among 30 shortlisted candidates from all over India for the prestigious DESIS Ascend Fellowship.",
	},
	{
		name: "Grand Finalist in Smart India Hackathon",
		issuedby: "Issued by: Smart India Hackathon 2020 (Software) by MHRD and AICTE",
		achievement:
			"Worked on a Search and Rescue Operation problem statement by the Airport Authority of India. ",
	},
	{
		name: "Microsoft Engage'21 Mentee",
		issuedby: "Issued by: Microsoft",
		achievement:
			"Selected for Microsoft Engage'21 Mentorship program, among the top 300 students from all over India.",
	},
	{
		name: "Microsoft Student Learn Ambassador",
		issuedby: "Issued by: Microsoft",
		achievement:
			"Selected as Microsoft Student Learn Ambassador.",
	},
	{
	    name: "Other Hackathons",	
		achievementBullets: [
			"Finalist, Hackathon at Techspardha'19 - Technical Fest",
			"Second position, 3 Harmony at Zeitgeist'18, IIT Ropar",
			"First position, Espirit de' Corpe at Techspardha'18",
		],
	},
];
