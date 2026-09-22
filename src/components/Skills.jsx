import useScrollAnimation from '../hooks/useScrollAnimation'

function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`skills fade-section ${isVisible ? 'visible' : ''}`}
      id="skills"
    >

      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-category">
          <p className="info-label">Languages</p>
          <p>C · C++· Python · SQL</p>
        </div>

        <div className="skill-category">
          <p className="info-label">Frontend</p>
          <p>JavaScript · React.js · HTML · CSS</p>
        </div>

        <div className="skill-category">
          <p className="info-label">Backend</p>
          <p>Node.js · Express.js · FastAPI · RESTful APIs</p>
        </div>

        <div className="skill-category">
          <p className="info-label">Database</p>
          <p>MongoDB · SQL</p>
        </div>

        <div className="skill-category">
          <p className="info-label">Tools</p>
          <p>Git · GitHub ·  Postman · VS Code</p>
        </div>
      </div>
    </section>
  )
}

export default Skills