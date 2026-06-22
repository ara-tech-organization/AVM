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
  'best dental clinic in puducherry, dental care services in puducherry, dental clinic services in puducherry, dental health care in puducherry, dental health services in puducherry, dental hygiene clinic in puducherry, teeth whitening clinic in puducherry, teeth whitening dentist in puducherry, the dental clinic in puducherry, the tooth clinic in puducherry, top dental care in puducherry'

export default function Home() {
  return (
    <>
      <Seo
        title="Best Dental Clinic in Puducherry | AVM Smiles"
        description="AVM Smiles is the best dental clinic in Puducherry, offering advanced dental treatments, expert dentists, and complete dental health care for all ages."
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
