import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://quiet-dodol-fd470a.netlify.app/.netlify/functions/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p>{project.description}</p>
            <p><strong>Author:</strong> {project.author}</p>
            <p><strong>Languages:</strong> {project.languages}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
