import useScrollAnimation from '../hooks/useScrollAnimation'

function Hero() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`hero fade-section ${isVisible ? 'visible' : ''}`}
    >
      <p className="hero-tag">MERN STACK DEVELOPER</p>
      <h1>Hi, I'm Shivkumar Barpete.</h1>
      <p className="hero-desc">
        I build full-stack web apps and ML-powered tools using React, Node.js, and Python.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">See my work ↓</a>
        <a href="mailto:Shivkumarbarpete78@gmail.com" className="btn-secondary">Shivkumarbarpete78@gmail.com ↗</a>
      </div>
    </section>
  )
}

export default Hero