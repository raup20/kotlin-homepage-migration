import "./index.scss"
import { cardsData } from "./data"

export function HeaderSection() {
  const visibleCards = cardsData

  return (
    <section className="header-section">
      <div className="container">
        <h1 className="header-title">
          A modern programming language that makes developers happier
        </h1>

        <div className="header-section__actions">
          <a href="#" className="btn-primary">Get started</a>
          <a href="#" className="btn-secondary header-section__my-btn">My Kotlin</a>
        </div>

        <div className="header-section__contributors">
          <img src="/images/assets/jetbrains-logo.svg" alt="" />
          <p>
            Developed by <a href="#">JetBrains</a> and open-source contributors
          </p>
        </div>

        <div className="header-cards">
          {visibleCards.map((card) => (
            <a key={card.id} href={card.link} className="header-card">
              <img src={card.img} alt="" />
              <h2>{card.title}</h2>
              <p>{card.subtitle}</p>
            </a>
          ))}
        </div>

        <p className="header-links">
          <a href="#">Multiplatform for Other Platforms</a>
          {" | "}
          <a href="#">Data Science</a>
        </p>
      </div>
    </section>
  )
}