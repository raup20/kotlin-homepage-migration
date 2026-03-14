import "./index.scss"
import { newsData } from "./data"

export function LatestFromKotlinSection() {
  return (
    <section className="latest-from-kotlin-section">
      <div className="container">
        <h2>Latest from Kotlin</h2>

        <div className="latest-from-kotlin-section__banner">
          <a
            href="https://blog.jetbrains.com/kotlin/2022/04/kotlin-1-6-20-released/"
            target="_blank"
            rel="noopener noreferrer"
            className="latest-from-kotlin-section__banner-link"
          >
            <picture>
              <source
                media="(max-width: 537px)"
                srcSet="/images/banners/kotlin-1.6.20-mobile.png"
              />
              <img
                src="/images/banners/kotlin-1.6.20.png"
                alt="Kotlin 1.6.20 released"
              />
            </picture>
          </a>
        </div>

        <div className="latest-from-kotlin-section__grid">
          {newsData.map((news) => (
            <div key={news.title} className="latest-from-kotlin-section__item">
              <p className="latest-from-kotlin-section__tag">{news.tag}</p>

              <h3 className="latest-from-kotlin-section__title">
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {news.title}
                </a>
              </h3>
            </div>
          ))}
        </div>

        <div className="latest-from-kotlin-section__button">
          <a
            href="https://blog.jetbrains.com/kotlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Kotlin blog
          </a>
        </div>
      </div>
    </section>
  )
}