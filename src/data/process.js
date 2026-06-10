import {
  MessageCircle,
  Microscope,
  ClipboardList,
  Stethoscope,
  HeartPulse,
} from 'lucide-react'

/** Five-step treatment journey for the horizontal timeline. */
export const processSteps = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    desc: 'We listen to your concerns and goals to understand exactly what you need.',
  },
  {
    icon: Microscope,
    title: 'Diagnosis',
    desc: 'Digital scans and a thorough exam give us a precise, complete picture.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Plan',
    desc: 'A transparent, tailored treatment plan with clear options and pricing.',
  },
  {
    icon: Stethoscope,
    title: 'Treatment',
    desc: 'Comfortable, precise care delivered by our experienced specialists.',
  },
  {
    icon: HeartPulse,
    title: 'Follow-Up Care',
    desc: 'Ongoing support and reviews to keep your smile healthy for life.',
  },
]

export default processSteps
