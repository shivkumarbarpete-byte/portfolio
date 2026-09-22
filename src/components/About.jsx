import useScrollAnimation from '../hooks/useScrollAnimation'

function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`about fade-section ${isVisible ? 'visible' : ''}`}
      id="about"
    >

      <h2 className="section-title">About me</h2>
      <p className="about-text">
        I'm a Full Stack Developer pursuing my MCA, with hands-on experience
        building end-to-end web applications using the MERN stack. Alongside
        that, I've been exploring AI/ML — applying it to real projects like
        building prediction models. I enjoy turning ideas into working
        products and constantly learning new tools along the way.
      </p>
      <div className="about-info">
        <div>
          <p className="info-label">Currently</p>
          <p>Master of Computer Applications (MCA)</p>
        </div>
        <div>
          <p className="info-label">Based in</p>
          <p>Bhopal, India</p>
        </div>
      </div>
    </section>
  )
}

export default About