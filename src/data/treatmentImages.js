/**
 * Real treatment photography, keyed by service slug.
 * Files live in src/assets/treatments (Vite bundles + hashes them on build).
 */
import toothExtraction from '../assets/treatments/01. Tooth-Extraction.webp'
import crownsBridges from '../assets/treatments/02. Crowns & Bridges.jpg'
import dentures from '../assets/treatments/03. Dentures.png'
import rootCanal from '../assets/treatments/04. Root Canal Treatment.jpg'
import whitening from '../assets/treatments/05. Teeth Whitening.webp'
import scaling from '../assets/treatments/06. Scaling & Polishing.jpg'
import aligners from '../assets/treatments/07. Invisible Aligners.webp'
import braces from '../assets/treatments/08. Braces.jpg'
import veneers from '../assets/treatments/09. Veneers.jpg'
import implants from '../assets/treatments/10. Dental Implants.webp'
import higherStandard from '../assets/treatments/A higher standard of dental care.jpg'

export const treatmentImages = {
  'tooth-extraction': toothExtraction,
  'dental-crowns-and-bridges': crownsBridges,
  'dental-dentures': dentures,
  'root-canal-treatment': rootCanal,
  'best-teeth-whitening-treatment': whitening,
  'dental-scaling-polishing': scaling,
  'invisible-aligners': aligners,
  'invisible-braces': braces,
  'dental-veneer-treatment': veneers,
  'dental-implants-treatment': implants,
}

/** Used by the "A higher standard of dental care" section. */
export const higherStandardImage = higherStandard

export const getTreatmentImage = (slug) => treatmentImages[slug] || null

export default treatmentImages
