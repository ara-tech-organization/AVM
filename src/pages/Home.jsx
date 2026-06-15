import Seo from '../components/Seo'
import {
  Hero,
  TrustBar,
  About,
  Services,
  WhyChoose,
  BeforeAfter,
  Process,
  Reviews,
  Faq,
  FinalCta,
  MapSection,
} from '../sections'

const KEYWORDS =
  'best dental clinic in chennai, dental care services in chennai, dental clinic services in chennai, dental health care in chennai, dental health services in chennai, dental hygiene clinic in chennai, teeth whitening clinic in chennai, teeth whitening dentist in chennai, the dental clinic in chennai, the tooth clinic in chennai, top dental care in chennai'

export default function Home() {
  return (
    <>
      <Seo
        title="Best Dental Clinic in Chennai | AVM Smiles"
        description="AVM Smiles is the best dental clinic in Chennai, offering advanced dental treatments, expert dentists, and complete dental health care for all ages."
        keywords={KEYWORDS}
        path="/"
      />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChoose />
      <BeforeAfter />
      <Process />
      <Reviews />
      <Faq />
      <FinalCta />
      <MapSection />
    </>
  )
}
