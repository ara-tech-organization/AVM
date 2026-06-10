import images from './images'

/**
 * Before/After transformations. `before` and `after` are image URLs.
 * The homepage uses a split-screen showcase, the /gallery page a grid.
 */
export const transformations = [
  {
    id: 1,
    title: 'Complete Smile Makeover',
    treatment: 'Veneers & Whitening',
    desc: 'A full cosmetic redesign — porcelain veneers paired with professional whitening to correct shape, colour and symmetry for a natural, radiant result.',
    before: images.smile1,
    after: images.smile2,
  },
  {
    id: 2,
    title: 'Single Tooth Implant',
    treatment: 'Dental Implant',
    desc: 'A missing front tooth restored with a titanium implant and lifelike crown — seamlessly blended with the surrounding teeth for full function and confidence.',
    before: images.smile3,
    after: images.smile4,
  },
  {
    id: 3,
    title: 'Aligner Correction',
    treatment: 'Invisible Aligners',
    desc: 'Crowding and spacing gently corrected with clear aligners — a discreet path to a beautifully even smile, planned in 3D from day one.',
    before: images.smile2,
    after: images.smile1,
  },
]

export default transformations
