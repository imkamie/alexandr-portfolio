import { useContext } from "react"
import Education from "../components/Education"
import TerminalIcon from "../components/icons/TerminalIcon"

import { EducationInformation } from "../store"
import { ThemeContext } from "../components/ThemeContext"


function About() {
    const { theme } = useContext(ThemeContext)

    function Title({ title }: { title: string }) {
        return (
            <div className="about-page__header">
                <div className="about-page__terminal-icon"><TerminalIcon size={51} fill={theme === 'light' ? "#000000" : "#FFFFFF"} /></div>
                <h3>{title}</h3>
            </div>
        )
    }

    return (
        <>
            <div className="about-page">
                <div className="about-page__education">
                    <Title title="Education" />

                    <div className="about-page__education-info">
                        {EducationInformation.map((item, index) => (
                            <Education education={item} key={index} />
                        ))}
                    </div>
                </div>

                <div className="about-page__experience">
                    <Title title="Experience" />

                    <div className="about-page__experience-info">

                    </div>
                </div>

                <div className="about-page__certifications">
                    <Title title="Certifications" />

                    <div className="about-page__certifications-info">

                    </div>
                </div>

                <div className="about-page__skills">
                    <Title title="skills" />

                    <div className="about-page__skills-info">

                    </div>
                </div>

                <div className="about-page__research">
                    <Title title="research" />

                    <div className="about-page__research-info">

                    </div>
                </div>

                <div className="about-page__rewards">
                    <Title title="honors & rewards" />

                    <div className="about-page__rewards-info">

                    </div>
                </div>

                <div className="about-page__projects">
                    <Title title="projects" />

                    <div className="about-page__projects-info">

                    </div>
                </div>

                <div className="about-page__volunteering">
                    <Title title="volunteer experience" />

                    <div className="about-page__volunteering-info">

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
