import Seo from '../components/Seo'
import Container from '../components/Container'
import Button from '../components/Button'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | AVM Smiles" path="/404" />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-900 pt-24">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative text-center">
          <p className="font-display text-[7rem] font-medium leading-none text-white/90 sm:text-[10rem]">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            This page took a different route
          </h1>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            The page you’re looking for doesn’t exist or may have moved. Let’s get
            you back to a healthy smile.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/" variant="white" size="lg" icon={Home} iconRight={false}>
              Back to Home
            </Button>
            <Button to="/contact-us" variant="light" size="lg" icon={ArrowLeft} iconRight={false}>
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
