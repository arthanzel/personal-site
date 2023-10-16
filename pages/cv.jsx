import profilePicture from "@/r/profile.jpg";
import styles from "./cv.module.scss";

// TODO: Tweak rendering details with an optional export
// export const config = {
//     // layout: "default",
//     head: <></>,
//     style: <></>,
// };

// #region Components

const Education = ({ title, where, date, distinction }) => (<div>

</div>);

const Technical = ({ role, company, location, date, remarks }) => (<div>

</div>);

const Leadership = Technical;

const Award = ({ name, where, date, remark }) => (<div>

</div>);

// #endregion

// #region Data

const technicalExperience = [
    {
        role: "Data Scientist",
        company: <a href="https://taskbase.com">Taskbase AG</a>,
        location: "Zürich, Switzerland",
        date: [2022, 2023],
        remarks: [
            "Developed **AIs** for a **digital learning** application that provides real-time, tailored feedback to texts written in natural language.",
            "Researched how **prompt engineering** affects large language models (**LLMs**) in **natural language inference** tasks.",
            "Developed in-house, multilingual natural language AI models.",
            "Took responsibility for developer ergonomics concerns including Gradle builds, build automation.",
        ],
    },
    {
        role: "Software Engineer",
        company: <a href="https://myesmart.com">eSMART Technologies</a>,
        location: "Lausanne, Switzerland",
        date: [2020 - 2021],
        remarks: [
            "Architected an **IoT** system for smart home management, and designed **security** algorithms for device discovery and pairing.",
            "Evaluated **database** software for performance in **big data analytics** pipelines.",
            "Created automated provisioning and deployment processes for **cloud infrastructure**.",
        ],
    },
    {
        role: "Frontend Engineer",
        company: <a href="https://gitlab.com">GitLab</a>,
        location: "Remote",
        date: [2019],
        remarks: [
            "Implemented rich and **responsive UIs** for a project planning application.",
            "Contributed to **TDD** practices with near 100% code coverage.",
            "Patched **security** holes in frontend code and managed security backports.",
            "Worked **asynchronously** in a **full-stack** team with devs and designers from around the world."
        ],
    },
    {
        role: "Web Developer",
        company: <a href="https://www.pivotree.com/">Pivotree Inc.</a>,
        location: "Ottawa, Canada + Remote",
        date: [2011, 2018],
        remarks: [
            "Developed **full-stack** B2B and B2C **e-commerce** applications for large retailers using **Oracle Commerce**.",
            "Led **R&D** for next-generation, **microservice-based** webapps using **isomorphic rendering** techniques.",
            "Worked remotely from Valencia, Spain while collaborating with a team in Ottawa, Canada."
        ],
    },
    {
        role: "Web Developer",
        company: "Freelance",
        location: "Ottawa, Canada",
        date: [2013, 2015],
        remarks: [
            "Designed and developed **custom webapps** for student groups at the University of Ottawa.",
            "Worked closely with private clients to deliver and maintain **pixel-perfect** solutions.",
        ],
    },
];

// #endregion

export default () => (
    <div className={styles["cv-body"]}>
        <header className={styles["chroma-header"]}>
            {/* 
            Background; dark green
            Top navigation: icons to other bits of my site
            Left column, offset rounded profile pic overlapping through bottom, with green border at bottom and white at top
            Right column: name, tagline, socials (icons), location, languages
            */}
            <nav className="p-3 fs-4">
                icon navigation
            </nav>

            <div className={`container mt-4 ${styles["paper-width"]}`}>
                <div className="d-flex">
                    <div className={styles["header-image"]}>
                        <img src="https://placekitten.com/250/250" />
                    </div>

                    <div className="flex-grow-1 ms-4">
                        <h1>Martin Hanzel</h1>
                        <small>Travelling computer scientist and architect</small>
                        <div>
                            Socials:
                            <a href="https://github.com/arthanzel" className="fa-brands fa-github"></a>
                            <a href="https://gitlab.com/arthanzel" className="fa-brands fa-gitlab"></a>
                            <a href="https://www.linkedin.com/in/arthanzel/" className="fa-brands fa-linkedin-in"></a>
                            <a href="https://soundcloud.com/arthanzel/" className="fa-brands fa-soundcloud"></a>
                        </div>
                        <div>
                            <i className="fa-regular fa-envelope"></i>
                            <span className="font-monospace">TODO: martin at hanzel dot io</span>
                        </div>
                        <div>
                            <div className="d-inline-block">
                                <i className="fa-solid fa-earth-europe"></i>
                            </div>
                            <div className="d-inline-block">
                                Europe or remote
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section className={`container ${styles["paper-width"]}`}>
                {/* <h2>Objective</h2> */}
                <p className="text-center">I'm a software engineer/architect with <strong>over 10 years of combined technical and leadership experience</strong>. I did my Masters degree at <a href="https://www.epfl.ch/education/master/programs/computer-science/">EPFL</a>, one of the world's top 10 universities. <strong>I'm looking for a senior engineering role</strong> where I can design solutions, own a product, lead a team, and be a mentor to junior colleagues.</p>

                <div className={`row justify-content-around text-center fsx-sm ${styles["highlight-strong"]}`}>
                    <div className="col-md-5">
                        <div className="head-icon"><i className="fa-solid fa-compass-drafting fsx-2xl m-2"></i></div>
                        <p>I can <strong>architect</strong> efficient and reliable computer systems for your business needs. Choose on-prem, cloud-based, or cloud-native infrastructures as you need.</p>
                    </div>
                    <div className="col-md-5">
                        <div className="head-icon"><i className="fa-solid fa-brain fsx-2xl m-2"></i></div>
                        <p><strong>Machine learning</strong> and <strong>AI</strong> are essential aspects of digital innovation today. I can help you supercharge your products with AI and build your company's AI strategy.</p>
                    </div>
                    <div className="col-md-5">
                        <div className="head-icon"><i className="fa-solid fa-code fsx-2xl m-2"></i></div>
                        <p>I'm well-versed in most modern coding languages and techniques. I can help you make <strong>solid technical decisions</strong> that speed up development, reduce technical debt, and make devs happy.</p>
                    </div>
                    <div className="col-md-5">
                        <div className="head-icon"><i className="fa-solid fa-flask fsx-2xl m-2"></i></div>
                        <p>Let's explore <strong>disruptive technologies</strong> together. Thanks to my excellent academic background, I'm comfortable researching technology at the cutting edge of innovation.</p>
                    </div>
                </div>
            </section>

            <hr />

            <section className={`container ${styles["paper-width"]}`}>
                {/* Sections should have top border. Headings should be offset to just sit on the top of the border. */}
                <h2>Education</h2>
            </section>

            <section>
                <h2>Technical experience</h2>
            </section>

            <section>
                <h2>Leadership experience</h2>
            </section>

            <section>
                <h2>Selected projects</h2>
            </section>
        </main>

        <main hidden style={{ fontSize: "0.8rem" }}>
            <p className="lead">I'm a computer scientist and software engineer/architect.</p>
            <p>I did my Masters in <a href="https://www.epfl.ch/education/master/programs/computer-science/">computer
                science</a> at EPFL, one of the world's <a
                    href="https://www.topuniversities.com/university-rankings/university-subject-rankings/2019/computer-science-information-systems">top
                    10 universities for computing</a>. I love to wonder about disruptive technologies and I consider
                state-of-the-art computing papers to be my daily reading.</p>
            <p>
                My technical expertise includes many things:
                <strong>machine learning and AI</strong>,
                <strong>NLP</strong>,
                <strong>decentralized systems</strong>,
                <strong>computer languages</strong>,
                <strong>web technologies</strong>,
                <strong>cloud infrastructure</strong>,
                <strong>digital privacy</strong>,
                <strong>blockchains</strong>, and
                <strong>biological computation</strong>.
            </p>
            <p>I also studied biomedical science, in which time I led a genetic engineering research team and explored the nascent field of biological computation. Studying life sciences gave me a fresh new perspective on computing, for which I am most grateful.</p>

            <div>
                <h2>Education</h2>
                <Education
                    title="Master of Computer Science"
                    where={<a href="https://www.epfl.ch/education/master/programs/computer-science/">EPFL</a>}
                    date={[2019, 2022]} />
                <Education
                    title="B.Sc. Computer Science"
                    distinction="Summa cum Laude"
                    where={<a href="https://uottawa.ca">University of Ottawa</a>}
                    date={[2017, 2019]} />
                <Education
                    title="B.Sc. Biomedical Science"
                    distinction="Summa cum Laude"
                    where={<a href="https://uottawa.ca">University of Ottawa</a>}
                    date={[2013, 2017]} />
            </div>

            <div>
                <h2>Technical experience</h2>
            </div>

            <div>
                <h2>Leadership experience</h2>
            </div>

            <div>
                <h2>Awards/Certifications</h2>
            </div>

            <div>
                <h2>Selected projects</h2>
            </div>
        </main>
    </div>
);