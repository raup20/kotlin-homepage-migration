import "./index.scss"

export function StartSection() {
  return (
    <section className="start-section">
      <div className="container">
        <p className="start-section__eyebrow">How about to try?</p>

        <div className="start-section__grid">
          <h2 className="start-section__title">
            Start using Kotlin today!
            <br />
            Build your first app in your favorite IDE
          </h2>
        </div>

        <div className="start-section__actions">
          <a href="#" className="btn-primary">
            Get started
          </a>
        </div>
      </div>
    </section>
  )
}
