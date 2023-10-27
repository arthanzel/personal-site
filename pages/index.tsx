import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import ProfilePicture from "@/components/ProfilePicture";

import styles from "./index.module.scss";

export default function IndexPage() {
    useEffect(() => {
        const obfuscatedEmailEl = document.getElementById('obfuscated-email');
        try {
            obfuscatedEmailEl!.innerText = atob(obfuscatedEmailEl!.innerText.substring("base64:".length));
        } catch {
            // Probably the email was already decoded. This happens with hot reload.
        }
    });

    return (<>
        <main className="container-fluid paper-width my-4 text-center d-flex flex-column justify-content-center align-items-center min-vh-100 gap-4">
            <ProfilePicture />

            <h1 className="m-0">I'm Martin</h1>
            <nav id={styles["icon-nav"]} className="d-flex justify-content-center gap-3 fs-2">
                <a href="https://github.com/arthanzel" className="fa-brands fa-github"></a>
                <a href="https://gitlab.com/arthanzel" className="fa-brands fa-gitlab"></a>
                <a href="https://www.linkedin.com/in/arthanzel/" className="fa-brands fa-linkedin-in"></a>
                <a href="https://soundcloud.com/arthanzel/" className="fa-brands fa-soundcloud"></a>
            </nav>

            <div className="lead font-monospace"><i className="fa-regular fa-envelope me-1"></i> <span id="obfuscated-email">base64:bWFydGluIGF0IGhhbnplbCBkb3QgaW8=</span></div>

            <div>
                <p>
                    I'm a travelling computer scientist and occasional musician.
                </p>
                <p className="bg-primary-subtle p-2"><strong>I'm looking for work!</strong> If you or your company are looking for a <strong>senior-level engineer</strong> or <strong>software architect</strong>, I'm more than happy to talk about interesting stuff we can create together. I've been in the computing industry for <strong>over 10 years</strong> and have excellent academic and practical experience.</p>
                <p>
                    I've worked on technical things in machine learning, NLP, decentralised systems, computer languages,
                    cloud/web technologies, digital privacy, blockchains, and biological computation.
                </p>
                <p>I have a <a href="https://www.epfl.ch/education/master/programs/computer-science/">Master of Computer
                    Science</a> from EPFL, one of the world's <a
                        href="https://www.topuniversities.com/university-rankings/university-subject-rankings/2019/computer-science-information-systems">top
                        10 universities for computing</a>. I love to wonder about disruptive technologies and I consider
                    state-of-the-art computing papers to be my daily reading.</p>
                <p>I led a genetic engineering research group at some point. We programmed living cells to do stuff. If you thought that computers don't like to behave, you probably haven't worked with cells yet.</p>
                <p>I also like to <a href="https://soundcloud.com/arthanzel">compose music</a> for rock, video games, and theatre. I'm currently meditating on writing a Broadway-style show.</p>
            </div>

            <div className="d-flex gap-2">
                <div className="btn btn-outline-primary">Writings - coming soon</div>
                <Link className="btn btn-outline-primary" href="/cv">Résumé</Link>
            </div>
        </main>
    </>);
}