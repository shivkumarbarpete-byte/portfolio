import useScrollAnimation from '../hooks/useScrollAnimation'

function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`contact fade-section ${isVisible ? 'visible' : ''}`}
      id="contact"
    >

      <h2 className="section-title">Let's connect</h2>
      <p className="contact-desc">
        Have an idea, project, or opportunity in mind? I'd love to hear about it.
      </p>

      <div className="contact-links">
        <a href="mailto:Shivkumarbarpete78@gmail.com">Shivkumarbarpete78@gmail.com ↗</a>
        <a href="https://github.com/shivkumarbarpete-byte" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/shivkumarbarpete/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="tel:+919713883523">+91 97138 83523 ↗</a>
      </div>

      <p className="footer-text">© 2026 Shivkumar Barpete</p>
    </section>
  )
}

export default Contact