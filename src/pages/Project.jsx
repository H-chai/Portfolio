import { useParams } from 'react-router-dom';
import { useStore } from '../store/projectStore';
import styles from '../styles/Project.module.css';

export function Project() {
  const { id } = useParams();
  const getProjectById = useStore.getState().getProjectById;
  const project = getProjectById(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectPage}>
      <div className={styles.projectInfo}>
        <h1 className={styles.projectTitle}>{project.name}</h1>
        <div className={styles.tagContainer}>
          {project.tags.map((tag) => (
            <p key={tag} className={styles.tag}>
              {tag}
            </p>
          ))}
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listTitle}>Goal</p>
            <p className={styles.listContent}>{project.goal}</p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.listTitle}>Technologies</p>
            {project.technologies.map((tech) => (
              <p key={tech} className={styles.listContent}>
                {tech}
              </p>
            ))}
          </li>
          <li className={styles.listItem}>
            <p className={styles.listTitle}>Year</p>
            <p className={styles.listContent}>{project.year}</p>
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        {project.medias.map((media) => (
          <img
            src={media.url}
            alt={media.alt}
            key={media.alt}
            className={`${styles.image}`}
          />
        ))}
      </div>
    </div>
  );
}
