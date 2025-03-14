import { useParams } from 'react-router-dom';
import { useStore } from '../store/projectStore';

export function Project() {
  const { id } = useParams();
  const getProjectById = useStore.getState().getProjectById;
  const project = getProjectById(id);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <div>
        <h1>{project.name}</h1>
        {project.tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
        <ul>
          <li>
            <p>Goal</p>
            <p>{project.goal}</p>
          </li>
          <li>
            <p>Technologies</p>
            {project.technologies.map((tech) => (
              <p key={tech}>{tech}</p>
            ))}
          </li>
          <li>
            <p>Year</p>
            <p>{project.year}</p>
          </li>
        </ul>
      </div>
      <div>
        {project.medias.map((media) => (
          <img src={media.url} alt={media.alt} key={media.alt} />
        ))}
      </div>
    </div>
  );
}
