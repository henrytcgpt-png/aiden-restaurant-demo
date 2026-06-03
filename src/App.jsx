import Header from './components/Header'
import Hero from './components/Hero'
import PromoCountdown from './components/PromoCountdown'
import PopularItems from './components/PopularItems'
import MenuSection from './components/MenuSection'
import FeatureGrid from './components/FeatureGrid'
import BranchSection from './components/BranchSection'
import ReviewsSection from './components/ReviewsSection'
import SmartUpdateSection from './components/SmartUpdateSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromoCountdown />
        <PopularItems />
        <div className="section-alt">
          <MenuSection />
        </div>
        <FeatureGrid />
        <div className="section-alt">
          <BranchSection />
        </div>
        <ReviewsSection />
        <SmartUpdateSection />
        <CTASection />
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
