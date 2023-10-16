import { parse as marked } from "marked";
import Head from "next/head";

import Base64Protect from "@/components/Base64Protect";
import ProfilePicture from "@/components/ProfilePicture";
import styles from "./cv.module.scss";

// #region Components

function renderDate(date) {
    if (Array.isArray(date)) {
        if (date.length == 1) {
            return date[0];
        } else {
            return `${date[0]}-${date[1]}`;
        }
    } else if (Number.isInteger(date)) {
        return date;
    } else {
        return null;
    }
}

const Education = ({ title, where, date, distinction }) => (<div>

</div>);

const Technical = ({ role, company, href, location, date, remarks, children }) => (<div className={`mb-3 d-flex fsx-xs ${styles.technical}`}>
    <div className={`${styles.info}`}>
        <div className={styles.title}>{role}</div>
        {href ?
            <><a href={href}>{company}</a><br /></> :
            <>{company}<br /></>
        }
        {location ? <>{location}<br /></> : null}
        {date ? renderDate(date) : null}
    </div>
    <ul className="m-0 p-0 d-flex flex-column">
        {
            (children?.length > 0) ?
                children :
                (remarks || []).map(remark => <li key={remark} dangerouslySetInnerHTML={{ __html: marked(remark) }}></li>)
        }
    </ul>
</div>);

const Leadership = Technical;

const Award = ({ name, where, date, remark }) => (<div>

</div>);

// #endregion

// #region Data

const technicalExperience = [
    {
        role: "Data Scientist",
        href: "https://taskbase.com",
        company: "Taskbase AG",
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
        href: "https://myesmart.com",
        company: "eSMART Technologies",
        location: "Lausanne, Switzerland",
        date: [2020, 2021],
        remarks: [
            "Architected a **cloud-hybrid** **IoT** system for smart home management.",
            "Designed **security** algorithms for device discovery and pairing.",
            "Evaluated **database** software for performance in **big data analytics** pipelines.",
            "Created automated provisioning and deployment processes for **cloud infrastructure**.",
        ],
    },
    {
        role: "Frontend Engineer",
        href: "https://gitlab.com",
        company: "GitLab",
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
        href: "https://www.pivotree.com/",
        company: "Pivotree Inc.",
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

export default () => (<>
    <Head>
        <title>Martin Hanzel CV</title>
    </Head>
    <div className={styles["cv-body"]}>
        <header className={styles["chroma-header"]}>
            <nav className="p-3 fs-4">
                &nbsp;
            </nav>

            <div className={`container-fluid mt-4}`}>
                <div className="row">
                    <div className="col-md-5 text-center text-md-end">
                        <div className={styles["header-image"]}><ProfilePicture width="240px" /></div>

                    </div>

                    <div className="col d-flex flex-column gap-2 text-center text-md-start">
                        <h1 className="m-0">Martin Hanzel</h1>
                        <small>Travelling computer scientist and architect</small>
                        <div className={`d-flex gap-2 justify-content-center justify-content-md-start my-1 ${styles.socials}`}>
                            <a href="https://github.com/arthanzel"><i className="fa-brands fa-github"></i></a>
                            <a href="https://gitlab.com/arthanzel"><i className="fa-brands fa-gitlab"></i></a>
                            <a href="https://www.linkedin.com/in/arthanzel/"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://soundcloud.com/arthanzel/"><i className="fa-brands fa-soundcloud"></i></a>
                        </div>
                        <div>
                            <i className="fa-regular fa-envelope me-2"></i>
                            <span className="font-monospace"> martin at hanzel dot io</span>
                        </div>
                        <div>
                            <div className="d-inline-block">
                                <i className="fa-solid fa-earth-europe me-2"></i>
                            </div>
                            <div className="d-inline-block">
                                Able to live+work in Canada, Switzerland, EU
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main className="container-fluid">
            <div className="row gx-5">
                <div className="col-lg-5">
                    <section className="">
                        {/* <h2>Objective</h2> */}
                        <p className="lead">Hello &#128075;</p>
                        <p className="">I'm a computer scientist with <strong>over 10 years of combined technical and leadership experience</strong>. I did my Masters degree at <a href="https://www.epfl.ch/education/master/programs/computer-science/">EPFL</a>, one of the world's top 10 universities for computer science. Before that, I led a <strong>genetic engineering research</strong> group and explored the nascent field of <strong>biological computation</strong>.</p>

                        <p><strong>I'm looking for a senior engineering or software architecture role</strong> where I can design solutions, own a product, lead a team, and be a mentor to junior colleagues.</p>
                    </section>
                    <section>
                        {/* <h2>What I can do for you</h2> */}
                        <hr style={{ width: "200px" }} />

                        <div className="d-flex align-items-center fsx-sm gap-3 mb-3">
                            <div className={styles["square-fa-icon"]}>
                                <i className="fa-solid fa-compass-drafting fsx-2xl"></i>
                            </div>
                            <div>I can <strong>architect</strong> efficient and reliable computer systems for your business needs. Choose on-prem, cloud-based, or cloud-native infrastructures as you need.</div>
                        </div>
                        <div className="d-flex align-items-center fsx-sm gap-3 mb-3">
                            <div className={styles["square-fa-icon"]}>
                                <i className="fa-solid fa-brain fsx-2xl"></i>
                            </div>
                            <div><strong>Machine learning</strong> and <strong>AI</strong> are essential aspects of digital innovation today. I can help you supercharge your products with AI and build your company's AI strategy</div>
                        </div>
                        <div className="d-flex align-items-center fsx-sm gap-3 mb-3">
                            <div className={styles["square-fa-icon"]}>
                                <i className="fa-solid fa-code fsx-2xl"></i>
                            </div>
                            <div>I'm well-versed in most modern coding languages and practices. I can help you make <strong>solid technical decisions</strong> that speed up development, reduce technical debt, and make devs happy.</div>
                        </div>
                        <div className="d-flex align-items-center fsx-sm gap-3 mb-3">
                            <div className={styles["square-fa-icon"]}>
                                <i className="fa-solid fa-flask fsx-2xl"></i>
                            </div>
                            <div>Let's explore <strong>disruptive technologies</strong> together. Thanks to my excellent academic background, I'm comfortable researching technology at the cutting edge of innovation.</div>
                        </div>
                    </section>
                    <section className="fsx-sm">
                        <h2>Competences</h2>
                        <p><strong>Human languages:</strong> English (native), Slovak (native), Czech (fluent), French (fluent), Spanish (beginner)</p>
                        <p><strong>Tech stuff:</strong></p>
                    </section>
                    <section id={styles.publications}>
                        <h2>Publications</h2>
                        <ul className="fsx-sm">
                            <li><a href="https://pubmed.ncbi.nlm.nih.gov/26075023/">(2015) No training required: experimental tests support homology-based DNA assembly as a best practice in synthetic biology </a></li>
                        </ul>
                    </section>
                </div>

                <div className="col">
                    <section className="mb-4">
                        <h2>Academics</h2>
                        <div className="d-flex gap-4 fsx-xs">
                            <div>
                                <strong>Master of Computer Science</strong><br />
                                École Polytechnique Fédérale Lausanne<br />
                                2019-2022
                            </div>
                            <div>
                                <strong>B.Sc. Computer Science</strong><br />
                                University of Ottawa<br />
                                <em>Summa cum Laude</em><br />
                                2017-2019
                            </div>
                            <div>
                                <strong>B.Sc. Biomedical Science</strong><br />
                                University of Ottawa<br />
                                <em>Magna cum Laude</em><br />
                                2013-2017
                            </div>
                        </div>
                        {/* TODO: Normalize these widths with CSS grid */}
                        {/* https://stackoverflow.com/questions/48003318/all-widths-set-to-width-of-widest-element */}
                    </section>

                    <section>
                        <h2>Technical experience</h2>

                        {technicalExperience.map((t, i) => <Technical key={i} {...t} />)}
                    </section>

                    <section>
                        <h2>Leadership experience</h2>

                        <Leadership
                            role="Residence mentor"
                            company="University of Ottawa"
                            location="Ottawa, Canada"
                            date={[2014, 2017]}>
                            <li>Designed and piloted a mentors-in-residence program to provide academic support for first-year university students.</li>
                            <li><strong>Increased funding</strong> to the Mentoring Centre by 300% in the first year.</li>
                            <li><strong>Increased conversion rate</strong> by 10x in one year.</li>
                            <li>Developed software to <strong>automate</strong> data entry and reduced bureaucratic workload from hours to a few minutes.</li>
                            <li>Organized weekly study groups and coordinated monthly <strong>community-building</strong> events for residents. </li>
                        </Leadership>
                        <Leadership
                            role="President"
                            company="iGEMuOttawa"
                            location="Ottawa, Canada">
                            <li><strong>Led and managed</strong> a genetic engineering research group.</li>
                            <li>Researched and developed computation techniques using living cells as computers.</li>
                            <li>Oversaw <strong>finances, fundraising, and hiring</strong>.</
                            li>
                            <li>Wrote bioinformatics software for gene network construction.</li>
                            <li><strong>Consulted</strong> for a biotechnology startup in Ottawa.</li>
                        </Leadership>
                        <Leadership
                            role="Founder"
                            company="uEducate"
                            location="Ottawa, Canada">
                            <li>Founded <i>uEducate</i>, an organization dedicated to <strong>promoting higher education in science and technology</strong>. </li>
                            <li>Established an annual science competition for high school students in Ontario, Canada.</li>
                            <li><strong>Created financial scholarships</strong> for aspiring science students, in the amount of <strong>$4000</strong> in the first year and more in years after. </li>
                        </Leadership>
                    </section>
                </div>
            </div>

            <h2>Open source</h2>
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className={`d-flex gap-3 ${styles["os-project"]}`}>
                            <i className="fa-solid fa-square-root-variable"></i>
                            <div className="flex-grow-1">
                                <small>Library</small>
                                <h3 className={styles.title}><a href="#">Evaluatex</a></h3>
                                <p className="fsx-sm">Safe LaTeX and ASCIIMath evaluator for JavaScript.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`d-flex gap-3 ${styles["os-project"]}`}>
                            <i className="fa-solid fa-dna"></i>
                            <div className="flex-grow-1">
                                <small>Webapp</small>
                                <h3 className={styles.title}><a href="#">Quantum of Cells</a></h3>
                                <p className="fsx-sm">Prototype systems of interacting differential equations in the browser.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`d-flex gap-3 ${styles["os-project"]}`}>
                            <i className="fa-solid fa-fish-fins"></i>
                            <div className="flex-grow-1">
                                <small>Research</small>
                                <h3 className={styles.title}><a href="#">The River Machine</a></h3>
                                <p className="fsx-sm">Agent-based population modelling of fish in a river ecosystem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`d-flex gap-3 ${styles["os-project"]}`}>
                            <i className="fa-solid fa-share-nodes"></i>
                            <div className="flex-grow-1">
                                <small>Research</small>
                                <h3 className={styles.title}><a href="#">Share Tree DB</a></h3>
                                <p className="fsx-sm">
                                    A blockchain-based database allowing secure storage and sharing of data in untrusted environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</>);