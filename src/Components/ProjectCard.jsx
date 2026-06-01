function ProjectCard({ title, description, tech, liveUrl, githubUrl, imageUrl }) {
  return (
    <article className="project-card">
      <div className="project-card-inner">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Tech:</strong> {tech}</p>
        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="onClick" rel="https://peacefulstreams.netlify.app/">
              Live Site
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="onClick" rel="https://github.com/temcray/bible-site.git">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;

