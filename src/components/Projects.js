import movieImg from "../assets/screenshot.png";
import policeImg from "../assets/police.png";

function Projects() {
  return (
    <div id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-table">

        {/* Movie App */}
        <div className="project-card">
          <img src={movieImg} alt="Movie App" />

          <div className="project-content">
            <h3>Movie App</h3>
            <p>
              Developed a movie search and listing application using frontend and
              backend technologies, allowing users to filter and view movie
              details.
            </p>
          </div>
        </div>

        {/* Police Friendly App */}
        <div className="project-card">
          <img src={policeImg} alt="Police Friendly App" />

          <div className="project-content">
            <h3>Police Friendly App</h3>
            <p>
              Created an online complaint submission box using SQL, enabling
              efficient tracking and management of complaints.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
