import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function ProjectCard({ project }) {
    return (
        <Link href={`/${project.id}`}>
            <div className={`${styles.project}`}>
                <h2>Name : {project.name}</h2>
                <h3>Role : {project.role.join(', ')}</h3>
                <p>Mission : {project.details}</p>
            </div>
        </Link>
    )
}