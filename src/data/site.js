/**
 * Single source of truth for clinic contact details, navigation and hours.
 * Replace the placeholder phone / email / address with the real values.
 */
export const site = {
  name: 'AVM Smiles',
  tagline: 'Best Dental Clinic in Puducherry',
  // --- Contact (placeholders — update with real details) ---
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsappDisplay: '+91 98765 43210',
  whatsappHref: 'https://wa.me/919876543210',
  email: 'care@avmsmiles.com',
  emailHref: 'mailto:care@avmsmiles.com',
  address: 'No. 24, Anna Salai, T. Nagar, Puducherry, Tamil Nadu 600017',
  addressShort: 'T. Nagar, Puducherry',
  hoursDays: 'Monday – Saturday',
  hoursTime: '9:00 AM – 8:00 PM',
  hoursNote: 'Sunday by appointment only',
  rating: 4.9,
  reviewCount: 1280,
  // Google Maps embed for Puducherry (T. Nagar area)
  mapEmbed:
    'https://www.google.com/maps?q=T.+Nagar,+Puducherry,+Tamil+Nadu&output=embed',
  mapLink: 'https://www.google.com/maps/place/T.+Nagar,+Puducherry',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact-us' },
]

export const social = [
  { label: 'Facebook', href: 'https://facebook.com', key: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', key: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com', key: 'youtube' },
]

export default site
