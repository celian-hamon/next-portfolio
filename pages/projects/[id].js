import { useRouter } from 'next/router'

import styles from '../../styles/Project.module.scss'

const Project = () => {
  const router = useRouter()
  const { id } = router.query

  return <div className={styles.project_container}>
    Project: {id}
  </div>
}

export default Project