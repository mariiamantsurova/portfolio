//react
import React from "react";
import { useRef } from "react";
//Icons
import logoIcon from "../public/icons/logo.svg";
import CVIcon from "../public/icons/CV.svg";
import ArrowIcon from "../public/icons/arrow-down.svg";
//Canvas
import Canvas from "./Canvas";
//Styles
import Styles from "./styles/app.module.scss";
//Components
import Marguee from "./Components/Margue";
function App() {
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const contactsRef = useRef(null);
	const scrollToRef = (target) => {
		if (target.current !== null) {
			console.log(target?.current);
		}
		window.scrollTo({
			top: target.current.offsetTop,
			behavior: "smooth",
		});
	};
	return (
		<div className="App">
			<nav className={Styles["nav-bar"]}>
				<div className={Styles["links"]}>
					<button
						onClick={() => {
							scrollToRef(aboutRef);
						}}
					>
						/about me
					</button>
					<button
						onClick={() => {
							scrollToRef(skillsRef);
						}}
					>
						/skills
					</button>
					<button
						onClick={() => {
							scrollToRef(contactsRef);
						}}
					>
						/contacts
					</button>
				</div>
				<div className={Styles["logo-wrapper"]}>
					<img src={logoIcon} alt="" />
				</div>
			</nav>
			<section className={Styles["main"]}>
				<h2>Hello,</h2>
				<h1>
					I’m Maria <br />
					Mantsurova
				</h1>
				<h3>{"<Full Stack Developer />"}</h3>
				<button className={Styles["download-cv-btn"]}>
					<img src={CVIcon} alt="CV-download-icon" className={Styles["cv-icon"]} />
					<img src={ArrowIcon} alt="CV-download-icon" className={Styles["arrow-icon"]} />
				</button>
			</section>
			<Canvas />
			<section ref={aboutRef} style={{ height: "100vh" }} className={Styles["section-aboutme"]}>
				<Marguee styles="purple" />
				<Marguee styles="grey" />
				<div className={Styles["container-aboutme"]}>
					<div className={Styles["about-title"]}>
						<h2>About Me</h2>
						<h3>
							About <br /> Me
						</h3>
					</div>

					<div className={Styles["wrap-text-container"]}>
						<div className={Styles["container-overflow"]}>
							<p>
								I am a fullstack developer with 5+ years of experience in developing website applications, designing and developing web-based
								solutions, and integrating web technologies. I am skilled in JavaScript, Node.js, HTML, CSS, and React.js. I have a solid
								understanding of database systems and have experience with MySQL, MongoDB, and PostgreSQL. My experience also includes creating
								and developing Restful APIs, working with cloud services such as AWS, and developing and deploying web applications.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section ref={skillsRef} style={{ height: "100vh" }}></section>
			<section ref={contactsRef} style={{ height: "100vh" }}></section>
		</div>
	);
}

export default App;
