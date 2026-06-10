import {
  Syringe,
  Crown,
  Layers,
  Activity,
  Sparkles,
  Brush,
  AlignHorizontalDistributeCenter,
  Frame,
  Smile,
  Wrench,
} from 'lucide-react'

/**
 * Dental services catalogue. Each entry powers the homepage Services section,
 * the /services index and the /services/:slug detail route.
 */
export const services = [
  {
    slug: 'tooth-extraction',
    name: 'Tooth Extraction',
    icon: Syringe,
    tagline: 'Gentle, pain-free removal',
    short:
      'Safe, comfortable removal of damaged or impacted teeth using modern, minimally-invasive techniques.',
    description:
      'When a tooth is beyond repair, our specialists perform extractions with precision and care. Advanced anaesthesia and atraumatic protocols keep the procedure virtually pain-free, with fast, predictable healing.',
    highlights: [
      'Minimally-invasive atraumatic technique',
      'Surgical & impacted wisdom-tooth removal',
      'Same-day comfort protocols',
    ],
    duration: '30–45 mins',
  },
  {
    slug: 'dental-crowns-and-bridges',
    name: 'Crowns & Bridges',
    icon: Crown,
    tagline: 'Restore strength & shape',
    short:
      'Custom-crafted ceramic crowns and bridges that rebuild strength, function and a natural appearance.',
    description:
      'Our tooth-coloured crowns and bridges are designed digitally and milled for a flawless fit. They restore broken or missing teeth, blending seamlessly with your natural smile for years of confident use.',
    highlights: [
      'Metal-free zirconia & E-max ceramics',
      'Digital impressions — no messy moulds',
      'Lifelike shade matching',
    ],
    duration: '2–3 visits',
  },
  {
    slug: 'dental-dentures',
    name: 'Dentures',
    icon: Layers,
    tagline: 'Comfortable, natural fit',
    short:
      'Premium full and partial dentures engineered for comfort, stability and a confident, natural smile.',
    description:
      'From flexible partials to implant-supported full dentures, we craft prosthetics that fit securely and look natural. Eat, speak and smile with renewed confidence.',
    highlights: [
      'Flexible & implant-supported options',
      'Precision fit for all-day comfort',
      'Natural aesthetics',
    ],
    duration: '2–4 visits',
  },
  {
    slug: 'root-canal-treatment',
    name: 'Root Canal Treatment',
    icon: Activity,
    tagline: 'Save your natural tooth',
    short:
      'Single-sitting, pain-free root canal therapy that relieves pain and preserves your natural tooth.',
    description:
      'Using rotary endodontics and digital apex location, we clean and seal infected canals with exceptional accuracy — often in a single visit. Say goodbye to pain while keeping your natural tooth.',
    highlights: [
      'Single-sitting RCT available',
      'Rotary endodontics & apex locators',
      'Pain-free, predictable outcomes',
    ],
    duration: '1–2 visits',
  },
  {
    slug: 'best-teeth-whitening-treatment',
    name: 'Teeth Whitening',
    icon: Sparkles,
    tagline: 'Brighter in one session',
    short:
      'Professional in-clinic and take-home whitening that lifts stains for a dramatically brighter smile.',
    description:
      'Our supervised whitening systems safely lighten years of staining in a single sitting. Enjoy a noticeably brighter, even smile with enamel-safe formulations and zero guesswork.',
    highlights: [
      'Up to several shades brighter',
      'Enamel-safe, low-sensitivity gels',
      'In-clinic & custom take-home kits',
    ],
    duration: '45–60 mins',
  },
  {
    slug: 'dental-scaling-polishing',
    name: 'Scaling & Polishing',
    icon: Brush,
    tagline: 'Healthy gums & fresh breath',
    short:
      'Deep ultrasonic cleaning that removes plaque and tartar for healthier gums and fresher breath.',
    description:
      'Routine professional cleaning is the foundation of dental health. Our ultrasonic scaling and polishing removes hardened plaque and surface stains, protecting your gums and keeping your smile fresh.',
    highlights: [
      'Ultrasonic deep cleaning',
      'Stain removal & polishing',
      'Gum-health assessment included',
    ],
    duration: '30–45 mins',
  },
  {
    slug: 'invisible-aligners',
    name: 'Invisible Aligners',
    icon: AlignHorizontalDistributeCenter,
    tagline: 'Straighten discreetly',
    short:
      'Clear, removable aligners that straighten teeth discreetly — no metal, no compromise.',
    description:
      'Our clear-aligner therapy uses a series of virtually invisible trays to gently move teeth into place. Comfortable, removable and barely noticeable — perfect for adults and teens alike.',
    highlights: [
      '3D digital treatment planning',
      'Removable & nearly invisible',
      'Fewer clinic visits',
    ],
    duration: '6–18 months',
  },
  {
    slug: 'invisible-braces',
    name: 'Braces',
    icon: Frame,
    tagline: 'Time-tested orthodontics',
    short:
      'Modern metal and ceramic braces that correct alignment and bite for a balanced, healthy smile.',
    description:
      'For complex alignment needs, our orthodontic braces deliver reliable, precise results. Choose from discreet ceramic or efficient metal systems, all supervised by experienced specialists.',
    highlights: [
      'Metal & tooth-coloured ceramic',
      'Corrects bite & alignment issues',
      'Specialist orthodontic care',
    ],
    duration: '12–24 months',
  },
  {
    slug: 'dental-veneer-treatment',
    name: 'Veneers',
    icon: Smile,
    tagline: 'Designer smile makeover',
    short:
      'Ultra-thin porcelain veneers that transform shape, colour and symmetry for a flawless smile.',
    description:
      'Veneers are wafer-thin shells bonded to the front of your teeth to correct chips, gaps and discolouration. We design each smile makeover digitally so you preview your new smile before we begin.',
    highlights: [
      'Digital smile design preview',
      'Premium porcelain veneers',
      'Natural translucency & symmetry',
    ],
    duration: '2–3 visits',
  },
  {
    slug: 'dental-implants-treatment',
    name: 'Dental Implants',
    icon: Wrench,
    tagline: 'Permanent tooth replacement',
    short:
      'Titanium implants that replace missing teeth permanently — the gold standard in restoration.',
    description:
      'Dental implants restore missing teeth with a stable, lifelike result that looks and functions like your own. With guided surgery and premium implant systems, we deliver long-lasting, natural outcomes.',
    highlights: [
      'Guided, minimally-invasive surgery',
      'Premium global implant systems',
      'Single, multiple & full-arch options',
    ],
    duration: '3–6 months',
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)

export default services
