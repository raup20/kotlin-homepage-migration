import "./index.scss"
import { useEffect, useMemo, useState } from "react"
import { testimonials } from "./data"

export function UsageSection() {
  const [sortByName, setSortByName] = useState(false)

  useEffect(() => {
    const savedOrder = localStorage.getItem("kotlin-testimonials-order")
    setSortByName(savedOrder === "name")
  }, [])

  const sortedTestimonials = useMemo(() => {
    return sortByName
      ? [...testimonials].sort((a, b) => a.company.localeCompare(b.company))
      : testimonials
  }, [sortByName])

  function toggleSort() {
    const next = !sortByName
    setSortByName(next)
    localStorage.setItem("kotlin-testimonials-order", next ? "name" : "default")
  }

  return (
    <section className="usage-section">
      <div className="container">
        <h2>Kotlin Usage Highlights</h2>

        <div className="usage-section__toolbar">
          <button type="button" className="btn-secondary" onClick={toggleSort}>
            Sort: {sortByName ? "A-Z" : "Default"}
          </button>
        </div>

        <div className="usage-section__grid">
          {sortedTestimonials.map((item) => (
            <a
              key={item.company}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="usage-section__card"
            >
              <img
                src={item.logo}
                alt={item.company}
                className={`usage-section__logo${
                  item.company === "Spring" ? " usage-section__logo_spring" : ""
                }`}
              />
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}