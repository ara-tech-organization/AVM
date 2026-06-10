import { Smile, Cpu, BadgeCheck, HeartHandshake } from 'lucide-react'

/** Trust-bar metrics shown beneath the hero. */
export const trustStats = [
  { icon: Smile, value: 10000, suffix: '+', label: 'Happy Smiles' },
  { icon: Cpu, value: null, text: 'Advanced', label: 'Digital Dentistry' },
  { icon: BadgeCheck, value: null, text: 'Certified', label: 'Specialists' },
  { icon: HeartHandshake, value: null, text: 'Patient', label: 'First Care' },
]

/** Floating hero badges. */
export const heroStats = {
  experience: { value: 10, suffix: '+', label: 'Years of Experience' },
  patients: { value: 25000, suffix: '+', label: 'Patients Treated' },
  rating: { value: 4.9, label: 'Google Rating', count: '1,280+ reviews' },
}

export default trustStats
