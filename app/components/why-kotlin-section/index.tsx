import "./index.scss"
import { ProgrammingLanguage } from "./programming-language"

const sections = [
  {
    title: "A productive way to write server-side applications",
    description:
      "Compatible with the Java ecosystem. Use your favorite JVM frameworks and libraries.",
    buttonText: "Learn more",
    buttonLink: "#",
    media: "youtube",
    youtubeId: "8xAH7RU0Y44",
  },
  {
    title: "Cross-platform layer for native applications",
    description:
      "Share application logic between web, mobile, and desktop platforms while keeping an experience native to users.\n\nSave time and get the benefit of unlimited access to features specific to these platforms.",
    buttonText: "Learn about Kotlin Multiplatform",
    buttonLink: "#",
    media: "image",
  },
  {
    title: "Big, friendly and helpful community",
    description:
      "Kotlin has great support and many contributors in its fast-growing global community. Enjoy the benefits of a rich ecosystem with a wide range of community libraries. Help is never far away.",
    buttonText: "Join the community",
    buttonLink: "#",
    media: "youtube",
    youtubeId: "JGvk4M0Rfxo",
  },
]

function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="why-kotlin-section__youtube">
      <iframe
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  )
}

export function WhyKotlinSection() {
  return (
    <section className="why-kotlin-section">
      <div className="container">
        <h2>Why Kotlin</h2>

        <ProgrammingLanguage />

        {sections.map((section) => (
          <div key={section.title} className="why-kotlin-row">
            <div className="why-kotlin-text">
              <h3>{section.title}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{section.description}</p>
              <div className="why-kotlin-actions">
                <a href={section.buttonLink} className="btn-secondary">
                  {section.buttonText}
                </a>
              </div>
            </div>

            <div className="why-kotlin-media">
              {section.media === "youtube" && section.youtubeId && (
                <YouTubeEmbed id={section.youtubeId} />
              )}
              {section.media === "image" && (
                <img
                  src="/images/index/multiplatform.svg"
                  alt="Kotlin Multiplatform"
                  className="why-kotlin-section__image"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}