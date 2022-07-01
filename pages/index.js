import { useEffect, useState } from "react";

import styles from '../styles/Home.module.scss'
import ProjectCard from "./components/ProjectCard";

export default function Home() {
    const projects = [
        {
            id: 1,
            name: 'Project 1',
            role: ['Role 1', 'Role 2'],
            details: 'Lorem ipsum dolor sit ameit. Donec enisl consectetur nisi, euismod nisl nisi euismod nisi.',
            link: 'https://www.google.com'
        }, {
            id: 2,
            name: 'Project 2',
            role: ['Role 1', 'Role 2'],
            details: 'Lorem ipsum dolor sit amet, consectetueu consectetur consectetur, nisi nisl consectetur nisi, euismod nisl nisi euismod nisi.',
            link: 'https://www.google.com'
        }, {
            id: 3,
            name: 'Project 1',
            role: ['Role 1', 'Role 2'],
            details: 'Lorem ipsum dolor sit amet,  euismod, nisl eu consectetur consectetur, nisi nisl consectetur nisi, euismod nisl nisi euismod nisi.',
            link: 'https://www.google.com'
        }, {
            id: 4,
            name: 'Project 1',
            role: ['Role 1', 'Role 2'],
            details: 'Lorem ipsum dolor sit amet, consecteturisl eu consectetur consectetur, nisi nisl consectetur nisi, euismod nisl nisi euismod nisi.',
            link: 'https://www.google.com'
        }, {
            id: 5,
            name: 'Project 1',
            role: ['Role 1', 'Role 2'],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eu consectetur consectetur, nisi nisl consectetur nisi, euismod nisl nisi euismod nisi.',
            link: 'https://www.google.com'
        },
    ];
    const contacts = [
        {
            'link':'tel:+33782538162',
            'text':'Tel'
        },
        {
            'link': 'mailto:hamoncelian@gmail.com',
            'text': 'Mail'
        }, {
            'link': 'https://github.com/celian-hamon',
            'text': 'Github'
        }, {
            'link': 'https://www.linkedin.com/in/celian-hamon/',
            'text': 'LinkedIn'
        }
    ]
    const typedText = 'this';
    const typedTextSecond = '.Projects';
    const [typedThisFirst, setTypedThisFirst] = useState('');
    const [typedThisSecond, setTypedThisSecond] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTypedThisFirst(typedText.substring(0, typedThisFirst.length + 1));
        }, 100);
        return () => clearInterval(interval);
    }
        , [typedThisFirst]);
    useEffect(() => {
        if (typedThisFirst.length === typedText.length) {
            const interval = setInterval(() => {
                setTypedThisSecond(typedTextSecond.substring(0, typedThisSecond.length + 1));
            }, 100);
            return () => clearInterval(interval);
        }
    }
        , [typedThisSecond, typedThisFirst]);

    const [navDisplay, setnavDisplay] = useState("none");
    const [navAnimation, setnavAnimation] = useState("none");
    const [animationBottom, setanimationBottom] = useState("");
    const listenScrollEvent = () => {
        if (window.scrollY > 600) {
            setnavDisplay("flex");
            setnavAnimation("nav-animation 1s ease-in-out");
        } else {
            setnavDisplay("none");
            setnavAnimation("none");
        }
        if (window.scrollY > 500 && window.scrollY < 1300) {
            document.getElementById("nav-link-projects").className = styles.selected;
            document.getElementById("nav-link-contact").className = styles.blink;
        } else {
            document.getElementById("nav-link-projects").className = '';
            document.getElementById("nav-link-contact").className = styles.selected + ' ' + styles.blink;
        }
        if (window.scrollY > 1500) {
            setanimationBottom(styles.animate_bottom);
        } else {
            setanimationBottom("");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const navLinkHomeText = '.Home();';
    const [navLinkHome, setNavLinkHome] = useState('');
    const navLinkProjectText = '.Projects();';
    const [navLinkProjects, setNavLinkProjects] = useState('');
    const navLinkContactText = '.Contact(me);';
    const [navLinkContact, setNavLinkContact] = useState('');

    const navSpawn = 80;
    useEffect(() => {
        if (window.scrollY > 600 && navDisplay === "flex") {
            if (navLinkHome !== navLinkHomeText) {
            document.getElementById('nav-link-home').className = styles.blink;
            const interval = setInterval(() => {
                setNavLinkHome(navLinkHomeText.substring(0, navLinkHome.length + 1));
            }, navSpawn);
            return () => clearInterval(interval);
        }}
    }, [navLinkHome, navDisplay]);
    useEffect(() => {
        if (navLinkHome.length === navLinkHomeText.length) {
            document.getElementById('nav-link-home').className = '';
            document.getElementById('nav-link-projects').className = styles.blink;

            const interval = setInterval(() => {
                setNavLinkProjects(navLinkProjectText.substring(0, navLinkProjects.length + 1));
            }, navSpawn);
            return () => clearInterval(interval);
        }
    }, [navLinkProjects, navLinkHome])
    useEffect(() => {
        if (navLinkProjects.length === navLinkProjectText.length) {
            document.getElementById('nav-link-home').className = '';
            document.getElementById('nav-link-projects').className = '';
            document.getElementById('nav-link-contact').className = styles.blink;
            const interval = setInterval(() => {
                setNavLinkContact(navLinkContactText.substring(0, navLinkContact.length + 1));
            }, navSpawn);
            return () => clearInterval(interval);
        }
    }, [navLinkContact, navLinkProjects])

    return (
        <div>
            <nav
                style={{
                    display: navDisplay,
                    animation: navAnimation
                }}
                className={styles.nav}
            >
                <a href="#home" id="nav-link-home">{navLinkHome}</a>
                <a href="#projects" id="nav-link-projects" className={styles.selected}>{navLinkProjects}</a>
                <a href="#contact" id="nav-link-contact">{navLinkContact}</a>
            </nav>
            <div id="home" className={`${styles.container}`}>
                <h1>HAMON Célian</h1>
                <h2>Développeur <span>Full STACK</span></h2>
                <h3>
                    <a href="#projects" className={styles.blink}>$<span>{typedThisFirst}</span>{typedThisSecond}</a>
                </h3>
            </div>
            <div id="projects" className={`${styles.project_container}`}>
                <h1 >Projects</h1>
                <div className={`${styles.projects}`}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
            <div id="contact" className={`${styles.contact_container}`}>
                <h1>Contact <span>ME</span></h1>
                <div className={`${styles.contacts} ${animationBottom}`}>
                    <h2>Celian.contacts = [
                        {contacts.map((contact, index) => (
                            <a target={"_blank"} key={index} href={contact.link} rel="noreferrer">&quot;{contact.text}&quot;</a>))}
                    ];</h2>
                </div>
            </div>
        </div>
    )
}
