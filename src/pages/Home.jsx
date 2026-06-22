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
  'best dental clinic in pondicherry, dental care services in pondicherry, dental clinic services in pondicherry, dental health care in pondicherry, dental health services in pondicherry, dental hygiene clinic in pondicherry, teeth whitening clinic in pondicherry, teeth whitening dentist in pondicherry, the dental clinic in pondicherry, the tooth clinic in pondicherry, top dental care in pondicherry'

export default function Home() {
  return (
    <>
      <Seo
        title="Best Dental Clinic in Pondicherry | AVM Smiles"
        description="AVM Smiles is the best dental clinic in Pondicherry, offering advanced dental treatments, expert dentists, and complete dental health care for all ages."
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
