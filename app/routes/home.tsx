import { ThemeProvider } from "@rescui/ui-contexts"
import { HeaderSection } from "../components/header-section"
import { WhyKotlinSection } from "../components/why-kotlin-section"
import { UsageSection } from "../components/usage-section"
import { LatestFromKotlinSection } from "../components/latest-from-kotlin-section"
import { StartSection } from "../components/start-section"

function OverviewPageContent() {
  return (
    <div className="overview-page">
      <HeaderSection />
      <WhyKotlinSection />
      <UsageSection />
      <LatestFromKotlinSection/>
      <StartSection/>
    </div>
  )
}

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <OverviewPageContent />
    </ThemeProvider>
  )
}