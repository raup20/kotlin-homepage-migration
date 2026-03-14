import "./index.scss"
import { useMemo, useState } from "react"
import hljs from "highlight.js/lib/core"
import kotlin from "highlight.js/lib/languages/kotlin"
import "highlight.js/styles/github.css"
import { tabs } from "./data"

hljs.registerLanguage("kotlin", kotlin)

const initialIndex = 0

export function ProgrammingLanguage() {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  const highlighted = useMemo(() => {
    return hljs.highlight(tabs[activeIndex].code, { language: "kotlin" }).value
  }, [activeIndex])

  return (
    <div className="programming-language-block">
      <div className="programming-language-intro">
        <h3>Modern, concise and safe programming language</h3>
        <p>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="programming-language-actions">
          <a href="#" className="btn-secondary">Get started</a>
        </div>
      </div>

      <div className="programming-language-demo">
        <div className="programming-language-tabs">
          {tabs.map((tab, i) => (
            <button
              key={tab.title}
              type="button"
              className={i === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(i)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <pre className="programming-language__code">
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    </div>
  )
}