import useScrollAnimation from '../hooks/useScrollAnimation'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`projects fade-section ${isVisible ? 'visible' : ''}`}
      id="projects"
    >

      <h2 className="section-title">Selected projects</h2>

      <div className="project-card">
        <h3>Food Safety Compliance Checker</h3>
        <p className="project-desc">
          A MERN + ML based tool to check and manage food safety compliance,
          helping identify hygiene and safety issues efficiently.
        </p>
        <div className="tech-tags">
           <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
           <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Machine Learning</span>
        </div>
        <div className="project-links">
          <a href="https://food-safety-new.vercel.app/" target="_blank" rel="noreferrer">Live site ↗</a>
          <a href="https://github.com/shivkumarbarpete-byte/Food-safety-New" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>

      <div className="project-card">
        <h3>Stock Market Analysis & Prediction Tool</h3>
        <p className="project-desc">
          A full-stack stock analysis platform with ML-based price prediction,
          moving averages, a personal watchlist, and CSV export of data.
        </p>
        <div className="tech-tags">
          <span>React</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>FastAPI</span>
          <span>Machine Learning</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/shivkumarbarpete-byte" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}

export default Projects